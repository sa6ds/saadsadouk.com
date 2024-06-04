import type { Metadata } from "next";
import "./globals.css";
import { themeEffect } from "./assets/components/theme/themeEffect";

export const metadata: Metadata = {
  title: "Saad Sadouk - Software Engineer",
  description: "Full-Stack Developer and student at George Mason University",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "faviconLight.svg",
      href: "faviconLight.svg",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "faviconBlack.svg",
      href: "faviconBlack.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased`} suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>
      <body className="top-full text-slate-500 dark:bg-slate-950 dark:text-slate-300 m-0 min-h-[100vh]">
        {children}
      </body>
    </html>
  );
}
