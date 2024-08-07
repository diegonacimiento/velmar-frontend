import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { decode } from "jsonwebtoken";
import { cookies } from "next/headers";

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
  const cookiesSearch = cookies();
  const cookie = cookiesSearch.get(`${process.env.COOKIE_NAME}`);
  const isAuth = cookie ? true : false;

  let role = null;

  if (cookie) {
    const payload: any = decode(cookie.value);
    role = payload.role;
  }

  return (
    <VelmarContextProvider auth={isAuth} role={role}>
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
