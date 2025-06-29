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