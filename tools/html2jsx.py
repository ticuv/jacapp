"""Convert the hand-written static pages into Next.js App Router pages (JSX), keeping markup, classes and copy as they are.

Usage:  python tools/html2jsx.py            (run from the repo root; reads legacy/*.html, writes app/**/page.jsx)
Only <main> (plus a trailing <dialog>, if a page has one) is converted; the header, the phone menu and the footer
are shared components (components/SiteHeader.jsx, components/SiteFooter.jsx).
"""
import html, json, pathlib, re, sys
from html.parser import HTMLParser

ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGES = {  # legacy file -> (route dir, component name, current nav key)
    "index.html": ("", "HomePage", "home"),
    "legislatie-penala/index.html": ("legislatie-penala", "PenalaPage", "legislatie-penala"),
    "legislatie-rutiera/index.html": ("legislatie-rutiera", "RutieraPage", "legislatie-rutiera"),
    "legi-speciale/index.html": ("legi-speciale", "LegiSpecialePage", "legi-speciale"),
    "ghid-operativ/index.html": ("ghid-operativ", "GhidPage", "ghid-operativ"),
    "shiftr/index.html": ("shiftr", "ShiftrPage", "shiftr"),
}
VOID = {"img", "input", "br", "hr", "meta", "source", "link", "area", "col", "wbr"}
INLINE_PARENTS = {"p", "a", "span", "b", "strong", "em", "i", "small", "h1", "h2", "h3", "h4", "li", "label", "button",
                  "summary", "figcaption", "blockquote", "legend", "abbr", "dt", "dd", "td", "th", "text"}
ATTR = {"class": "className", "for": "htmlFor", "tabindex": "tabIndex", "srcset": "srcSet", "fetchpriority": "fetchPriority",
        "crossorigin": "crossOrigin", "stroke-width": "strokeWidth", "stroke-linecap": "strokeLinecap",
        "stroke-linejoin": "strokeLinejoin", "fill-opacity": "fillOpacity", "text-anchor": "textAnchor",
        "autocomplete": "autoComplete", "inputmode": "inputMode", "readonly": "readOnly", "maxlength": "maxLength",
        "datetime": "dateTime", "colspan": "colSpan", "rowspan": "rowSpan", "viewbox": "viewBox"}
BOOL_TO_DEFAULT = {"checked": "defaultChecked"}


def fix_url(v):
    """Relative links of the static site become absolute routes."""
    if re.match(r"^(https?:|mailto:|tel:|#|data:)", v):
        return v
    v = re.sub(r"^(\.\./)+", "", v)
    v = re.sub(r"^\./", "", v)
    return "/" + v if not v.startswith("/") else v


def css_prop(k):
    k = k.strip()
    return k if k.startswith("--") else re.sub(r"-([a-z])", lambda m: m.group(1).upper(), k)


def style_obj(v):
    parts = [p for p in v.split(";") if p.strip()]
    items = []
    for p in parts:
        k, _, val = p.partition(":")
        items.append(f"{json.dumps(css_prop(k))}: {json.dumps(val.strip(), ensure_ascii=False)}")
    return "{{ " + ", ".join(items) + " }}"


def jstr(v):
    return '"' + v + '"' if '"' not in v and "\\" not in v else "{" + json.dumps(v, ensure_ascii=False) + "}"


class Conv(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.out, self.stack, self.uses_link = [], [], False

    def emit(self, s):
        self.out.append(s)

    def handle_starttag(self, tag, attrs, closing=False):
        if tag == "script":
            self.stack.append("script!"); return
        name = tag
        d = dict(attrs)
        href = d.get("href")
        is_link = tag == "a" and href is not None and not re.match(r"^(https?:|mailto:|tel:|#)", href) \
            and not fix_url(href).startswith("/legal/") and not fix_url(href).endswith(".html")
        if is_link:
            name = "Link"; self.uses_link = True
        parts = []
        for k, v in attrs:
            if k in ("href", "src"):
                v = fix_url(v)
            if k == "srcset":
                v = ", ".join(fix_url(x.strip().split(" ")[0]) + " " + " ".join(x.strip().split(" ")[1:]) for x in v.split(","))
            if k == "style":
                parts.append(f"style={style_obj(v)}"); continue
            if k == "value" and tag == "input":
                parts.append(f"defaultValue={jstr(v)}"); continue
            if k in BOOL_TO_DEFAULT:
                parts.append(BOOL_TO_DEFAULT[k]); continue
            key = ATTR.get(k, k)
            if v is None:
                parts.append(key if not key.startswith("data-") else f'{key}=""')
            else:
                parts.append(f"{key}={jstr(v)}")
        a = (" " + " ".join(parts)) if parts else ""
        if tag in VOID or closing:
            self.emit(f"<{name}{a} />")
        else:
            self.emit(f"<{name}{a}>"); self.stack.append(name)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs, closing=True)

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        top = self.stack.pop()
        if top == "script!":
            return
        self.emit(f"</{top}>")

    def in_script(self):
        return self.stack and self.stack[-1] == "script!"

    def handle_data(self, data):
        if self.in_script():
            return
        parent = self.stack[-1] if self.stack else ""
        t = data.replace("{", "{'{'}").replace("}", "{'}'}").replace(">", "&gt;")
        if not t.strip():
            if "\n" in t and parent.lower() in INLINE_PARENTS:
                self.emit('{" "}' + t[t.rfind("\n"):])
            else:
                self.emit(t)
            return
        t = re.sub(r"[ \t]*\n\s*", '{" "}\n' + "  " * 0, t)
        self.emit(t)

    def handle_entityref(self, name):
        if not self.in_script():
            self.emit(f"&{name};")

    def handle_charref(self, name):
        if not self.in_script():
            self.emit(f"&#{name};")

    def handle_comment(self, data):
        self.emit("{/* " + data.strip().replace("*/", "* /") + " */}")


def convert(fragment):
    c = Conv(); c.feed(fragment); c.close()
    assert not c.stack, c.stack
    return "".join(c.out), c.uses_link


def head_meta(s):
    def m(pat):
        r = re.search(pat, s)
        return html.unescape(r.group(1)) if r else None
    return {
        "title": m(r"<title>(.*?)</title>"),
        "description": m(r'<meta name="description" content="(.*?)">'),
        "canonical": m(r'<link rel="canonical" href="(.*?)">'),
        "ogTitle": m(r'<meta property="og:title" content="(.*?)">'),
        "ogDescription": m(r'<meta property="og:description" content="(.*?)">'),
        "ogImageAlt": m(r'<meta property="og:image:alt" content="(.*?)">'),
        "ldjson": m(r'<script type="application/ld\+json">\s*(.*?)\s*</script>'),
    }


def main():
    legacy = ROOT / "legacy"
    for src, (route, comp, current) in PAGES.items():
        s = (legacy / src).read_text(encoding="utf-8")
        main_html = re.search(r"<main id=\"continut\">(.*)</main>", s, re.S).group(1)
        dialog = re.search(r"(<dialog.*?</dialog>)", s, re.S)
        body, uses_link = convert(main_html)
        dial = convert(dialog.group(1))[0] if dialog else ""
        meta = head_meta(s)
        ld = meta.pop("ldjson")
        imports = ['import SiteHeader from "@/components/SiteHeader";', 'import SiteFooter from "@/components/SiteFooter";',
                   'import PageEffects from "@/components/PageEffects";']
        if uses_link:
            imports.insert(0, 'import Link from "next/link";')
        md = {
            "title": meta["title"], "description": meta["description"],
            "alternates": {"canonical": meta["canonical"]},
            "openGraph": {k: v for k, v in {"title": meta["ogTitle"], "description": meta["ogDescription"], "url": meta["canonical"],
                                            "siteName": "JAC", "locale": "ro_RO", "type": "website",
                                            "images": [{"url": "https://aplicatiajac.ro/assets/img/og-jac.jpg", "width": 1200, "height": 630,
                                                        "alt": meta["ogImageAlt"]}] if meta["ogImageAlt"] else None}.items() if v},
            "twitter": {"card": "summary_large_image"},
        }
        ld_block = ""
        if ld:
            ld_block = f'\n      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: {json.dumps(json.dumps(json.loads(ld), ensure_ascii=False), ensure_ascii=False)} }}}} />'
        page = (f"// Generated from legacy/{src} by tools/html2jsx.py, then edited by hand where noted.\n"
                + "\n".join(imports)
                + f"\n\nexport const metadata = {json.dumps(md, ensure_ascii=False, indent=2)};\n\n"
                + f"export default function {comp}() {{\n  return (\n    <>{ld_block}\n      <SiteHeader current=\"{current}\" />\n"
                + f"      <main id=\"continut\">{body}</main>\n      <SiteFooter />{dial}\n      <PageEffects page=\"{current}\" />\n    </>\n  );\n}}\n")
        out = ROOT / "app" / route / "page.jsx"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(page, encoding="utf-8")
        print("wrote", out.relative_to(ROOT))


if __name__ == "__main__":
    main()
