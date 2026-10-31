import "./styles/main.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  metadataBase: new URL("https://aplicatiajac.ro"),
  icons: { icon: [{ url: "/assets/img/favicon-32.png", sizes: "32x32", type: "image/png" }], apple: "/assets/img/apple-touch-icon.png" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0f1c",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <link rel="preload" href="/assets/fonts/manrope-var.woff2" as="font" type="font/woff2" crossOrigin="" />
        {/* the page is styled for "no script" first; this class switches on the enhanced, animated version */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
