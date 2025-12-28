import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Providers from "./providers";
import ClientLayout from "./ClientLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
          <GoogleOAuthProvider clientId="1015373537740-b4vr445t0fnqva3vrq26roe0u4tn4kor.apps.googleusercontent.com">
            
            <Providers>
              <ClientLayout>{children}</ClientLayout>
            </Providers>
          </GoogleOAuthProvider>
          ;
        </AuthProvider>
      </body>
    </html>
  );
}
