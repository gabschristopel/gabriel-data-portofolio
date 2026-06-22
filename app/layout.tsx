import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gabriel Christopel Manariangkuba | Portfolio",
    template: "%s | Gabriel Christopel",
  },
  description:
    "Informatics student at Universitas Atma Jaya Yogyakarta specializing in Data Engineering, Data Analytics, and Software Development. Building data-driven solutions and teaching future developers.",
  keywords: [
    "Gabriel Christopel Manariangkuba",
    "Data Engineer",
    "Data Analyst",
    "Software Developer",
    "Portfolio",
    "Universitas Atma Jaya Yogyakarta",
    "Informatics",
    "Teaching Assistant",
  ],
  authors: [{ name: "Gabriel Christopel Manariangkuba" }],
  creator: "Gabriel Christopel Manariangkuba",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gabriel-portfolio.vercel.app",
    title: "Gabriel Christopel Manariangkuba | Portfolio",
    description:
      "Informatics student specializing in Data Engineering, Data Analytics, and Software Development.",
    siteName: "Gabriel Christopel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Christopel Manariangkuba | Portfolio",
    description:
      "Informatics student specializing in Data Engineering, Data Analytics, and Software Development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
