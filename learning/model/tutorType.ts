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
  end_date: string; // ISO date format
  tutor: number;
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  city: string;
  country: string;
  start_date: string; // ISO date format
  end_date: string; // ISO date format
  description: string;
  tutor: number;
}
