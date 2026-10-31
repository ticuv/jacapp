// Next 16 static export writes each page's prefetch payload as <route>/__next.<segment>/__PAGE__.txt, while the client
// asks for <route>/__next.<segment>.__PAGE__.txt. Copy every payload to the name the client requests, so client-side
// navigation works on a plain static host (GitHub Pages) instead of falling back to full page loads after a 404.
import { readdirSync, statSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) {
      for (const f of readdirSync(p)) {
        const flat = join(dir, `${name}.${f}`);
        if (!existsSync(flat)) copyFileSync(join(p, f), flat);
      }
    } else if (name !== "_next" && name !== "assets") walk(p);
  }
};
walk("out");
console.log("postbuild: prefetch payloads mirrored");
