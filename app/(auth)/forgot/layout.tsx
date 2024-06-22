import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Wise Forgot Password",
  description: "Process forgotten password here.",
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