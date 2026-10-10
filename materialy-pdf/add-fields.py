# Dodaje do gotowego PDF-a pola formularza (AcroForm), żeby kursant mógł
# wpisywać odpowiedzi i zaznaczać kratki na komputerze lub tablecie.
# Użycie: python3 add-fields.py wejście.pdf pola.json wyjście.pdf
# pola.json zapisuje build.mjs: położenia w mm względem lewego górnego rogu strony.
import json
import sys

import pymupdf

src, fields_path, dst = sys.argv[1:4]
PT = 72 / 25.4
INK = (0.125, 0.141, 0.176)
BRAND = (0.149, 0.388, 0.922)

doc = pymupdf.open(src)
fields = json.load(open(fields_path, encoding='utf-8'))
count = {'check': 0, 'text': 0, 'letter': 0}

for i, f in enumerate(fields):
    page = doc[f['page']]
    x, y, w, h = f['x'], f['y'], f['w'], f['h']
    inset = f.get('inset', 0)
    y += h * f.get('padTop', 0)  # krzyżówka: pole pod numerem hasła
    h -= h * f.get('padTop', 0)
    rect = pymupdf.Rect((x + inset) * PT, y * PT, (x + w) * PT, (y + h) * PT)
    wd = pymupdf.Widget()
    wd.field_name = f"{f['type']}_{f['page'] + 1}_{i}"
    wd.rect = rect
    wd.border_width = 0
    wd.border_color = None
    wd.fill_color = None
    if f['type'] == 'check':
        wd.field_type = pymupdf.PDF_WIDGET_TYPE_CHECKBOX
        wd.text_color = BRAND
        wd.field_value = False
    else:
        wd.field_type = pymupdf.PDF_WIDGET_TYPE_TEXT
        wd.text_font = 'Helv'
        wd.text_color = INK
        if f['type'] == 'letter':
            wd.text_maxlen = 1
            wd.text_fontsize = 11
        else:
            wd.text_fontsize = 8.5 if f.get('small') else 10.5
    added = page.add_widget(wd)
    if f['type'] != 'check' and f.get('center'):
        # /Q 1 = tekst wyśrodkowany w polu
        doc.xref_set_key(added.xref, 'Q', '1')
        page.load_widget(added.xref).update()
    count[f['type']] += 1

doc.save(dst, garbage=3, deflate=True)
print(f"Interaktywny PDF: {dst}  (pola tekstowe: {count['text']}, litery: {count['letter']}, kratki: {count['check']})")
