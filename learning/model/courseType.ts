export type Language = {
  languageId: number;
  languageName: string;
  languageFlag: string;
  level: string;
};

export type Price = {
  priceId: number;
  price: number;
  currency: string;
};

export type Homework = {
  homeworkId: number;
  homeworkTitle: string;
  homeworkDocument: string;
  homeworkDueDate: string;
};

export type Lesson = {
  lessonId: number;
  lessonTitle: string;
  lessonPart: string;
  lessonDocument: string;
  lessonVideo: string;
  lessonDescription: string;
  homeworks: Homework[];
};

export type Course = {
  id: number;
  courseId: string;
  courseTitle: string;
  tutorId: string;
  tutorFirstName: string;
  tutorLastName: string;
  tutorPhoto: string;
  activeStudents: number;
  tutorSpeak: Language[];
  price: Price[];
  courseLevel: string;
  courseDay: string;
  courseTimeStart: number;
  courseTimeEnd: number;
  courseLanguage: string;
  courseLanguageFlag: string;
  courseLength: number;
  coursePicture: string;
  courseDescription: string;
  courseDetail: string;
  courseCapacity: number;
  courseDuration: number;
  courseRequirements: string;
  courseMaterials: string;
  lesson: Lesson[];
};

export type CourseList = Course[];
