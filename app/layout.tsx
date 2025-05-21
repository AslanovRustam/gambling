import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
// import Script from "next/script";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { roboto, involve } from "@/config/fonts";
import HeaderCmp from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "iGaming  - Clickable Agency",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: "iGaming - Clickable Agency",
    url: "https://igaming.clickable.agency/",
    siteName: "Clickable Agency",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* <Script
          id="hubspot-script"
          strategy="afterInteractive"
          src="https://js-eu1.hs-scripts.com/26544394.js?integration=WordPress"
        /> */}
        <link
          rel="icon"
          href="/icon.png?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen  font-roboto antialiased",
          roboto.variable,
          involve.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <HeaderCmp />
          <main className="">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
