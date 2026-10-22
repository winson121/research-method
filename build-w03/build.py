# -*- coding: utf-8 -*-
"""Assemble and validate the Week 3 study module."""
import re, subprocess, sys, os, shutil

NODE = shutil.which("node") or r"C:\Users\winwin\AppData\Roaming\kimi-desktop\daimon-share\daimon\command-process-owner\bin\node.exe"

BASE = os.path.dirname(os.path.abspath(__file__))
SM = os.path.dirname(BASE)

def rd(p):
    with open(p, encoding="utf-8") as f:
        return f.read()

css = rd(os.path.join(SM, "notes", "_engine_style.css"))
if css.lstrip().startswith("<style>"):
    css = css.lstrip()[len("<style>"):].lstrip("\r\n")
w3_css = "\n/* week 3 additions */\n.w3dot{width:9px;height:9px;border-radius:50%;flex:none;background:#c2703f}\n"

parts = [
    rd(os.path.join(BASE, "f_head.html")),
    css + w3_css,
    rd(os.path.join(BASE, "f_body_top.html")),
    rd(os.path.join(BASE, "f_views_a.html")),
    rd(os.path.join(BASE, "f_views_b.html")),
    rd(os.path.join(BASE, "f_views_c.html")),
    rd(os.path.join(BASE, "f_views_d.html")),
    rd(os.path.join(BASE, "f_views_f.html")),
    rd(os.path.join(BASE, "f_views_sprint.html")),
    rd(os.path.join(BASE, "f_views_e.html")),
    rd(os.path.join(BASE, "f_script.js")),
]
# inject the extra quiz data INSIDE the script's IIFE (right after its opening)
script = parts[-1]
extra = rd(os.path.join(BASE, "f_extra.js"))
anchor = 'const $=(s,r=document)=>r.querySelector(s)'
assert script.count(anchor) == 1, "engine anchor not found in f_script.js"
parts[-1] = script.replace(anchor, extra + "\n" + anchor, 1)
html = "".join(parts)
out = os.path.join(SM, "ITI5125-study-module-week03.html")
with open(out, "w", encoding="utf-8") as f:
    f.write(html)
print("assembled:", out, len(html), "chars")

# ---- 1. JS syntax check ----
m = re.search(r"<script>(.*)</script>", html, re.S)
js = m.group(1)
jp = os.path.join(BASE, "_check.js")
with open(jp, "w", encoding="utf-8") as f:
    f.write(js)
r = subprocess.run([NODE, "--check", jp], capture_output=True, text=True)
print("JS syntax:", "OK" if r.returncode == 0 else "FAIL\n" + r.stderr)
if r.returncode != 0:
    sys.exit(1)

# ---- 2. HTML tag balance (skip style/script content) ----
VOID = {"meta","br","img","input","hr","link","source"}
scan = re.sub(r"<style>.*?</style>", "<style></style>", html, flags=re.S)
scan = re.sub(r"<script>.*?</script>", "<script></script>", scan, flags=re.S)
stack, ok = [], True
for mm in re.finditer(r"<(/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*)>", scan):
    close, tag, rest = mm.group(1), mm.group(2).lower(), mm.group(3)
    if tag in VOID or rest.strip().endswith("/"):
        continue
    if close:
        if not stack or stack[-1] != tag:
            print("TAG MISMATCH: expected", stack[-1] if stack else "none", "got /"+tag, "at", mm.start()); ok = False; break
        stack.pop()
    else:
        stack.append(tag)
if stack and ok:
    print("UNCLOSED TAGS:", stack[:10]); ok = False
print("HTML tag balance:", "OK" if ok else "FAIL")

# ---- 3. wiring checks ----
body = html[: m.start()]
view_ids = set(re.findall(r'<section class="view" id="([^"]+)"', body))
nav_targets = set(re.findall(r'data-nav="([^"]+)"', body))
quiz_keys = set(re.findall(r'data-quiz="([^"]+)"', body))
player_keys = set(re.findall(r'data-player="([^"]+)"', body))
mark_secs = set(re.findall(r'data-sec="([^"]+)"', body))
js_quiz = set(re.findall(r"QUIZ\.(\w+)\s*=", js)) | set(re.findall(r'^\s*(\w+):\[', js, re.M))
js_players = set(re.findall(r"(\w+):\{title:", js))
print("views:", len(view_ids), "| nav missing view:", nav_targets - view_ids or "none")
print("quiz containers missing data:", quiz_keys - js_quiz or "none")
print("players missing data:", player_keys - js_players or "none")
print("markread missing view:", mark_secs - view_ids or "none")

# ---- 4. question data integrity (data declarations only, no DOM) ----
data_js = js[: js.index("/* ---------- ENGINE ---------- */")]
data_js = re.sub(r"^\(function\(\)\{\s*\"use strict\";", "", data_js.strip())
probe = r"""
Object.assign(QUIZ, QUIZ_EXTRA); const BANK_ALL = BANK_W3.concat(BANK_W3_EXTRA);
const out=[];
function chk(list,where){list.forEach((q,i)=>{
  const correct=q.opts.filter(o=>o[1]).length;
  if(correct<1)out.push(where+" #"+i+" has NO correct option: "+q.q.slice(0,60));
  if((q.type==="multi"||q.t==="multi")&&correct<2)out.push(where+" #"+i+" multi with <2 correct: "+q.q.slice(0,60));
  if(!q.why)out.push(where+" #"+i+" missing why");
  if(!q.q)out.push(where+" #"+i+" missing question text");
});}
Object.keys(QUIZ).forEach(k=>chk(QUIZ[k],"QUIZ."+k));
chk(BANK_ALL,"BANK");
Object.keys(PLAYERS).forEach(k=>{if(PLAYERS[k].quiz)chk(PLAYERS[k].quiz,"PLAYER."+k)});
console.log("questions:",Object.keys(QUIZ).reduce((a,k)=>a+QUIZ[k].length,0)+BANK_ALL.length+Object.keys(PLAYERS).reduce((a,k)=>a+(PLAYERS[k].quiz?PLAYERS[k].quiz.length:0),0));
if(out.length){console.log(out.join("\n"));process.exit(2);}else console.log("data integrity: OK");
"""
pp = os.path.join(BASE, "_check_data.js")
with open(pp, "w", encoding="utf-8") as f:
    f.write(data_js + probe)
r = subprocess.run([NODE, pp], capture_output=True, text=True)
print(r.stdout.strip() or r.stderr.strip())
sys.exit(0 if r.returncode == 0 else 2)
