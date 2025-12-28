// app/signinGoogle/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { api } from "@/lib/APIs/axiosInstance";
import { FluentDoorRoutes } from "@/routes/routes";

export default function SignInGoogle() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const handleGoogleAuth = async () => {
      const token = searchParams.get("token");
      const isTeacher = searchParams.get("is_teacher") === "true";

      if (token) {
        try {
          // ذخیره توکن
          localStorage.setItem("access_token", token);
          
          // اگر is_teacher وجود داشت، در localStorage ذخیره کنید
          if (isTeacher) {
            localStorage.setItem("is_teacher", "true");
          }

          // دریافت اطلاعات کاربر
          const response = await api.get("/api/me");
          const user = response.data;

          // هدایت بر اساس نوع کاربر
          if (user.is_teacher) {
            router.push(FluentDoorRoutes.tutorAuthentication);
          } else {
            router.push(FluentDoorRoutes.homePage);
          }
        } catch (error) {
          console.error("Google authentication failed:", error);
          router.push("/signin");
        }
      } else {
        // اگر توکن وجود ندارد، به صفحه لاگین هدایت شود
        router.push("/signin");
      }
    };

    handleGoogleAuth();
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">در حال احراز هویت...</h2>
        <p>لطفا چند لحظه صبر کنید</p>
      </div>
    </div>
  );
}