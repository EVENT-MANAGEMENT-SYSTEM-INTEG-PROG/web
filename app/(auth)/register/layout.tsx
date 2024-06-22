import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Wise Sign Up",
  description: "Sign Up to event wise to get started",
};


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="bg-landing bg-cover h-[100vh]"> 
            {children}
        </div>
    );
  }