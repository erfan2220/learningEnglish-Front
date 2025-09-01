// "use client";
// import React, { useEffect, useState } from "react";
// import Layout from "../Layout/Layout";
// import locationIcon from "./../../assets/icons/locationPink.svg";
// import languageIcon from "./../../assets/icons/languagePurple.svg";
// import tickIcon from "./../../assets/icons/tickGreen.svg";
// import learningIcon from "../../assets/icons/learningOrange.svg";
// import Country from "../Country/Country";
// import locationIconBlue from "./../../assets/icons/locationBlue.svg";
// import fieldIcon from "./../../assets/icons/institutionGreen.svg";
// import degreeIcon from "./../../assets/icons/educationPink.svg";
// import starIcon from "./../../assets/icons/star.svg";
// import studentIcon from "./../../assets/icons/studentPink.svg";
// import lessonIcon from "./../../assets/icons/lessonsBlue.svg";
// import levelIcon from "./../../assets/icons/levelIcon.svg";
// import photoDefault from "../../assets/icons/profilePhotoDefault.svg";
// // import ReviewCart from "../ReviewCart/ReviewCart";
// import VideoPlayer from "../VideoPlayer/VideoPlayer";
// import closeIcon from "../../assets/icons/closeBlue.svg";
// import sendIcon from "../../assets/icons/sentWhite.svg";
// import Image from "next/image";
// import Button from "../Button/Button";
// import { datePicker, timePicker } from "@/mock/DayTime";
// import { Tutor } from "@/model/tutorType";
// import { api } from "@/lib/APIs/axiosInstance";
// import { TemporaryCourse } from "@/model/courseType";
// import axios from "axios";

// const TutorDetail = ({ id }: { id: number }) => {
//   const [tutor, setTutor] = useState<Tutor | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isSelectDateTimeOpen, setIsSelectDateTimeOpen] = useState(false);
//   const [isReplyOpen, setIsReplyOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [isDisabled, setIsDisabled] = useState(true);

//   const [courses, setCourses] = useState<TemporaryCourse[]>([]);

//   useEffect(() => {
//     const fetchTutor = async () => {
//       try {
//         const res = await api.get(`/api/tutors/${id}`);
//         setTutor(res.data);
//       } catch (error) {
//         console.error("Fetching error", error);
//         setError("Failed to load tutor details. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (!isNaN(id)) {
//       fetchTutor();
//     } else {
//       setError("Invalid tutor ID");
//       setLoading(false);
//     }
//   }, [id]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/courses/`
//         );
//         setCourses(res.data);
//         console.log("Fetched courses:", res.data);
//       } catch (error) {
//         console.error("Fetching courses failed:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   useEffect(() => {
//     if (text !== "") {
//       setIsDisabled(false);
//     }
//   }, [text]);

//   if (loading) {
//     return (
//       <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto mt-[60px]">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto mt-[60px]">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!tutor) {
//     return (
//       <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto mt-[60px]">
//         <p>Course not found</p>
//       </div>
//     );
//   }

//   const matchCourses = courses.filter(
//     (course) => course.tutor.id === tutor.user.id
//   );

//   return (
//     <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
//       <div className="mt-[60px]">
//         {/* ====================video==================== */}
//         <div className="flex justify-center items-center">
//           <div className="w-full sm:w-[50%]">
//             <VideoPlayer src={tutor.intro_video_file} />
//           </div>
//         </div>

//         {/* ====================detail==================== */}
//         <Layout>
//           <div className="p-4 sm:px-12 sm:py-8">
//             {/* ====================name-photo==================== */}

//             <div className="flex items-center gap-4">
//               <div>
//                 <Image
//                   src={tutor.profile_picture ?? photoDefault}
//                   alt={tutor.user.first_name}
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <h2 className="font-bold text-2xl text-[#45444A]">
//                   {tutor.user.first_name} {tutor.user.last_name}
//                 </h2>
//                 <p className="text-[#8B8A8E] text-sm font-semibold">
//                   {"Tutor"}
//                 </p>
//               </div>
//             </div>

//             {/* ====================location==================== */}
//             <div className="flex gap-2 mt-4">
//               <Image
//                 src={locationIcon}
//                 alt="location icon"
//                 width={24}
//                 height={24}
//               />

//               <p className="text-[#5C5A60] font-semibold">
//                 from {tutor.country} {`(UTC )`}
//               </p>
//             </div>
//             {/* ====================speak==================== */}

//             <div className="flex flex-wrap items-center gap-x-6 gap-y-2 my-6">
//               <div className="flex gap-2">
//                 <Image
//                   src={languageIcon}
//                   alt="location icon"
//                   width={24}
//                   height={24}
//                 />
//                 <p className="text-[#5C5A60]">Speak:</p>
//               </div>
//               {tutor.languages_spoken.map((language, index) => (
//                 <div
//                   key={index}
//                   className="font-bold items-center flex gap-1 text-sm"
//                 >
//                   <Country
//                     countryName={language}
//                     fontWeight={"bold"}
//                     textSize={"14px"}
//                     width={"24px"}
//                   />

//                   {/* <p className="text-[#FF4866]">{language.level}</p> */}
//                 </div>
//               ))}
//             </div>

//             {/* ====================teach==================== */}

//             <div className="flex flex-wrap items-center gap-6 mt-2">
//               <div className="flex gap-2">
//                 <Image
//                   src={learningIcon}
//                   alt="location icon"
//                   width={24}
//                   height={24}
//                 />
//                 <p className="text-[#5C5A60]">Teaches:</p>
//               </div>
//               <p className="font-bold text-[#45444A]">{tutor.subjects[0]}</p>
//             </div>
//             {/* ====================about me==================== */}

//             <div className="text-sm sm:text-base my-10">
//               <p className="font-bold text-xl text-[#45444A]">About me</p>
//               <hr className="flex-1 my-2 border-1 border-[#BBBBBB]" />
//               <p className="text-[#737177] ">{tutor.bio}</p>
//             </div>

//             {/* ====================Certificates==================== */}

//             <div className="text-xm sm:text-sm my-10 text-[#737177]">
//               <p className="font-bold text-xl text-[#45444A]">Certificates</p>
//               <hr className="flex-1 my-2 border-1 border-[#BBBBBB]" />

//               {tutor.certificates.length > 0 && (
//                 <div className="flex mt-2 items-center gap-2 text-xs font-semibold">
//                   <Image
//                     src={tickIcon}
//                     alt="tick icon"
//                     width={24}
//                     height={24}
//                   />
//                   <p className="text-[#7A9E0D]">Certificate verified</p>
//                 </div>
//               )}
//               <div className="mt-4 gap-y-8">
//                 <table className="w-full border-collapse border border-gray-400 text-sm">
//                   <thead>
//                     <tr>
//                       <th className="border font-bold border-gray-300 text-center px-4 py-2">
//                         Title
//                       </th>
//                       <th className="border font-bold border-gray-300 text-center px-4 py-2">
//                         Issue Date
//                       </th>
//                       <th className="border font-bold border-gray-300 text-center px-4 py-2">
//                         Issuer
//                       </th>
//                       <th className="hidden sm:table-cell border font-bold border-gray-300 text-center px-4 py-2">
//                         Certificate
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {tutor.certificates.map((cert) => (
//                       <tr key={cert.id}>
//                         <td className="border border-gray-300 text-center px-4 py-2 align-middle">
//                           {cert.title}
//                         </td>
//                         <td className="border border-gray-300 text-center px-4 py-2 align-middle">
//                           {cert.issue_date}
//                         </td>
//                         <td className="border border-gray-300 text-center px-4 py-2 align-middle">
//                           {cert.issued_by}
//                         </td>
//                         <td className="hidden sm:table-cell border border-gray-300 text-center px-4 py-2 align-middle">
//                           <a
//                             href={
//                               typeof cert.certificate_image === "string"
//                                 ? cert.certificate_image
//                                 : cert.certificate_image
//                               // : cert.certificationPicture.src
//                             }
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             {/* <a
//                             href={
//                               cert.certificationPicture.src ||
//                               cert.certificationPicture
//                             }
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           > */}
//                             {/* <img
//                               src={cert.certificationPicture}
//                               alt="certification"
//                               className="w-[80px] h-[80px] rounded-lg mx-auto cursor-pointer"
//                             /> */}

//                             <Image
//                               src={cert.certificate_image}
//                               alt="certification pic"
//                               width={80}
//                               height={40}
//                               className="rounded-lg mx-auto cursor-pointer"
//                             />
//                           </a>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* ====================education==================== */}
//             <div className="w-full my-10 text-[#5C5A60]">
//               <p className="font-bold text-xl text-[#45444A]">Education</p>
//               <hr className="flex-1 my-2 border-1 border-[#BBBBBB]" />

//               {tutor.educations.map((education) => (
//                 <div key={education.id} className="w-full sm:flex mt-4 mb-6">
//                   <div className="w-full sm:w-1/3 mb-2 mt-4 sm:my-0">
//                     <b>
//                       {education.start_date.slice(0, 4)}-
//                       {education.end_date.slice(0, 4)}
//                     </b>
//                   </div>
//                   <div className="w-full sm:w-2/3 sm:text-sm">
//                     <div className="flex gap-2">
//                       <Image
//                         src={degreeIcon}
//                         alt="degree"
//                         width={16}
//                         height={16}
//                       />
//                       <p className="font-semibold">{education.degree}</p>
//                     </div>
//                     <div className="flex gap-2">
//                       <Image
//                         src={fieldIcon}
//                         alt="field"
//                         width={16}
//                         height={16}
//                       />
//                       <p>{education.field}</p>
//                     </div>

//                     <div className="flex gap-2">
//                       <Image
//                         src={locationIconBlue}
//                         alt="location"
//                         width={16}
//                         height={16}
//                       />
//                       <p>
//                         {education.institution_name}
//                         {" - "}
//                         {education.country}
//                         {" - "}
//                         {education.city}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* ====================experience==================== */}

//             <div className="w-full my-10 text-[#5C5A60]">
//               <p className="font-bold text-xl text-[#45444A]">
//                 Work Experience
//               </p>
//               <hr className="flex-1 my-2 border-1 border-[#BBBBBB]" />

//               {tutor.experiences.map((experience) => (
//                 <div key={experience.id} className="w-full sm:flex mt-4 mb-6">
//                   <div className="w-full sm:w-1/3 mb-2 mt-4 sm:my-0">
//                     <b>
//                       {experience.start_date.slice(0, 4)}-
//                       {experience.end_date.slice(0, 4)}
//                     </b>
//                   </div>
//                   <div className="w-full sm:w-2/3 text-sm">
//                     <p className="font-bold">{experience.title}</p>

//                     <div className="flex gap-2">
//                       <Image
//                         src={locationIconBlue}
//                         alt="location"
//                         width={16}
//                         height={16}
//                       />
//                       <p className="font-semibold text-[#737177]">
//                         {experience.country}
//                         {" - "}
//                         {experience.city}
//                       </p>
//                       <p className="font-semibold text-[#737177]">
//                         {experience.organization}
//                       </p>
//                     </div>

//                     <p className="text-[#8B8A8E]">{experience.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Layout>

//         <Layout>
//           <div className="flex justify-evenly  items-center py-4">
//             {/* ==================== */}
//             <div className="flex flex-col items-center justify-center">
//               <p className="text-[#8B8A8E] font-bold text-sm sm:text-base">
//                 Rating
//               </p>
//               <div className="flex items-center gap-2">
//                 <Image
//                   src={starIcon}
//                   alt="star icon"
//                   width={32}
//                   height={32}
//                   className="w-5 sm:w-8"
//                 />
//                 <p className="sm:text-xl font-bold text-[#FFA648]">ff</p>
//               </div>
//             </div>
//             {/* ==================== */}
//             <div className="flex flex-col items-center justify-center">
//               <p className="text-[#8B8A8E] font-bold text-sm sm:text-base">
//                 Students
//               </p>
//               <div className="flex items-center gap-2">
//                 <Image
//                   src={studentIcon}
//                   alt="student icon"
//                   width={32}
//                   height={32}
//                   className="w-5 sm:w-8"
//                 />
//                 <p>0</p>
//                 {/* {tutor.studentLists.length > 0 ? (
//                   <p className="sm:text-xl font-bold text-[#5C5A60]">
//                     {detail.studentLists.length}
//                   </p>
//                 ) : (
//                   <p>0</p>
//                 )} */}
//               </div>
//             </div>

//             {/* ==================== */}
//             <div className="flex flex-col items-center justify-center">
//               <p className="text-[#8B8A8E] font-bold text-sm sm:text-base">
//                 Lessons
//               </p>
//               <div className="flex items-center gap-2">
//                 <Image
//                   src={lessonIcon}
//                   alt="lesson icon"
//                   width={32}
//                   height={32}
//                   className="w-5 sm:w-8"
//                 />
//                 <p>0</p>
//                 {/* {tutor.courses.length > 0 ? (
//                   <p className="sm:text-xl font-bold text-[#5C5A60]">
//                     {tutor.courses.length}
//                   </p>
//                 ) : (
//                   <p>0</p>
//                 )} */}
//               </div>
//             </div>
//           </div>
//         </Layout>

//         <div className="mt-10">
//           <h4 className="text-xl text-[#45444A] font-bold">Courses</h4>
//           <Layout marginTop="mt-4">
//             <div className="p-4 sm:px-12 sm:pt-8 sm:pb-4">
//               {matchCourses.map((course) => (
//                 <div
//                   key={course.courseId}
//                   className="mb-6 sm:flex sm:justify-between sm:items-center"
//                 >
//                   <div>
//                     <p className="text-[#45444A] font-bold text-sm sm:text-base">
//                       {course.title}
//                     </p>
//                     {/* ====================teach==================== */}
//                     <div className="flex gap-2 text-[#5C5A60]">
//                       <Image
//                         src={lessonIcon}
//                         alt="lesson"
//                         width={24}
//                         height={24}
//                       />
//                       <p>
//                         <b>{course.length}</b> Lessons taught
//                       </p>
//                     </div>
//                     {/* ====================level==================== */}

//                     <div className="flex gap-2 text-[#5C5A60]">
//                       <Image
//                         src={levelIcon}
//                         alt="level"
//                         width={24}
//                         height={24}
//                       />
//                       <p>
//                         Level: <b>{course.level}</b>
//                       </p>
//                     </div>
//                   </div>

//                   {/* ====================price==================== */}
//                   <div className="flex gap-2 h-8 mt-3 sm:mt-0">
//                     <div className="bg-[#FFC3CD] px-2 py-1 rounded-3xl text-[#9D1229] font-semibold text-sm sm:text-base">
//                       <p>
//                         {"Tomen"} {course.price_per_toman}
//                       </p>
//                     </div>
//                     <div className="bg-[#FFC3CD] px-2 py-1 rounded-3xl text-[#9D1229] font-semibold text-sm sm:text-base">
//                       <p>
//                         {"Dollar"} {course.price_per_dollar}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Layout>
//         </div>

//         {/* ====================reviews==================== */}

//         {/* <div className="mt-10 ">
//           <h4 className="text-xl text-[#45444A] font-bold">
//             {detail.reviews.length} Reviews
//           </h4>
//           <Layout marginTop="mt-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-12 py-8">
//               {detail.reviews.map((review) => (
//                 <div key={review.reviewId} className="mx-4 my-4">
//                   <ReviewCart data={review} />
//                 </div>
//               ))}
//             </div>
//           </Layout>
//         </div> */}
//         {/* Fixed Bottom Bar */}
//         <div className="fixed left-0 right-0 bottom-0 z-40 flex justify-between border-[#737177] px-3 sm:px-10 md:px-28 items-center h-16 bg-[#CB71FF90] backdrop-blur-sm shadow-[-5px_-3px_15px_rgba(0,0,0,0.2)]">
//           <Button
//             label="Send Message"
//             type="button"
//             marginTop="0"
//             btnIcon={sendIcon}
//             colorBtn="#97C01C"
//             colorBtnHover="#445A00"
//             colorBtnTextHover="white"
//             colorBtnActive="#D1FF46"
//             onclick={() => setIsReplyOpen(true)}
//           />
//           <Button
//             label="Book Now"
//             type="button"
//             marginTop="0"
//             onclick={() => setIsSelectDateTimeOpen(true)}
//           />
//         </div>
//       </div>
//       {isSelectDateTimeOpen && (
//         <div className="fixed z-[200] inset-0 bg-black/20 flex justify-center items-center">
//           <div className="relative bg-white w-full max-w-4xl max-h-[600px] rounded-2xl p-4 overflow-y-auto m-4">
//             <div
//               onClick={() => setIsSelectDateTimeOpen(false)}
//               className="absolute cursor-pointer rounded-full px-3.5 py-1 top-2 right-2"
//             >
//               <Image src={closeIcon} alt="close icon" width={32} height={32} />
//             </div>

//             <div className="flex flex-wrap justify-center text-center gap-3 mt-8 w-full">
//               <p className="text-xs sm:text-sm text-center">
//                 Based on your timezone (UTC+03:30)
//               </p>
//             </div>
//             <div className="w-full flex flex-col items-center justify-center">
//               <div className="flex flex-wrap justify-center gap-3 mt-8 w-full">
//                 {datePicker.map((day) => (
//                   <div
//                     key={day.id}
//                     className="bg-[#FFC3CD] rounded-2xl text-xs sm:text-sm font-semibold cursor-pointer p-2 w-20 h-10 flex items-center justify-center"
//                   >
//                     {day.day}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* ============= */}
//             <hr className="border-1 border-[#737177] mx-4 sm:mx-12 my-5" />
//             {/* ============= */}

//             <div className="w-full flex flex-col items-center justify-center mb-8">
//               <div className="flex flex-wrap justify-center gap-3  w-full">
//                 {timePicker.map((time) => (
//                   <div
//                     key={time.id}
//                     className="bg-[#FFC3CD] rounded-2xl text-xs sm:text-sm font-semibold cursor-pointer p-2 w-28 h-10 flex items-center justify-center"
//                   >
//                     {time.time}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {isReplyOpen && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
//           <div className="bg-white relative rounded-2xl shadow-xl p-6 w-[90%] sm:w-[600px]">
//             <p className="text-[#45444A] text-sm mb-2">Write your text here:</p>
//             <textarea
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               rows={6}
//               className="w-full text-sm p-2 border-2 border-[#D2D2D2] bg-[#F1ECFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#97C01C]"
//               placeholder="Write your reply here..."
//             ></textarea>
//             <div className="flex justify-end mt-4">
//               <button
//                 className="px-3 py-1 top-2 hover:cursor-pointer right-2 absolute bg-[#5F33E1] text-white rounded-full"
//                 onClick={() => setIsReplyOpen(false)}
//               >
//                 X
//               </button>

//               <Button
//                 label="Send"
//                 type="button"
//                 disabled={isDisabled}
//                 btnIcon={sendIcon}
//                 colorBtn="#97C01C"
//                 colorBtnHover="#7DA216"
//                 colorBtnActive="#5D7C02"
//                 onclick={() => {
//                   if (!isDisabled) {
//                     console.log("Sending message:", text);
//                     setIsReplyOpen(false);
//                     setText("");
//                   }
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TutorDetail;
