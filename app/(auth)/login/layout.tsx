import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Wise Login",
  description: "Login to event wise to get started",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div> 
            {children}
        </div>
    );
  }