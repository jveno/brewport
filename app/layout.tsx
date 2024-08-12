import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./fonts";
import ThemeProvider from "./lib/ThemeProvider";


export const metadata: Metadata = {
  title: "Brewport Brewing Company",
  description: "Brewport Enriches Lives with thin crust pizza, gourmet salad, and Connecticut style beers so amazingly great, that staff and guests keep coming back for more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
