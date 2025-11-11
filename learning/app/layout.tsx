import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Providers from "./providers";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "FluentDoor",
  description:
    "FluentDoor connects language learners with certified native tutors for personalized online lessons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <AuthProvider>
          <Providers>
            <ClientLayout>{children}</ClientLayout>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
