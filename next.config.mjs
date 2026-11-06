/** Static export: every route becomes plain HTML in out/, served by GitHub Pages at the same URLs as before.
    BASE_PATH is set by the deploy workflow when the site lives under a sub-path (https://<user>.github.io/jacapp/);
    it stays empty on a custom domain. */
const basePath = process.env.BASE_PATH || "";
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
};
export default nextConfig;
