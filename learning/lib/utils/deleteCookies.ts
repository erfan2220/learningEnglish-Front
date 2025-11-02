import { cookies } from "next/headers";

  export async function deleteCookies(data:string) {
  (await cookies()).delete(data)
}