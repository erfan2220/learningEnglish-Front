export type HomeworkCompleted = {
  gradeId: number;
  courseId: string;
  grade: number;
};

export type Homework = {
  homeworkId: number;
  homeworkTitle: string;
  homeWorkSent: string;
};

export type Review = {
  reviewId: number;
  reviewFor?: string; // optional because some reviews don't specify tutor
  reviewText: string;
  reviewRating?: number; // some have `rating`, some have `reviewRating`
  rating?: number;
  reviewDate: string;
};

export type Message = {
  messageId: number;
  messageSender?: string;
  messageReceive?: string;
  messageText: string;
};

export type Student = {
  id: number;
  studentId: string;
  studentFirstName: string;
  studentLastName: string;
  studentEmail: string;
  studentPhoto: string;
  studentCountry: string;
  studentPhoneNumber: string;
  studentLastDegree: string;
  studentLastInstitution: string;
  studentLastInstitutionCity: string;
  studentLastInstitutionCountry: string;
  studentField: string;
  coursesList: string[];
  favoriteTutors: string[];
  studentEnrollmentDate: string;
  studentHomeworkCompleted: HomeworkCompleted[];
  studentHomework: Homework[];
  studentActiveCourses: number;
  studentActive: boolean;
  reviews: Review[];
  messagesReceives: Message[];
  messagesSent: Message[];
};

export type StudentList = Student[];
