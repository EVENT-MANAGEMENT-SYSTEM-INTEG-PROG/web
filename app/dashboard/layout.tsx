
import { verifySession } from "@/auth/stateless";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await verifySession()
  return (
    <main>
        {children}
    </main>
  );
}
