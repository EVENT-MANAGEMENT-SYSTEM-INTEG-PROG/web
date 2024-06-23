import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/staticComponents/NavBar";
import EWFooter from "@/components/staticComponents/Footer";

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
        <EWFooter/>
      </body>
    </html>
  );
}
