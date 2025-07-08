import { StaticImageData } from "next/image";

export type languageSpeak={
    language:string,
    flag:StaticImageData
}

export type TutorData = {
  id: number;
  name: string;
  role: string;
  speaks:languageSpeak[] ;
  price: string;
  introduceVideo: StaticImageData; 
};


export type CourseData = {
  id: number;
  title: string;
  tutor: string;
  speaks:languageSpeak[] ;
  activeStudents:number;
  courseLevel:string;
  courseDay:string;
  courseTime:string;
  courseLanguage:string;
  price: string;
  tutorPhoto: StaticImageData; 
  coursePicture: StaticImageData;
  courseDescription: string;
};



export type ButtonProps ={
  type: "button" | "submit" | "reset";
  label: string;
  widthBtn?: string;
  colorBtn?: string;
  colorBtnText?: string; 
  colorBtnBorder?: string;
  colorBtnHover?: string;
  colorBtnActive?: string; 
  btnIcon?: StaticImageData;
  onclick?: () => void;
}


export type InputsProps ={
  type: string;
  label?: string;
  value?: string | number;
  placeholder: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderColor?: string;
  focusBorderColor?: string;
  width?: string;
  icon1?: StaticImageData;
  icon2?: StaticImageData;
  inputIcon?: StaticImageData;
}



// types/tutor.d.ts
export interface Price {
  priceId: number;
  price: number;
  currency: string;
}

export interface Certification {
  certificationId: number;
  certificationTitle: string;
  certificationIssueDate: string;
  certificationIssuer: string;
  certificationPicture: string;
}

export interface Education {
  degreeId: number;
  degree: string;
  institutionName: string;
  institutionCity?: string;
  institutionCountry: string;
  location?: string;
  field: string;
  startDate: string;
  endDate: string;
}

export interface Language {
  languageId: number;
  language: string;
  flag: string;
  level: string;
}

export interface Experience {
  experienceId: number;
  experienceTitle: string;
  experienceCity: string;
  experienceCountry: string;
  startDate: string;
  endDate: string;
  descriptionExperience: string;
}

export interface Review {
  reviewId: number;
  reviewerName: string;
  reviewDate: string;
  reviewText: string;
  rating: number;
}

export interface Message {
  messageId: number;
  messageSender?: string;
  messageReceive?: string;
  messageText: string;
}

export interface Tutor {
  id: number;
  tutorId: string;
  tutorPhoto: string;
  role: string;
  tutorFirstName: string;
  tutorLastName: string;
  country: string;
  subject: string;
  phoneNumber: string;
  activeStudent: number;
  email: string;
  pricePerHour: Price[];
  certification: Certification[];
  education: Education[];
  speaks: Language[];
  introduceVideo: string;
  personalSummary: string;
  classExpectations: string;
  teachingStyle: string;
  targetAudience: string;
  experience: Experience[];
  coursesList: string[];
  reviews: Review[];
  messagesReceives: Message[];
  messagesSent: Message[];
  studentLists: string[];
}