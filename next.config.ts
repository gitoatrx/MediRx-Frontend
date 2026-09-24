import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Static export: `npm run build` produces an `out/` folder of plain HTML,
   * CSS and JS. That is what lets the finished site sit under htdocs and be
   * served by XAMPP, or be copied to any host, with no Node process running.
   *
   * Every page is still pre-rendered, so search engines and link previews get
   * real HTML rather than an empty div.
   *
   * If the site ever needs a server -- a real contact endpoint, live data --
   * delete these two lines and deploy to a Node host instead.
   */
  output: "export",
  images: { unoptimized: true },

  // Without this, /platform is emitted as platform.html, which Apache will not
  // serve at the /platform URL. Trailing slashes emit platform/index.html.
  trailingSlash: true,
};

export default nextConfig;
