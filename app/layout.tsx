import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uday Singh — Full-stack developer",
  description:
    "Portfolio of Uday Singh, a computer science student building thoughtful web experiences and practical software products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
