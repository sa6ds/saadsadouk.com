import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saad Sadouk - Software Engineer",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="top-full text-slate-500 m-0 min-h-[100vh]">
        {children}
      </body>
    </html>
  );
}
