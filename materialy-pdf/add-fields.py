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
count = {'check': 0, 'text': 0, 'letter': 0, 'mark': 0}

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
    if f['type'] == 'mark':
        # wykreślanka: przełącznik bez znaku ✓ — wygląd „włączony” podmieniamy niżej na zakreślenie
        wd.field_type = pymupdf.PDF_WIDGET_TYPE_CHECKBOX
        wd.field_value = False
    elif f['type'] == 'check':
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

# Porządki zgodności z przeglądarkami PDF:
# - unikalny identyfikator /NM każdego pola (PyMuPDF numeruje od zera na każdej stronie,
#   przez co w części przeglądarek kratki na różnych stronach „kolidowały”),
# - odwołanie /P do strony, na której leży pole,
# - wspólne zasoby formularza (czcionki Helvetica i ZapfDingbats dla znaku ✓).
cat = doc.pdf_catalog()
helv = doc.get_new_xref()
doc.update_object(helv, '<</Type/Font/Subtype/Type1/BaseFont/Helvetica/Encoding/WinAnsiEncoding>>')
zadb = doc.get_new_xref()
doc.update_object(zadb, '<</Type/Font/Subtype/Type1/BaseFont/ZapfDingbats>>')
af = doc.xref_get_key(cat, 'AcroForm')
fields_arr = doc.xref_get_key(cat, 'AcroForm/Fields')[1]
doc.xref_set_key(cat, 'AcroForm', f'<</Fields{fields_arr}/DA(/Helv 0 Tf 0 g)/DR<</Font<</Helv {helv} 0 R/ZaDb {zadb} 0 R>>>>>>')
n = 0
for page in doc:
    for w in page.widgets():
        n += 1
        doc.xref_set_key(w.xref, 'NM', f'(ge-field-{n})')
        doc.xref_set_key(w.xref, 'P', f'{page.xref} 0 R')
        if w.field_name.startswith('mark'):
            # wygląd: wyłączony = nic, włączony = półprzezroczysty niebieski kafelek pod literą
            r = w.rect
            bw, bh = r.width, r.height
            off = doc.get_new_xref()
            doc.update_object(off, f'<</Type/XObject/Subtype/Form/BBox[0 0 {bw:.2f} {bh:.2f}]>>')
            doc.update_stream(off, b' ')
            on = doc.get_new_xref()
            doc.update_object(on, f'<</Type/XObject/Subtype/Form/BBox[0 0 {bw:.2f} {bh:.2f}]'
                                  f'/Resources<</ExtGState<</G0<</Type/ExtGState/ca 0.32/CA 0.32>>>>>>>>')
            # zaokrąglony kafelek z równym marginesem z każdej strony: między zaznaczonymi
            # literami zawsze ta sama mała przerwa — w poziomie, w pionie i po skosie
            m = min(bw, bh) * 0.07
            rr = min(bw, bh) * 0.16
            x0, y0, x1, y1 = m, m, bw - m, bh - m
            k = rr * 0.5523
            path = (f'{x0 + rr:.2f} {y0:.2f} m {x1 - rr:.2f} {y0:.2f} l '
                    f'{x1 - rr + k:.2f} {y0:.2f} {x1:.2f} {y0 + rr - k:.2f} {x1:.2f} {y0 + rr:.2f} c '
                    f'{x1:.2f} {y1 - rr:.2f} l '
                    f'{x1:.2f} {y1 - rr + k:.2f} {x1 - rr + k:.2f} {y1:.2f} {x1 - rr:.2f} {y1:.2f} c '
                    f'{x0 + rr:.2f} {y1:.2f} l '
                    f'{x0 + rr - k:.2f} {y1:.2f} {x0:.2f} {y1 - rr + k:.2f} {x0:.2f} {y1 - rr:.2f} c '
                    f'{x0:.2f} {y0 + rr:.2f} l '
                    f'{x0:.2f} {y0 + rr - k:.2f} {x0 + rr - k:.2f} {y0:.2f} {x0 + rr:.2f} {y0:.2f} c h f')
            doc.update_stream(on, f'q /G0 gs 0.149 0.388 0.922 rg {path} Q'.encode())
            doc.xref_set_key(w.xref, 'AP', f'<</N<</Off {off} 0 R/Yes {on} 0 R>>/D<</Off {off} 0 R/Yes {on} 0 R>>>>')
            doc.xref_set_key(w.xref, 'MK', '<<>>')
            doc.xref_set_key(w.xref, 'AS', '/Off')
            doc.xref_set_key(w.xref, 'V', '/Off')
            doc.xref_set_key(w.xref, 'TU', '(zaznacz literę)')
        elif w.field_type == pymupdf.PDF_WIDGET_TYPE_CHECKBOX:
            doc.xref_set_key(w.xref, 'MK', '<</CA(4)>>')

doc.save(dst, garbage=3, deflate=True)
print(f"Interaktywny PDF: {dst}  (pola tekstowe: {count['text']}, litery: {count['letter']}, kratki: {count['check']}, wykreślanka: {count['mark']})")
