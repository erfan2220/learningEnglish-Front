import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Step6State {
    videoData: string | null; // preview string (blob: URL or data URL)
    videoFile: File | null;   // not serializable; will be null after reload
}

interface TutorAuthState {
    step6: Step6State;
    setStep6Data: (videoData: string | null, videoFile: File | null) => void;
    clearStep6Data: () => void;
}

export const useTutorAuthStore = create<TutorAuthState>()(
    persist(
        (set) => ({
            step6: { videoData: null, videoFile: null },
            setStep6Data: (videoData, videoFile) => set({ step6: { videoData, videoFile } }),
            clearStep6Data: () => set({ step6: { videoData: null, videoFile: null } }),
        }),
        {
            name: "tutor-auth-storage",
            // Optional: only persist the preview string to avoid trying to serialize File
            partialize: (state) => ({ step6: { videoData: state.step6.videoData, videoFile: null } }),
        }
    )
);
