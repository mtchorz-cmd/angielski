#!/bin/bash
# Buduje A2-Quest.pdf: HTML -> PDF (Chrome) + klikalne checkboxy i pola tekstowe (PyMuPDF).
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
fields = json.loads(html.unescape(m.group(1)))
doc = fitz.open("_raw.pdf")
assert len(doc) == 6, f"oczekiwano 6 stron, jest {len(doc)}"
n = {"cb": 0, "star": 0, "txt": 0}
for f in fields:
    page = doc[f["page"]]
    x, y, w, h = f["x"], f["y"], f["w"], f["h"]
    wd = fitz.Widget()
    wd.field_name = f["name"]
    if f["type"] in ("cb", "star"):
        wd.field_type = fitz.PDF_WIDGET_TYPE_CHECKBOX
        wd.rect = fitz.Rect(x, y, x + w, y + h)
        wd.border_width = 0
        wd.border_color = None
        wd.fill_color = None
        wd.text_color = (0.149, 0.388, 0.922)  # #2663EB
        wd.field_value = False
    else:
        wd.field_type = fitz.PDF_WIDGET_TYPE_TEXT
        wd.rect = fitz.Rect(x, y - 1, x + w, y + h)
        wd.border_width = 0
        wd.fill_color = None
        wd.text_font = "Helv"
        wd.text_fontsize = 0
        wd.text_color = (0.125, 0.141, 0.176)
    page.add_widget(wd)
    n[f["type"]] += 1
doc.set_metadata({"title": "A2 Quest: mapa bohatera", "author": "gettinenglish", "subject": "Poziom A2: gramatyka, słownictwo, umiejętności"})
doc.save("A2-Quest.pdf", garbage=3, deflate=True)
print("pola:", n, "razem:", sum(n.values()))
PY
rm -f _raw.pdf _dom.html
echo "OK -> $PWD/A2-Quest.pdf"
