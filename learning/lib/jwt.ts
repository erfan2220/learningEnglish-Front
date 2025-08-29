import { cookies } from "next/headers";
import { decodeJwt, JWTPayload } from "jose";

export type AccessClaims = JWTPayload & {
    user_id?: number;
    email?: string;
    is_teacher?: boolean;
};

export async function getAccessClaims(): Promise<AccessClaims | null> {
    const store = await cookies();
    const raw = store.get("access_token")?.value;
    if (!raw) return null;

    try {
        const payload = decodeJwt(raw) as AccessClaims;
        // basic expiry check
        if (payload.exp && Date.now() >= payload.exp * 1000) return null;
        return payload;
    } catch {
        return null;
    }
}
