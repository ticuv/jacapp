// Adds <lastmod> to out/sitemap.xml. The URL list stays in public/sitemap.xml; each URL gets the date of the last
// commit that touched its sources (the page folder plus the shared layout/components, or the legal HTML file).
// Needs the full git history (fetch-depth: 0 in the deploy workflow); a URL whose date git can't give is left without one.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

const SHARED = ["app/layout.jsx", "app/styles", "components", "lib"];

const sourcesFor = (loc) => {
  const path = new URL(loc).pathname;
  if (path.startsWith("/legal/")) return [`public${path === "/legal/" ? "/legal/index.html" : path}`];
  const route = path.replace(/^\/|\/$/g, "");
  return [route ? `app/${route}` : "app/page.jsx", ...SHARED];
};

const lastCommit = (paths) => {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...paths.filter(existsSync)], { encoding: "utf8" });
    return out.trim() || null;
  } catch {
    return null;
  }
};

export function addLastmod(file = "out/sitemap.xml") {
  if (!existsSync(file)) return 0;
  let n = 0;
  const xml = readFileSync(file, "utf8").replace(/<url><loc>([^<]+)<\/loc>(?:<lastmod>[^<]*<\/lastmod>)?<\/url>/g, (m, loc) => {
    const date = lastCommit(sourcesFor(loc));
    if (!date) return `<url><loc>${loc}</loc></url>`;
    n++;
    return `<url><loc>${loc}</loc><lastmod>${date}</lastmod></url>`;
  });
  writeFileSync(file, xml);
  return n;
}
