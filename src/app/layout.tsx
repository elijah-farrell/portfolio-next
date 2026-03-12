import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SoundProvider } from "@/components/sound-provider";
import { GlobalAppWrapper } from "@/components/global-app-wrapper";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import { Footer } from "@/components/footer";
import { SystemContextMenu } from "@/components/ui/system-context-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
  ),
  title: {
    default: "Elijah Farrell | Portfolio",
    template: "%s | Elijah Farrell",
  },
  description:
    "Software developer portfolio for Elijah Farrell featuring experience, projects, skills, and contact information.",
  keywords: [
    "Elijah Farrell",
    "Software Developer",
    "Computer Science",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Elijah Farrell" }],
  creator: "Elijah Farrell",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Elijah Farrell | Portfolio",
    description:
      "Personal portfolio highlighting Elijah Farrell's background, projects, and technical skills.",
    siteName: "Elijah Farrell Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elijah Farrell | Portfolio",
    description:
      "Personal portfolio highlighting Elijah Farrell's background, projects, and technical skills.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SoundProvider>
            <SystemContextMenu />
            <GlobalAppWrapper>
              <div className="flex min-h-screen flex-col">
                <main className="flex-1">
                  {children}
                  <div
                    className="h-24 w-full block lg:hidden"
                    aria-hidden="true"
                  />
                </main>
                <Footer />
              </div>
            </GlobalAppWrapper>
            <Toaster position="top-center" richColors />
          </SoundProvider>
        </ThemeProvider>
      </body>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
