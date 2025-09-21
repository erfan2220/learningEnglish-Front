"use client";
import Button from "@/components/Button/Button";
import Inputs from "@/components/Input/Input";
import Layout from "@/components/Layout/Layout";
import { api } from "@/lib/APIs/axiosInstance";
import { FluentDoorRoutes } from "@/routes/routes";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

const resetPassword = "/icons/resetPassword.svg";
const newPasswordIcon = "/icons/passwordIconGray.svg";
const confirmPassword = "/icons/confirmPassword.svg";

const ResetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("emailForgotPassword");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState<string>("");
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(
    () => newPassword.trim().length > 0 && newPasswordRepeat.trim().length > 0,
    [newPassword, newPasswordRepeat]
  );

  const handleSubmit = async () => {
    if (newPassword !== newPasswordRepeat) {
      setMessage("Password and confirm password do not match.");
    } else {
      try {
        const res = await api.post(`/api/reset-password/`, {
          email,
          new_password: newPassword,
        });
        toast.success(res.data.message);
        router.push(FluentDoorRoutes.signIn);
      } catch (err) {
        const error = err as AxiosError<{ message: string }>;
        toast.error(
          error.response?.data?.message ||
            error.message ||
            "Something went wrong"
        );
        console.log(error);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (!window.location.pathname.includes("/forgotPassword/resetPassword")) {
        localStorage.removeItem("emailForgotPassword");
      }
    };
  }, []);

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
              disabled={true}
              type="email"
              value={email}
              placeholder="email@example.com"
              label="Email"
              width="100%"
              inputIcon="/icons/userIconGray.svg"
            />
            <Inputs
              type="password"
              value={newPassword}
              onchange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••"
              label="New Password"
              width="100%"
              icon1="/icons/eyeCloseIcon.svg"
              icon2="/icons/eyeIcon.svg"
              inputIcon={newPasswordIcon}
            />
            <Inputs
              type="password"
              value={newPasswordRepeat}
              onchange={(e) => setNewPasswordRepeat(e.target.value)}
              placeholder="••••••••"
              label="New Password"
              width="100%"
              icon1="/icons/eyeCloseIcon.svg"
              icon2="/icons/eyeIcon.svg"
              inputIcon={confirmPassword}
            />
            {message && (
              <div className="rounded-lg border shadow-md border-red-200 bg-red-50 text-red-700 text-sm px-3 py-2">
                {message}
              </div>
            )}

            <div className="w-full">
              <Button
                disabled={!canSubmit}
                label="confirm new password"
                type="button"
                widthBtn="100%"
                btnIcon={resetPassword}
                onclick={handleSubmit}
              />
            </div>
          </form>
        </Layout>
      </div>
    </main>
  );
};

export default ResetPassword;
