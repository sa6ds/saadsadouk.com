import type { Metadata } from "next";
import "./globals.css";
import { themeEffect } from "./components/theme/themeEffect";

export const metadata: Metadata = {
  title: "Saad Sadouk - Software Engineer",
  description:
    "Full-Stack Developer and student at George Mason University. Explore my projects, skills, and experiences.",
  metadataBase: new URL("https://www.saadsadouk.com"),
  openGraph: {
    title: "Saad Sadouk - Software Engineer",
    description:
      "Full-Stack Developer and student at George Mason University. Explore my projects, skills, and experiences.",
    url: "https://www.saadsadouk.com",
    siteName: "Saad Sadouk",
    images: [
      {
        url: "https://www.saadsadouk.com/api/og",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Sadouk - Software Engineer",
    description:
      "Full-Stack Developer and student at George Mason University. Explore my projects, skills, and experiences.",
    images: ["https://www.saadsadouk.com/api/og"],
  },
  alternates: {
    canonical: "https://www.saadsadouk.com",
  },
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
        <link
          rel="icon"
          href="/svgs/faviconLight.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/svgs/faviconDark.svg"
          media="(prefers-color-scheme: dark)"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/svgs/faviconLight.svg"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/svgs/faviconLight.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>
      <body className="top-full text-slate-500 dark:bg-black dark:text-slate-300 m-0 min-h-[100vh]">
        {children}
      </body>
    </html>
  );
}
