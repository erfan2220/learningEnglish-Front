"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noFooterRoutes = ["/signin", "/signupTutor", "/signupStudent"];

  const hideFooterHeader = noFooterRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!hideFooterHeader && <Header />}

      <main className="flex-grow">{children}</main>

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 5000 }}
      />

      {!hideFooterHeader && <Footer />}
    </>
  );
}
