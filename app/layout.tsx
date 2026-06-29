import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onerepublic.vn"),

  title: {
    default: "One Republic Studio",
    template: "%s | One Republic Studio",
  },

  description:
    "One Republic Studio is a creative agency specializing in Brand Identity, Packaging Design, Illustration and Creative Direction.",

  keywords: [
    "branding agency",
    "brand identity",
    "packaging design",
    "illustration",
    "creative direction",
    "creative agency vietnam",
    "branding studio",
    "packaging agency",
  ],

  authors: [{ name: "One Republic Studio" }],

  creator: "One Republic Studio",

  openGraph: {
    title: "One Republic Studio",
    description:
      "Brand Identity, Packaging Design, Illustration and Creative Direction.",
    url: "https://www.onerepublic.vn",
    siteName: "One Republic Studio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "One Republic Studio",
    description:
      "Brand Identity, Packaging Design, Illustration and Creative Direction.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "One Republic Studio",
              url: "https://www.onerepublic.vn",
              logo: "https://www.onerepublic.vn/Logo_Color.png",
              description:
                "Creative agency specializing in Brand Identity, Packaging Design, Illustration and Creative Direction.",
              email: "hello@onerepublic.vn",
              sameAs: [
                "https://www.instagram.com/onerepublic.vn/",
                "https://www.behance.net/onethink",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}