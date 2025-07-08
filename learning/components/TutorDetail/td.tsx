import React from "react";
import { Tutor } from "@/types/tutor";

// این بخش فقط برای نمونه است - در عمل باید داده را از API یا دیتابیس دریافت کنید
const sampleTutor: Tutor = {
  id: 1,
  tutorId: "pt1001",
  tutorPhoto: "/path/to/photo.jpg",
  role: "Professional Teacher",
  tutorFirstName: "Charlotte",
  tutorLastName: "Watson",
  country: "Iran",
  subject: "English",
  phoneNumber: "+989111111111",
  activeStudent: 3,
  email: "Watson@gmail.com",
  pricePerHour: [
    {
      priceId: 1,
      price: 12,
      currency: "USD",
    },
    {
      priceId: 2,
      price: 200,
      currency: "Toman",
    },
  ],
  certification: [
    {
      certificationId: 1,
      certificationTitle: "TEFL Certified",
      certificationIssueDate: "2025-01-15",
      certificationIssuer: "International TEFL Academy",
      certificationPicture: "/path/to/cert.jpg",
    },
    {
      certificationId: 2,
      certificationTitle: "CELTA Certified",
      certificationIssueDate: "2024-06-20",
      certificationIssuer: "Cambridge Assessment English",
      certificationPicture: "/path/to/cert.jpg",
    },
    {
      certificationId: 3,
      certificationTitle: "DELF B2 Certified",
      certificationIssueDate: "2024-11-15",
      certificationIssuer: "France Education International",
      certificationPicture: "/path/to/cert.jpg",
    },
  ],
  education: [
    {
      degreeId: 1,
      degree: "Bachelor's Degree",
      institutionName: "University of Tehran",
      institutionCity: "Tehran",
      institutionCountry: "Iran",
      field: "English Language Teaching",
      startDate: "2016-09-01",
      endDate: "2020-06-30",
    },
    {
      degreeId: 2,
      degree: "Master's Degree",
      institutionName: "Allameh Tabataba'i University",
      location: "Tehran, Iran",
      field: "English Language Teaching",
      startDate: "2021-09-01",
      endDate: "2023-06-30",
    },
  ],
  speaks: [
    {
      languageId: 1,
      language: "English",
      flag: "/path/to/uk-flag.jpg",
      level: "native",
    },
    {
      languageId: 2,
      language: "French",
      flag: "/path/to/france-flag.jpg",
      level: "B1",
    },
  ],
  introduceVideo: "/video/sampleVideo.mp4",
  personalSummary:
    "I am a passionate and experienced English teacher with over 5 years of teaching experience...",
  classExpectations:
    "I am also fluent in French and Farsi, which allows me to connect with students...",
  teachingStyle: "Interactive and communicative approach",
  targetAudience: "Students of all ages and levels",
  experience: [
    {
      experienceId: 1,
      experienceTitle: "English Language Instructor",
      experienceCity: "Tehran",
      experienceCountry: "Iran",
      startDate: "2019-09-01",
      endDate: "2021-06-30",
      descriptionExperience:
        "Taught English language courses to university students...",
    },
    {
      experienceId: 2,
      experienceTitle: "Curriculum Developer",
      experienceCity: "Tehran",
      experienceCountry: "Iran",
      startDate: "2021-08-01",
      endDate: "2023-04-15",
      descriptionExperience:
        "Developed English language curriculum for language institutes...",
    },
  ],
  coursesList: ["cr1001", "cr1002"],
  reviews: [
    {
      reviewId: 1,
      reviewerName: "John",
      reviewDate: "2024-10-01",
      reviewText:
        "Charlotte is an amazing teacher! She helped me improve my English speaking skills significantly...",
      rating: 5,
    },
    {
      reviewId: 2,
      reviewerName: "Emily",
      reviewDate: "2024-09-15",
      reviewText:
        "I had a great experience learning with Charlotte. Her teaching style is very engaging and effective.",
      rating: 4,
    },
  ],
  messagesReceives: [
    {
      messageId: 1,
      messageSender: "st1001",
      messageText: "hi there",
    },
  ],
  messagesSent: [
    {
      messageId: 1,
      messageReceive: "st1001",
      messageText: "hi there",
    },
    {
      messageId: 2,
      messageReceive: "st1002",
      messageText: "hi there",
    },
  ],
  studentLists: ["st1001", "st1002"],
};

const TutorDetail = ({ tutorId }: { tutorId: string }) => {
  // در عمل باید داده را بر اساس tutorId از API دریافت کنید
  const tutor = sampleTutor; // اینجا فقط برای نمونه از داده‌های ثابت استفاده می‌کنیم

  return (
    <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
      {/* بخش سربرگ معلم */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* تصویر معلم */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <img
            src={tutor.tutorPhoto}
            alt={`${tutor.tutorFirstName} ${tutor.tutorLastName}`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* اطلاعات اصلی */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <h1 className="text-3xl font-bold mb-2">
            {tutor.tutorFirstName} {tutor.tutorLastName}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{tutor.role}</p>

          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {tutor.subject} Teacher
            </span>
            <span className="flex items-center gap-1">
              <img
                src="/path/to/country-flag.jpg"
                alt={tutor.country}
                className="w-5 h-5"
              />
              <span>{tutor.country}</span>
            </span>
          </div>

          {/* قیمت‌ها */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Price Per Hour:</h3>
            <div className="flex gap-4">
              {tutor.pricePerHour.map((price) => (
                <span
                  key={price.priceId}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full"
                >
                  {price.price} {price.currency}
                </span>
              ))}
            </div>
          </div>

          {/* دکمه‌های اقدام */}
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Book a Lesson
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* ویدیو معرفی */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Introduction Video</h2>
        <div className="w-full lg:w-3/4 mx-auto">
          <video controls className="w-full rounded-lg shadow-md">
            <source src={tutor.introduceVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* بخش‌های اطلاعات */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ستون سمت چپ */}
        <div className="lg:col-span-2">
          {/* درباره معلم */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 mb-4">{tutor.personalSummary}</p>
            <p className="text-gray-700">{tutor.classExpectations}</p>
          </section>

          {/* سبک تدریس */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Teaching Style</h2>
            <p className="text-gray-700">{tutor.teachingStyle}</p>
          </section>

          {/* تجربه‌ها */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-6">
              {tutor.experience.map((exp) => (
                <div
                  key={exp.experienceId}
                  className="border-l-4 border-blue-500 pl-4"
                >
                  <h3 className="text-xl font-semibold">
                    {exp.experienceTitle}
                  </h3>
                  <p className="text-gray-600">
                    {exp.experienceCity}, {exp.experienceCountry} |{" "}
                    {new Date(exp.startDate).toLocaleDateString()} -{" "}
                    {new Date(exp.endDate).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mt-2">
                    {exp.descriptionExperience}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* نظرات دانشجویان */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
            <div className="space-y-4">
              {tutor.reviews.map((review) => (
                <div
                  key={review.reviewId}
                  className="bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">{review.reviewerName}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    {new Date(review.reviewDate).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mt-2">{review.reviewText}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ستون سمت راست */}
        <div>
          {/* زبان‌ها */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Languages</h2>
            <div className="space-y-3">
              {tutor.speaks.map((lang) => (
                <div key={lang.languageId} className="flex items-center gap-3">
                  <img
                    src={lang.flag}
                    alt={lang.language}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium">{lang.language}</span>
                  <span className="text-sm text-gray-500">({lang.level})</span>
                </div>
              ))}
            </div>
          </section>

          {/* تحصیلات */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              {tutor.education.map((edu) => (
                <div key={edu.degreeId}>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-gray-700">
                    {edu.institutionName || edu.location}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {new Date(edu.startDate).getFullYear()} -{" "}
                    {new Date(edu.endDate).getFullYear()}
                  </p>
                  <p className="text-gray-600 text-sm">{edu.field}</p>
                </div>
              ))}
            </div>
          </section>

          {/* گواهینامه‌ها */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Certifications</h2>
            <div className="space-y-4">
              {tutor.certification.map((cert) => (
                <div key={cert.certificationId}>
                  <h3 className="font-semibold">{cert.certificationTitle}</h3>
                  <p className="text-gray-700">{cert.certificationIssuer}</p>
                  <p className="text-gray-600 text-sm">
                    Issued:{" "}
                    {new Date(cert.certificationIssueDate).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* اطلاعات تماس */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {tutor.email}
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {tutor.phoneNumber}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TutorDetail;
