import { decodeJwt } from "jose";

export function getUserRole() {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("access_token");
  if (!token) return null;

  try {
    const decoded = decodeJwt(token);
    return decoded.is_teacher === true ? "teacher" : "student";
  } catch (error) {
    console.error("JWT decode error:", error);
    return null;
  }
}
