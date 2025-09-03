// import { StaticImageData } from "next/image";

// export interface Price {
//   priceId: number;
//   price: number;
//   currency: string;
// }

// export interface Certification {
//   certificationId: number;
//   certificationTitle: string;
//   certificationIssueDate: string;
//   certificationIssuer: string;
//   // certificationPicture: StaticImageData;
//   certificationPicture: string;
// }

// export interface Education {
//   degreeId: number;
//   degree: string;
//   institutionName: string;
//   institutionCity?: string;
//   institutionCountry: string;
//   location?: string;
//   field: string;
//   startDate: string;
//   endDate: string;
// }

// export interface Language {
//   languageId: number;
//   language: string;
//   // flag: StaticImageData;
//   flag: string;
//   level: string;
// }

// export interface Experience {
//   experienceId: number;
//   experienceTitle: string;
//   experienceCity: string;
//   experienceCountry: string;
//   startDate: string;
//   endDate: string;
//   descriptionExperience: string;
// }

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

// export interface Tutor {
//   id: number;
//   tutorId: string;
//   tutorPhoto: string;
//   role: string;
//   tutorFirstName: string;
//   tutorLastName: string;
//   country: string;
//   subject: string;
//   phoneNumber: string;
//   activeStudent: number;
//   email: string;
//   pricePerHour: Price[];
//   certification: Certification[];
//   education: Education[];
//   speaks: Language[];
//   introduceVideo: string;
//   personalSummary: string;
//   classExpectations: string;
//   teachingStyle: string;
//   targetAudience: string;
//   experience: Experience[];
//   coursesList: string[];
//   reviews: Review[];
//   messagesReceives: Message[];
//   messagesSent: Message[];
//   studentLists: string[];
// }


export interface Tutor {
  id: number;
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
  };
  profile_picture: string | null;
  languages_spoken: string[];
  country: string;
  subjects: string[];
  phone_number: string;
  bio: string;
  intro_video_url: string;
  intro_video_file: string;
  certificates: Certificate[];
  educations: Education[];
  experiences: Experience[];
  // courses: Course[];
}

export interface Certificate {
  id: number;
  title: string;
  issued_by: string;
  issue_date: string; // ISO date format
  certificate_image: string;
  tutor: number;
}

export interface Education {
  id: number;
  degree: string;
  institution_name: string;
  country: string;
  city: string;
  field: string;
  start_date: string; // ISO date format
  end_date: string;   // ISO date format
  tutor: number;
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  city: string;
  country: string;
  start_date: string; // ISO date format
  end_date: string;   // ISO date format
  description: string;
  tutor: number;
}

// export interface Course {
  
// }
