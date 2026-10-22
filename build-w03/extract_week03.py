import os, re, sys
from pypdf import PdfReader
from email import policy
from email.parser import BytesParser
from bs4 import BeautifulSoup

SRC = r"C:\Users\winwin\projects\ITI5125\Week03"
OUT = r"C:\Users\winwin\projects\ITI5125\study-module\notes"

def collapse_spaced(text):
    # collapse letter-spaced OCR like "H e l l o"
    return re.sub(r'\b(?:[A-Za-z] ){3,}[A-Za-z]\b',
                  lambda m: m.group(0).replace(' ', ''), text)

def extract_pdf(path, out):
    r = PdfReader(path)
    parts = []
    for i, page in enumerate(r.pages):
        try:
            t = page.extract_text() or ""
        except Exception as e:
            t = f"[page {i+1} extract error: {e}]"
        parts.append(f"\n===== PAGE {i+1} =====\n{t}")
    txt = collapse_spaced("\n".join(parts))
    with open(out, "w", encoding="utf-8") as f:
        f.write(txt)
    print(f"PDF  {os.path.basename(path)} -> {os.path.basename(out)} ({len(txt)} chars)")

def extract_mhtml(path, out):
    with open(path, "rb") as f:
        msg = BytesParser(policy=policy.default).parse(f)
    body = None
    if msg.is_multipart():
        for part in msg.walk():
            ct = part.get_content_type()
            if ct == "text/html":
                body = part.get_content()
                break
    else:
        body = msg.get_content()
    soup = BeautifulSoup(body, "html.parser")
    for tag in soup(["script", "style", "noscript"]):
        tag.decompose()
    text = soup.get_text("\n")
    text = re.sub(r'\n{3,}', '\n\n', text)
    with open(out, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"MHT  {os.path.basename(path)} -> {os.path.basename(out)} ({len(text)} chars)")

for fn in sorted(os.listdir(SRC)):
    p = os.path.join(SRC, fn)
    base = re.sub(r'[^A-Za-z0-9]+', '_', os.path.splitext(fn)[0]).strip('_')
    if fn.lower().endswith('.pdf'):
        extract_pdf(p, os.path.join(OUT, base + ".txt"))
    elif fn.lower().endswith('.mhtml'):
        extract_mhtml(p, os.path.join(OUT, base + ".txt"))
    elif fn.lower().endswith('.docx'):
        import docx
        d = docx.Document(p)
        lines = []
        for para in d.paragraphs:
            lines.append(para.text)
        for ti, table in enumerate(d.tables):
            lines.append(f"\n--- TABLE {ti+1} ---")
            for row in table.rows:
                lines.append(" | ".join(c.text.strip() for c in row.cells))
        txt = "\n".join(lines)
        with open(os.path.join(OUT, base + ".txt"), "w", encoding="utf-8") as f:
            f.write(txt)
        print(f"DOCX {fn} -> {base}.txt ({len(txt)} chars)")
