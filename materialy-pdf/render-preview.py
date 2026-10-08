import sys, fitz
doc = fitz.open(sys.argv[1])
for i, p in enumerate(doc):
    p.get_pixmap(dpi=int(sys.argv[3]) if len(sys.argv) > 3 else 80).save(f"{sys.argv[2]}/p{i+1}.png")
print(len(doc), "stron")
