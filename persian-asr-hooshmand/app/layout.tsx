import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const iranSansX = localFont({
  src: "../assets/fonts/IRANSans(FaNum).ttf",
  variable: "--font-iransans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Persian Asr Hooshmand",
  description: "Persian Asr Hooshmand Frontend Task By HamidReza Hezari",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={iranSansX.variable}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
