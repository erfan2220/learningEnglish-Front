import { create } from "zustand";
import { languageSpeak } from "./types";

interface LanguageSpeak {
  language: string;
  //   level: string;
}
interface Certification {
  certTitle: string;
  certBy: string;
  certDate: string;
  certPicture: File | null;
}

interface Education {
  degree: string;
  university: string;
  eduCountry: string;
  eduCity: string;
  field: string;
  startEdu: string;
  endEdu: string;
}

interface Experience {
  expTitle: string;
  expOrganization: string;
  expCountry: string;
  expCity: string;
  eduCity: string;
  eduDescribe: string;
  startExp: string;
  endExp: string;
}

interface FormState {
  firstName: string;
  lastName: string;
  country: string;
  phoneNumber: string;
  subjectTeach: string;
  languageSpeak: LanguageSpeak[];
  //   ===================
  photo: File | null;
  //   =====================
  certification: Certification[];
  // ===================
  education: Education[];
  //   ===================
  experience: Experience[];
  // ==================
  bio: string;
  teachingStyle: string;
  teachGoal: string;
  expectation: string;
  //   ===================
  video: File | null;
  //   =====================
  setField: (field: string, value: string | File | null) => void;
  addEducation: (edu: Education) => void;
  removeEducation: (index: number) => void;

  addCertification: (cert: Certification) => void;
  removeCertification: (index: number) => void;

  addExperience: (exp: Experience) => void;
  removeExperience: (index: number) => void;

  addLanguage: (exp: languageSpeak) => void;
  removeLanguage: (index: number) => void;

  reset: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  firstName: "",
  lastName: "",
  country: "",
  phoneNumber: "",
  subjectTeach: "",
  languageSpeak: [],
  photo: null,
  certification: [],
  education: [],
  experience: [],
  bio: "",
  teachingStyle: "",
  teachGoal: "",
  expectation: "",
  video: null,

  setField: (field, value) => set((state) => ({ ...state, [field]: value })),

  addEducation: (edu) =>
    set((state) => ({ education: [...state.education, edu] })),

  removeEducation: (index) =>
    set((state) => ({
      education: state.education.filter((_, i) => i !== index),
    })),

  addCertification: (cert) =>
    set((state) => ({ certification: [...state.certification, cert] })),

  removeCertification: (index) =>
    set((state) => ({
      certification: state.certification.filter((_, i) => i !== index),
    })),

  addExperience: (exp) =>
    set((state) => ({ experience: [...state.experience, exp] })),

  removeExperience: (index) =>
    set((state) => ({
      experience: state.experience.filter((_, i) => i !== index),
    })),


    addLanguage: (lang) =>
    set((state) => ({ languageSpeak: [...state.languageSpeak, lang] })),

  removeLanguage: (index) =>
    set((state) => ({
      languageSpeak: state.languageSpeak.filter((_, i) => i !== index),
    })),

  reset: () =>
    set({
      firstName: "",
      lastName: "",
      country: "",
      phoneNumber: "",
      subjectTeach: "",
      languageSpeak: [],
      photo: null,
      certification: [],
      experience: [],
      bio: "",
      teachingStyle: "",
      teachGoal: "",
      expectation: "",
      video: null,
      education: [],
    }),
}));
