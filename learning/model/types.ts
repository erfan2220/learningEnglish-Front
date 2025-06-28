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
