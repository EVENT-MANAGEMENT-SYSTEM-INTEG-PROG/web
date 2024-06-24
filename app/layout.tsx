import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Static/NavBar";
import EWFooter from "@/components/Static/Footer";

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
