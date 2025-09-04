// import { StaticImageData } from "next/image";

export type ISODate = string;
export type URLString = string;


export interface Tutor {
  id: number;
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
  };
  profile_picture: URLString | null;
  languages_spoken: string[];       // always present (array)
  country: string;
  subjects: string[];
  phone_number: string;
  bio: string;
  intro_video_url: string;          // may be "" (empty string)
  intro_video_file: URLString | null;
  certificates: Certificate[];
  educations: Education[];
  experiences: Experience[];
  courses: unknown[];               // API returns []; shape unknown yet
}

export interface Certificate {
  id: number;
  title: string;
  issued_by: string;
  issue_date: ISODate;
  certificate_image: URLString | null; // can be null (see tutor 8)
  tutor: number;
}

export interface Education {
  id: number;
  degree: string;
  institution_name: string;
  country: string;
  city: string;
  field: string;
  start_date: ISODate;
  end_date: ISODate;
  tutor: number;
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  city: string;
  country: string;
  start_date: ISODate;
  end_date: ISODate;
  description: string;
  tutor: number;
}

export type languageSpeak = {
  language: string;
  // flag:StaticImageData
  flag: string;
};

export type TutorData = {
  id: number;
  name: string;
  role: string;
  speaks: languageSpeak[];
  price: string;
  // introduceVideo: StaticImageData;
  introduceVideo: string;
};

export type CourseData = {
  id: number;
  title: string;
  tutor: string;
  speaks: languageSpeak[];
  activeStudents: number;
  courseLevel: string;
  courseDay: string;
  courseTime: string;
  courseLanguage: string;
  price: string;
  // tutorPhoto: StaticImageData;
  // coursePicture: StaticImageData;
  tutorPhoto: string;
  coursePicture: string;
  courseDescription: string;
};

export type ButtonProps = {
  type: "button" | "submit" | "reset";
  label: string;
  widthBtn?: string;
  colorBtn?: string;
  colorBtnText?: string;
  colorBtnBorder?: string;
  colorBtnHover?: string;
  colorBtnActive?: string;
  colorBtnTextHover?:string;
  // btnIcon?: StaticImageData|null;
  btnIcon?: string | null;
  marginTop?: string;
  fontWeight?: "regular" | "bold" | "medium" | "semibold";
  style?: React.CSSProperties;
  onclick?: () => void;
  disabled?: boolean;
  className?: string;
};

export type InputsProps = {
  type: string;
  label?: string;
  value?: string | number;
  placeholder: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderColor?: string;
  focusBorderColor?: string;
  width?: string;
  // icon1?: StaticImageData;
  // icon2?: StaticImageData;
  // inputIcon?: StaticImageData;
  icon1?: string;
  icon2?: string;
  inputIcon?: string;
  disabled?: boolean;
};

export type CountryComponent = {
  flag?: string;
  // flag?:StaticImageData|string;
  countryName: string;
  width: number | string;
  textSize: string;
  fontWeight: string;
};

export type SocialMediaIconType = {
  // socialIcon:StaticImageData;
  socialIcon: string;
  address: string;
};

export type TutorialStepType = {
  stepNumber: number;
  title: string;
  detail: string;
  picture: string;
  //  picture:StaticImageData;
  flexRow: string;
};
