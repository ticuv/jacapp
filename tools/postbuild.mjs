// Runs after `next build` on the static export in out/.
// 1. Next 16 writes each page's prefetch payload as <route>/__next.<segment>/__PAGE__.txt, while the client asks for
//    <route>/__next.<segment>.__PAGE__.txt. Copy every payload to the name the client requests, so client-side navigation
//    works on a plain static host (GitHub Pages) instead of 404-ing and falling back to full page loads.
// 2. Under a sub-path (BASE_PATH=/jacapp), Next prefixes its own links and scripts, but not the site's plain
//    /assets/... and /legal/... URLs (images, fonts, CSS, legal pages). Prefix those too.
import { readdirSync, statSync, copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, extname } from "node:path";

const base = (process.env.BASE_PATH || "").replace(/\/$/, "");
const TEXT = new Set([".html", ".txt", ".css", ".js", ".json", ".xml"]);
const prefix = (s) => s.replace(/(["'`(,\s=])\/(assets|legal)\//g, (m, c, d) => `${c}${base}/${d}/`);

// pass 1: mirror the prefetch payloads; pass 2: prefix URLs in every text file, the mirrored copies included
const mirror = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) {
      for (const f of readdirSync(p)) {
        const flat = join(dir, `${name}.${f}`);
        if (!existsSync(flat)) copyFileSync(join(p, f), flat);
      }
    }
    if (name !== "assets" && name !== "legal") mirror(p);
  }
};
const rebase = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { if (name !== "assets" && name !== "legal") rebase(p); continue; }
    if (!TEXT.has(extname(name))) continue;
    const s = readFileSync(p, "utf8"), t = prefix(s);
    if (t !== s) writeFileSync(p, t);
  }
};
mirror("out");
if (base) rebase("out");
console.log(`postbuild: prefetch payloads mirrored${base ? `, URLs prefixed with ${base}` : ""}`);
