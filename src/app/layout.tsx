import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { VelmarContextProvider } from "@/context/VelmarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Velmar",
  description: "Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <VelmarContextProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="flex justify-center min-h-main">{children}</main>
          <Footer />
        </body>
      </html>
    </VelmarContextProvider>
  );
}
