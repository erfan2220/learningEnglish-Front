"use client";

import React, { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { FluentDoorRoutes } from "@/routes/routes";
import Layout from "@/components/Layout/Layout";
import Inputs from "@/components/Common/Input/Input";
const LS_EMAIL_KEY = "le_remember_email";
const LS_REMEMBER_KEY = "le_remember_me";

export default function SignIn() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string>("");

  const canSubmit = useMemo(
    () => email.trim().length > 0 && password.length >= 6 && !busy,
    [email, password, busy]
  );

  // Load saved email preference
  useEffect(() => {
    try {
      const savedRemember = localStorage.getItem(LS_REMEMBER_KEY);
      const savedEmail = localStorage.getItem(LS_EMAIL_KEY);
      if (savedRemember === "1") {
        setRemember(true);
        if (savedEmail) setEmail(savedEmail);
      }
    } catch {
      // ignore storage errors (Safari private mode, etc.)
    }
  }, []);

  // Persist email when remember is on
  useEffect(() => {
    try {
      if (remember) {
        localStorage.setItem(LS_REMEMBER_KEY, "1");
        localStorage.setItem(LS_EMAIL_KEY, email);
      } else {
        localStorage.removeItem(LS_REMEMBER_KEY);
        localStorage.removeItem(LS_EMAIL_KEY);
      }
    } catch {
      // ignore storage errors
    }
  }, [remember, email]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    if (!canSubmit) return;

    setBusy(true);
    try {
      // Send the login request
      // const response = await api.post('/api/login/', {
      //   email,
      //   password
      // });

      // Store the tokens
      // localStorage.setItem('access_token', response.data.access);
      // localStorage.setItem('refresh_token', response.data.refresh);
      await login(email, password); // <-- use AuthProvider

      // Redirect to home after login
      router.push("/");
    } catch (err) {
      // Handle any errors
      console.error(err);
      setError("Failed to authenticate");
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("emailForgotPassword", email);
  }, [email]);

  return (
    <main className="p-2 pt-6 md:p-12 max-w-2xl mx-auto ">
      <div className="mt-[60px]">
        <Layout>
          <div className="flex flex-col gap-3 items-center justify-center px-3 sm:px-8  pt-10 w-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
              Sign In
            </h1>
            <p className="text-sm text-gray-600 text-center mt-2">
              <span className="font-medium underline">
                <Link href={FluentDoorRoutes.signUpStudent}>
                  Sign up as a student
                </Link>
              </span>{" "}
              or{" "}
              <span className="font-medium underline">
                <Link href={FluentDoorRoutes.signUpTutor}>
                  Sign up as a tutor
                </Link>
              </span>
            </p>

            {/* Social auth */}
            <Link
              href="/signinGoogle"
              className="flex gap-2 w-full border-2 mt-4 border-[#D2D2D2] rounded-2xl hover:bg-[#D2C3FE] shadow-md bg-white/70 items-center justify-center py-3"
            >
              {/* Use asset from /public to avoid build-time image processing */}
              <Image
                src="/icons/google.svg"
                alt="google icon"
                width={20}
                height={20}
              />
              <span className="text-[#727177] text-sm font-semibold">
                Continue with Google
              </span>
            </Link>

            <div className="w-full flex items-center justify-center gap-2 mb-2 mx-8">
              <hr className="flex-1 h-px my-4 border-1 border-[#BBBBBB]" />
              <p className="text-[#45444A]">or</p>
              <hr className="flex-1 h-px my-4 border-1 border-[#BBBBBB]" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
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

              {/* Password with show/hide */}

              <Inputs
                type="password"
                value={password}
                onchange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                label="Password"
                width="100%"
                icon1="/icons/eyeCloseIcon.svg"
                icon2="/icons/eyeIcon.svg"
                inputIcon="/icons/passwordIconGray.svg"
              />

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember me
                </label>
                <Link
                  href={FluentDoorRoutes.ForgotPassword}
                  className="text-sm text-indigo-700 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm px-3 py-2">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full rounded-xl bg-[#5F33E1] text-white py-2.5 font-semibold
                         hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed
                         transition"
              >
                {busy ? "Signing in..." : "Sign In"}
              </button>

              <p className="text-xs text-center text-gray-500 mt-3 mb-8">
                By signing in you agree to our{" "}
                <Link href={FluentDoorRoutes.terms} className="underline">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href={FluentDoorRoutes.policy} className="underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </Layout>
        {/* ===================== */}
      </div>
    </main>
  );
}
