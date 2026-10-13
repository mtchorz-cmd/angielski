#!/bin/bash
# Buduje A2-Quest.pdf (v2): HTML -> PDF (Chrome) + klikalne pola i linki wewnętrzne (PyMuPDF).
set -euo pipefail
cd "$(dirname "$0")"
CHROME="${CHROME:-$(ls -d ~/Library/Caches/ms-playwright/chromium-*/chrome-mac*/Google\ Chrome\ for\ Testing.app/Contents/MacOS/Google\ Chrome\ for\ Testing 2>/dev/null | head -1)}"
[ -x "$CHROME" ] || CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
URL="file://$PWD/a2-quest.html"
FLAGS=(--headless=new --disable-gpu --no-sandbox --allow-file-access-from-files --virtual-time-budget=15000 --window-size=794,1123 --hide-scrollbars)

"$CHROME" "${FLAGS[@]}" --no-pdf-header-footer --print-to-pdf="$PWD/_raw.pdf" "$URL" 2>/dev/null
"$CHROME" "${FLAGS[@]}" --dump-dom "$URL" 2>/dev/null > _dom.html

python3 - <<'PY'
import json, re, html, fitz
dom = open("_dom.html", encoding="utf-8").read()
m = re.search(r'<script type="application/json" id="fieldsjson">(.*?)</script>', dom, re.S)
data = json.loads(html.unescape(m.group(1)))
doc = fitz.open("_raw.pdf")
assert len(doc) == data["pages"], f"PDF ma {len(doc)} stron, HTML {data['pages']} (coś się przelało)"
n = {"cb": 0, "txt": 0}
for f in data["fields"]:
    page = doc[f["page"]]
    x, y, w, h = f["x"], f["y"], f["w"], f["h"]
    wd = fitz.Widget()
    wd.field_name = f["name"]
    if f["type"] == "cb":
        wd.field_type = fitz.PDF_WIDGET_TYPE_CHECKBOX
        wd.rect = fitz.Rect(x, y, x + w, y + h)
        wd.border_width = 0
        wd.border_color = None
        wd.fill_color = None
        wd.text_color = (0.216, 0.408, 0.847)  # niebieski #3768D8
        wd.field_value = False
    else:
        wd.field_type = fitz.PDF_WIDGET_TYPE_TEXT
        wd.rect = fitz.Rect(x, y - 1, x + w, y + h)
        wd.border_width = 0
        wd.fill_color = None
        wd.text_font = "Helv"
        wd.text_fontsize = 0
        wd.text_color = (0.165, 0.192, 0.251)  # atrament #2A3140
    page.add_widget(wd)
    n[f["type"]] += 1
nl, skipped = 0, []
for L in data["links"]:
    if L["target"] < 0:
        skipped.append(L["to"]); continue
    r = fitz.Rect(L["x"], L["y"], L["x"] + L["w"], L["y"] + L["h"])
    doc[L["page"]].insert_link({"kind": fitz.LINK_GOTO, "from": r, "page": L["target"], "to": fitz.Point(0, 0)})
    nl += 1
doc.set_metadata({"title": "A2 Quest: mapa wyprawy", "author": "gettinenglish", "subject": "Poziom A2: 12 etapów, 12 tygodni"})
doc.save("A2-Quest.pdf", garbage=3, deflate=True)
print("strony:", len(doc), "| pola:", n, "| linki:", nl, "| bez celu (strona jeszcze nie istnieje):", sorted(set(skipped)))
PY
rm -f _raw.pdf _dom.html
echo "OK -> $PWD/A2-Quest.pdf"
