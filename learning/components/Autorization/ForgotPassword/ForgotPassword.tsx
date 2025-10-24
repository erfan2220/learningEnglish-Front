"use client";
import Inputs from "@/components/Common/Input/Input";
import Layout from "@/components/Layout/Layout";
import React, { useEffect, useMemo, useState } from "react";
import Button from "@/components/Common/Button/Button";
import { useRouter } from "next/navigation";
import { FluentDoorRoutes } from "@/routes/routes";
import { api } from "@/lib/APIs/axiosInstance";
import toast from "react-hot-toast";

const resetPassword = "/icons/resetPassword.svg";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("emailForgotPassword");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const [error, setError] = useState<string>("");

  const canSubmit = useMemo(() => email.trim().length > 0, [email]);

  const handleSubmit = async () => {
    try {
      const res = await api.post(`/api/forgot-password/`, { email });
      toast.success(res.data.message);
      router.push(FluentDoorRoutes.ResetPassword);
    } catch (error) {
      console.error("forgot password failed:", error);
      setError("Failed to find email.");
    }
  };

  useEffect(() => {
    localStorage.setItem("emailForgotPassword", email);
  }, [email]);

  return (
    <main className="p-2 pt-6 md:p-12 max-w-2xl mx-auto ">
      <div className="mt-[60px]">
        <Layout>
          <form className="space-y-4 w-full px-4 sm:px-8 py-12">
            <p className="text-sm sm:text-base text-[#45444A] text-center font-semibold">
              Please enter the email address associated with your account to
              reset your password.
            </p>
            {/* Email */}
            <Inputs
              type="email"
              value={email}
              onchange={(e) => {
                setEmail(e.target.value);
                localStorage.setItem("emailForgotPassword", email);
              }}
              placeholder="email@example.com"
              label="Email"
              width="100%"
              inputIcon="/icons/userIconGray.svg"
            />

            {/* Error */}
            {error && (
              <div className="rounded-lg border shadow-md border-red-200 bg-red-50 text-red-700 text-sm px-3 py-2">
                {error}
              </div>
            )}

            {/* Submit */}
            <div className="w-full">
              <Button
                label="Reset Password"
                type="button"
                btnIcon={resetPassword}
                disabled={!canSubmit}
                widthBtn="100%"
                onclick={handleSubmit}
              />
            </div>
          </form>
        </Layout>
        {/* ===================== */}
      </div>
    </main>
  );
};

export default ForgotPassword;
