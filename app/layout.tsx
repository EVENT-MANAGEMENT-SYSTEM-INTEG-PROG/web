import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/staticComponents/Footer";
import Navbar from "@/components/staticComponents/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Event Wise",
  description: "eventers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className="bg-landing bg-cover bg-no-repeat">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
