import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ClashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-primary",
});
const ClashGrotesk = localFont({
  src: "../public/fonts/ClashGrotesk-Variable.ttf",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Muse-India",
  description: "Get Connected to your Roots",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ClashDisplay.variable} ${ClashGrotesk.variable} overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
