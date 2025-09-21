import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import GlobalLoader from "@/components/ui/GlobalLoader";
import { AuthProvider } from "@/context/AuthContext";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "FluentDoor",
  description:
    "FluentDoor connects language learners with certified native tutors for personalized online lessons. Master English, Spanish, French, German, Japanese and 50+ languages through live video sessions, flexible scheduling, and customized curriculum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        {/*<GlobalLoader />*/}
        <AuthProvider>
          <Providers>
            <Header />
            <main className="flex-grow">{children}</main>
            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                duration: 5000,
              }}
            />

            <Footer />
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
