import "./globals.css";
import { TanstackQueryProvider } from "@/providers/query-provider";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UIProvider from "@/providers/ui-provider";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata("global");

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <TanstackQueryProvider>
          <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </TanstackQueryProvider>
        <UIProvider />
      </body>
    </html>
  );
}
