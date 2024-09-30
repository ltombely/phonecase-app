import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/ui/toaster";
import { Recursive } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CaseCraft",
    template: "CaseCraft - %s",
  },
  description:
    "Este é um projeto do portfolio de Lucas Tombely como desenvolvedor web Next.js. Feito unicamente para exibição.",
  twitter: {
    title: "CaseCraft - Capas de iPhone personalizadas de alta qualidade",
    description:
      "Este é um projeto do portfolio de Lucas Tombely como desenvolvedor web Next.js. Feito unicamente para exibição",
    images: [{ url: "/thumbnail.png" }],
    card: "summary_large_image",
  },
  robots: {
    follow: false,
    index: false,
    googleBot: {
      follow: false,
      index: false,
    },
  },
  authors: {
    name: "Lucas Tombely - Baseado no canal @joshtriedcoding",
    url: "https://www.youtube.com/@joshtriedcoding",
  },
  openGraph: {
    title: "CaseCraft - Capas de iPhone personalizadas de alta qualidade",
    description: "Crie Capinhas de iPhone personalizadas em segundos",
    images: [{ url: "/thumbnail.png" }],
  },
  icons: "/favicon.ico",
  alternates: {
    canonical: "https://www.casecobra.com/",
    languages: {
      pt: "http://localhost:3000",
      
    },
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={recursive.className}>
        <Navbar />
        <main className="grainy-light flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
