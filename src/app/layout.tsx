import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "o3modern - Sleek Modern AI Platform",
  description: "A fast, accessible, minimal-yet-polished platform built for the AI-forward future.",
  keywords: ["AI", "modern", "platform", "sleek", "technology"],
  authors: [{ name: "o3modern" }],
  creator: "o3modern",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://o3modern.com",
    title: "o3modern - Sleek Modern AI Platform",
    description: "A fast, accessible, minimal-yet-polished platform built for the AI-forward future.",
    siteName: "o3modern",
  },
  twitter: {
    card: "summary_large_image",
    title: "o3modern - Sleek Modern AI Platform",
    description: "A fast, accessible, minimal-yet-polished platform built for the AI-forward future.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SkipLink />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
