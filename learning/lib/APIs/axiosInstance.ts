import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL, // e.g. http://103.75.196.105
  withCredentials: true,                         // send/receive cookies
  headers: { "Content-Type": "application/json" }
});