// src/services/tutors.ts
import { api } from "@/lib/APIs/axiosInstance";        // your axios file
import type { Tutor } from "@/model/tutorType";

export async function fetchTutors(): Promise<Tutor[]> {
    const { data } = await api.get<Tutor[]>("/api/tutors/");
    return data;
}
