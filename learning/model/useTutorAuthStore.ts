// stores/useTutorAuthStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TutorAuthState {
  // سایر فیلدهای مورد نیاز برای مراحل مختلف
  step6: {
    videoData: string | null;
    videoFile: File | null;
  };
  setStep6Data: (videoData: string | null, videoFile: File | null) => void;
  clearStep6Data: () => void;
}

export const useTutorAuthStore = create<TutorAuthState>()(
  persist(
    (set) => ({
      step6: {
        videoData: null,
        videoFile: null,
      },
      setStep6Data: (videoData, videoFile) => 
        set({ step6: { videoData, videoFile } }),
      clearStep6Data: () => 
        set({ step6: { videoData: null, videoFile: null } }),
    }),
    {
      name: 'tutor-auth-storage', // نام ذخیره‌سازی
    }
  )
);