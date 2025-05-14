import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Roboto,
} from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
});

export const involve = localFont({
  src: [
    {
      path: "../public/fonts/Involve-SemiBold-600.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Involve-Bold-700.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-involve",
});
