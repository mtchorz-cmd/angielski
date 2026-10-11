# Dodaje do gotowego PDF-a pola formularza (AcroForm), żeby kursant mógł
# wpisywać odpowiedzi, zaznaczać kratki i sprawdzać ćwiczenia przyciskami
# „Sprawdź” / „Wyczyść” (JavaScript w PDF: Adobe Acrobat Reader, Firefox, Chrome, Edge).
# Użycie: python3 add-fields.py wejście.pdf pola.json wyjście.pdf
# pola.json zapisuje build.mjs: położenia w mm względem lewego górnego rogu strony
# oraz odpowiedzi z klucza (ans / grp+set / words / word / hit).
import json
import sys
from collections import OrderedDict

import pymupdf

src, fields_path, dst = sys.argv[1:4]
PT = 72 / 25.4
INK = (0.125, 0.141, 0.176)
BRAND = (0.149, 0.388, 0.922)

doc = pymupdf.open(src)
fields = json.load(open(fields_path, encoding='utf-8'))
count = {k: 0 for k in ('check', 'text', 'letter', 'mark', 'ring', 'score', 'btn')}
names = {}  # indeks pola w pola.json -> nazwa pola w PDF


def rounded(x0, y0, x1, y1, rr):
    k = rr * 0.5523
    return (f'{x0 + rr:.2f} {y0:.2f} m {x1 - rr:.2f} {y0:.2f} l '
            f'{x1 - rr + k:.2f} {y0:.2f} {x1:.2f} {y0 + rr - k:.2f} {x1:.2f} {y0 + rr:.2f} c '
            f'{x1:.2f} {y1 - rr:.2f} l '
            f'{x1:.2f} {y1 - rr + k:.2f} {x1 - rr + k:.2f} {y1:.2f} {x1 - rr:.2f} {y1:.2f} c '
            f'{x0 + rr:.2f} {y1:.2f} l '
            f'{x0 + rr - k:.2f} {y1:.2f} {x0:.2f} {y1 - rr + k:.2f} {x0:.2f} {y1 - rr:.2f} c '
            f'{x0:.2f} {y0 + rr:.2f} l '
            f'{x0:.2f} {y0 + rr - k:.2f} {x0 + rr - k:.2f} {y0:.2f} {x0 + rr:.2f} {y0:.2f} c h')


def form_xobject(bw, bh, content=b' ', resources=''):
    x = doc.get_new_xref()
    doc.update_object(x, f'<</Type/XObject/Subtype/Form/BBox[0 0 {bw:.2f} {bh:.2f}]{resources}>>')
    doc.update_stream(x, content)
    return x


def toggle_look(w, on_content, resources=''):
    """Przełącznik z własnym wyglądem: wyłączony = nic, włączony = on_content."""
    bw, bh = w.rect.width, w.rect.height
    off = form_xobject(bw, bh)
    on = form_xobject(bw, bh, on_content.encode(), resources)
    doc.xref_set_key(w.xref, 'AP', f'<</N<</Off {off} 0 R/Yes {on} 0 R>>/D<</Off {off} 0 R/Yes {on} 0 R>>>>')
    doc.xref_set_key(w.xref, 'MK', '<<>>')
    doc.xref_set_key(w.xref, 'AS', '/Off')
    doc.xref_set_key(w.xref, 'V', '/Off')


# ---------- 1. Pola ----------
for i, f in enumerate(fields):
    page = doc[f['page']]
    x, y, w, h = f['x'], f['y'], f['w'], f['h']
    inset = f.get('inset', 0)
    y += h * f.get('padTop', 0)  # krzyżówka: pole pod numerem hasła
    h -= h * f.get('padTop', 0)
    rect = pymupdf.Rect((x + inset) * PT, y * PT, (x + w) * PT, (y + h) * PT)
    t = f['type']
    wd = pymupdf.Widget()
    wd.field_name = f'{t}_{f["page"] + 1}_{i}'
    wd.rect = rect
    wd.border_width = 0
    wd.border_color = None
    wd.fill_color = None
    if t in ('mark', 'ring', 'check'):
        wd.field_type = pymupdf.PDF_WIDGET_TYPE_CHECKBOX
        wd.field_value = False
        if t == 'check':
            wd.text_color = BRAND
    elif t == 'btn':
        wd.field_type = pymupdf.PDF_WIDGET_TYPE_BUTTON
        wd.button_caption = ''
        wd.script = 'void 0;'  # właściwy skrypt dopisujemy niżej, gdy znamy nazwy pól
    else:
        wd.field_type = pymupdf.PDF_WIDGET_TYPE_TEXT
        wd.text_font = 'Helv'
        wd.text_color = INK
        if t == 'letter':
            wd.text_maxlen = 1
            wd.text_fontsize = 11
        elif t == 'score':
            wd.text_color = BRAND
            wd.text_fontsize = 8
            wd.field_flags |= pymupdf.PDF_FIELD_IS_READ_ONLY
        else:
            wd.text_fontsize = 8.5 if f.get('small') else 10.5
    added = page.add_widget(wd)
    names[i] = wd.field_name
    align = 1 if (t != 'check' and f.get('center')) else 2 if t == 'score' else 0
    if align:
        # /Q: 1 = wyśrodkowany, 2 = do prawej
        doc.xref_set_key(added.xref, 'Q', str(align))
        page.load_widget(added.xref).update()
    count[t] += 1

# ---------- 2. Logika sprawdzania (dane z klucza -> JavaScript przycisków) ----------
# Rodzaje pozycji: t = jedno pole tekstowe, w = słowo z kilku kratek (krzyżówka, brakujące litery),
# g = kolumna do uzupełnienia w dowolnej kolejności, c = kratki tak/nie lub obrazek do zakreślenia,
# m = słowo zakreślone w wykreślance (tylko informacyjnie, nie liczy się do wyniku).
CHECK_JS = r'''var d=this;
function N(x){x=(""+x).toLowerCase().replace(/[‘’`]/g,"'").replace(/\s+/g," ").replace(/^ | $/g,"");return x.replace(/^the /,"");}
function V(n){var f=d.getField(n);return f?N(f.value):"";}
function B(n){var f=d.getField(n);return !!f&&f.value!="Off"&&f.value!="";}
var G=["RGB",0.09,0.58,0.32],R=["RGB",0.85,0.2,0.2];
function C(n,g){var f=d.getField(n);if(f)f.textColor=g?G:R;}
var ok=0,tot=0,bad=[],found=0,wn=0,i,j,it,v,g;
for(i=0;i<D.i.length;i++){it=D.i[i];
 if(it.k=="t"){tot++;v=V(it.f);g=v==N(it.a);if(v!=="")C(it.f,g);if(g)ok++;else bad.push(it.i);}
 else if(it.k=="w"){tot++;g=true;for(j=0;j<it.f.length;j++){v=V(it.f[j]);var e=v==N(it.a[j]);if(v!=="")C(it.f[j],e);if(!e)g=false;}if(g)ok++;else bad.push(it.i);}
 else if(it.k=="g"){var used={},c=0;for(j=0;j<it.f.length;j++){v=V(it.f[j]);if(v==="")continue;var e=false;for(var m=0;m<it.a.length;m++)if(N(it.a[m])==v&&!used[v])e=true;if(e){used[v]=1;c++;}C(it.f[j],e);}tot+=it.a.length;ok+=c;if(c<it.a.length)bad.push(it.i);}
 else if(it.k=="c"){tot++;g=true;for(j=0;j<it.on.length;j++)if(!B(it.on[j]))g=false;for(j=0;j<it.off.length;j++)if(B(it.off[j]))g=false;if(g)ok++;else bad.push(it.i);}
 else if(it.k=="m"){wn++;g=true;for(j=0;j<it.f.length;j++)if(!B(it.f[j]))g=false;if(g)found++;}
}
var msg=(wn?"podpisy ":"")+ok+"/"+tot+(bad.length?"   popraw: "+bad.join(", "):"   Brawo!")+(wn?"   w siatce: "+found+"/"+wn:"");
d.getField(D.s).value=msg;'''

CLEAR_JS = r'''var d=this,K=["RGB",0.125,0.141,0.176];
for(var i=0;i<D.f.length;i++){var f=d.getField(D.f[i]);if(!f)continue;
 if(f.type=="checkbox"){f.value="Off";}else{f.value="";f.textColor=K;}}
d.getField(D.s).value="";'''

by_ex = OrderedDict()
for i, f in enumerate(fields):
    if f.get('ex') is not None:
        by_ex.setdefault(f['ex'], []).append(i)

for ex, idxs in by_ex.items():
    btns = [i for i in idxs if fields[i]['type'] == 'btn']
    score = [i for i in idxs if fields[i]['type'] == 'score']
    if not btns or not score:
        continue
    items, groups, words, checks, ws = [], OrderedDict(), OrderedDict(), OrderedDict(), OrderedDict()
    clear = []
    for i in idxs:
        f, n = fields[i], names[i]
        if f['type'] in ('btn', 'score'):
            continue
        clear.append(n)
        if f.get('grp'):
            g = groups.setdefault(f['grp'], {'k': 'g', 'f': [], 'a': f['set'].split('|'), 'i': f['grp']})
            g['f'].append(n)
        elif f.get('words'):  # krzyżówka: kratka należy do 1–2 haseł
            for num in f['words'].split(','):
                wd = words.setdefault(int(num), {'k': 'w', 'f': [], 'a': [], 'i': num})
                wd['f'].append(n)
                wd['a'].append(f['ans'])
        elif f.get('word'):  # brakujące litery w słowie
            wd = words.setdefault(f['word'], {'k': 'w', 'f': [], 'a': [], 'i': f['word']})
            wd['f'].append(n)
            wd['a'].append(f['ans'])
        elif f['type'] in ('check', 'ring') and f.get('ans'):
            c = checks.setdefault(f['item'], {'k': 'c', 'on': [], 'off': [], 'i': f['item']})
            c['on' if f['ans'] == 'on' else 'off'].append(n)
        elif f['type'] == 'mark':
            for wname in filter(None, (f.get('hit') or '').split(',')):
                ws.setdefault(wname, {'k': 'm', 'f': [], 'i': wname})['f'].append(n)
        elif f.get('ans') is not None:
            items.append({'k': 't', 'f': n, 'a': f['ans'], 'i': f.get('item') or ''})
    crossword = sorted(words.values(), key=lambda x: int(x['i']) if str(x['i']).isdigit() else 0)
    data = items + list(groups.values()) + crossword + list(checks.values()) + list(ws.values())
    sname = names[score[0]]
    for b in btns:
        act = fields[b]['act']
        if act == 'check':
            js = 'var D=' + json.dumps({'s': sname, 'i': data}, ensure_ascii=True) + ';\n' + CHECK_JS
        else:
            js = 'var D=' + json.dumps({'s': sname, 'f': clear}, ensure_ascii=True) + ';\n' + CLEAR_JS
        page = doc[fields[b]['page']]
        w = next(x for x in page.widgets() if x.field_name == names[b])
        w.script = js
        w.update()

# ---------- 3. Porządki zgodności z przeglądarkami PDF ----------
# - unikalny identyfikator /NM każdego pola (PyMuPDF numeruje od zera na każdej stronie,
#   przez co w części przeglądarek kratki na różnych stronach „kolidowały”),
# - odwołanie /P do strony, na której leży pole,
# - wspólne zasoby formularza (czcionki Helvetica i ZapfDingbats dla znaku ✓),
# - własny wygląd przełączników (wykreślanka, obrazki) i przezroczyste przyciski
#   (ich wygląd — napis „Sprawdź” / „Wyczyść” — jest narysowany na stronie).
cat = doc.pdf_catalog()
helv = doc.get_new_xref()
doc.update_object(helv, '<</Type/Font/Subtype/Type1/BaseFont/Helvetica/Encoding/WinAnsiEncoding>>')
zadb = doc.get_new_xref()
doc.update_object(zadb, '<</Type/Font/Subtype/Type1/BaseFont/ZapfDingbats>>')
fields_arr = doc.xref_get_key(cat, 'AcroForm/Fields')[1]
doc.xref_set_key(cat, 'AcroForm', f'<</Fields{fields_arr}/DA(/Helv 0 Tf 0 g)/DR<</Font<</Helv {helv} 0 R/ZaDb {zadb} 0 R>>>>>>')
n = 0
for page in doc:
    for w in page.widgets():
        n += 1
        doc.xref_set_key(w.xref, 'NM', f'(ge-field-{n})')
        doc.xref_set_key(w.xref, 'P', f'{page.xref} 0 R')
        name = w.field_name
        if name.startswith('ring'):
            # „zakreśl obrazek”: niebieska obwódka po obrysie kafelka + bardzo jasne tło
            bw, bh = w.rect.width, w.rect.height
            p = rounded(1.6, 1.6, bw - 1.6, bh - 1.6, 9)
            toggle_look(w, f'q /G0 gs 0.149 0.388 0.922 rg {p} f Q q 0.149 0.388 0.922 RG 2.2 w {p} S Q',
                        '/Resources<</ExtGState<</G0<</Type/ExtGState/ca 0.08>>>>>>')
            doc.xref_set_key(w.xref, 'TU', '(zakreśl obrazek)')
        elif name.startswith('mark'):
            # zaokrąglony kafelek z równym marginesem z każdej strony: między zaznaczonymi
            # literami zawsze ta sama mała przerwa — w poziomie, w pionie i po skosie
            bw, bh = w.rect.width, w.rect.height
            m = min(bw, bh) * 0.07
            p = rounded(m, m, bw - m, bh - m, min(bw, bh) * 0.16)
            toggle_look(w, f'q /G0 gs 0.149 0.388 0.922 rg {p} f Q',
                        '/Resources<</ExtGState<</G0<</Type/ExtGState/ca 0.32/CA 0.32>>>>>>')
            doc.xref_set_key(w.xref, 'TU', '(zaznacz literę)')
        elif name.startswith('btn'):
            empty = form_xobject(w.rect.width, w.rect.height)
            doc.xref_set_key(w.xref, 'AP', f'<</N {empty} 0 R>>')
            doc.xref_set_key(w.xref, 'MK', '<<>>')
            doc.xref_set_key(w.xref, 'H', '/O')
        elif w.field_type == pymupdf.PDF_WIDGET_TYPE_CHECKBOX:
            doc.xref_set_key(w.xref, 'MK', '<</CA(4)>>')

doc.save(dst, garbage=3, deflate=True)
print(f"Interaktywny PDF: {dst}  (pola tekstowe: {count['text']}, litery: {count['letter']}, kratki: {count['check']}, "
      f"wykreślanka: {count['mark']}, obrazki: {count['ring']}, przyciski: {count['btn']})")
