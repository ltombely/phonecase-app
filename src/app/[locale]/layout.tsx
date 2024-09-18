import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { consctructMetadata } from "@/lib/utils";
import { Recursive } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { getMessages } from "next-intl/server";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = consctructMetadata({});

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={recursive.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="grainy-light flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <div className="flex-1 flex flex-col h-full">
              <Providers>{children}</Providers>
            </div>
            <Footer />
          </main>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
