"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { isAxiosError } from "axios";

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

  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    if (!canSubmit) return;

    setBusy(true);
    try {
      await login(email.trim(), password); // server sets cookies; context loads /api/me
      router.push("/");
    } catch (err: unknown) {
      let msg = "Failed to authenticate";
      if (isAxiosError(err)) {
        const data = err.response?.data as { detail?: string; message?: string } | undefined;
        msg = data?.detail ?? data?.message ?? msg;
      } else if (err instanceof Error) {
        msg = err.message || msg;
      }
      setError(msg);
    } finally {
      setBusy(false);
    }
  }

  return (
      <main className="min-h-[100dvh] bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-md mx-auto px-6 pt-28 pb-16">
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-800 text-center">Sign In</h1>
            <p className="text-sm text-gray-600 text-center mt-2">
            <span className="font-medium underline">
              <Link href="/signupStudent">Sign up as a student</Link>
            </span>{" "}
              or{" "}
              <span className="font-medium underline">
              <Link href="/signupTutor">Sign up as a tutor</Link>
            </span>
            </p>

            {/* Social auth */}
            <Link
                href="/signinGoogle"
                className="mt-6 flex items-center justify-center gap-2 w-full border rounded-xl py-2.5 hover:bg-gray-50 transition"
            >
              {/* Use asset from /public to avoid build-time image processing */}
              <Image src="/icons/google.svg" alt="google icon" width={20} height={20} />
              <span className="text-sm font-semibold text-gray-700">Continue with Google</span>
            </Link>

            <div className="flex items-center gap-3 my-6">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-xs text-gray-500">or</span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <label className="block text-sm font-medium text-gray-700">
                Email
                <input
                    type="email"
                    className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                />
              </label>

              {/* Password with show/hide */}
              <label className="block text-sm font-medium text-gray-700">
                Password
                <div className="mt-1 relative">
                  <input
                      type={showPassword ? "text" : "password"}
                      className="w-full rounded-lg border px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-indigo-200"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                  />
                  <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </label>

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
                <Link href="/forgotPassword" className="text-sm text-indigo-700 hover:underline">
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

              <p className="text-xs text-center text-gray-500 mt-3">
                By signing in you agree to our <Link href="/terms" className="underline">Terms</Link> and{" "}
                <Link href="/privacy" className="underline">Privacy Policy</Link>.
              </p>
            </form>
          </div>
        </div>
      </main>
  );
}
