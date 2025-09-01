// "use client";
// import React, { useEffect, useState } from "react";
// import Layout from "../Layout/Layout";
// import Image from "next/image";
// import { courseMockDetail } from "@/mock/courseMockData";
// import Country from "../Country/Country";
// import clockIcon = "/icons/clockPurple.svg";
// import levelIcon = "/icons/levelIcon.svg";
// import peopleIcon = "/icons/people.svg";
// import languageIcon = "/icons/languagePurple.svg";
// // import { tutorMockDetail } from "@/mock/tutorMockData";
// import Link from "next/link";
// import CourseCart from "../CourseCart/CourseCart";
// import Button from "../Button/Button";
// import axiosInstance from "@/APIs/axiosInstance";
// import { CourseTypeTemporary } from "@/model/courseType";

// const CourseDetail = ({ courseId }: { courseId: number }) => {
//   const [courses, setCourses] = useState<CourseTypeTemporary[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await axiosInstance.get("/api/courses/");
//         setCourses(res.data);
//         console.log("courses from backend", res.data);
//       } catch (error) {
//         console.error("fetching error", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const matchData = courses.find((matchData) => courseId === matchData.id);

//   // const matchTutor = courses.tutor.find(
//   //   (matchTutor) => matchTutor.tutorId === matchData?.tutorId
//   // );

//   const courseList = matchTutor?.coursesList;
//   const matchedCourses = courseList
//     ?.map((courseId) =>
//       courseMockDetail.find((course) => course.courseId === courseId)
//     )
//     .filter((course) => course !== undefined);

//   // console.log(matchedCourses);
//   return (
//     <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
//       <div className="mt-[60px]">
//         <Layout>
//           <div className="p-4 sm:p-12">
//             {/* ///////header////////////// */}
//             <h1 className="text-[#45444A] font-bold text-2xl">
//               {matchData?.title}
//             </h1>
//             {/* ///////info////////////// */}
//             <div className="flex flex-wrap my-4 gap-3 text-[#45444A] font-bold text-sm">
//               <div className="px-3 py-1 bg-[#D2C3FF] rounded-3xl shadow">
//                 <Country
//                   countryName={matchData?.language ?? ""}
//                   fontWeight={"semibold"}
//                   textSize="14px"
//                   width={22}
//                 />
//               </div>
//               <div className="flex gap-1 px-3 py-1 bg-[#D2C3FF] rounded-3xl shadow">
//                 <Image src={clockIcon} alt="time icon" width={22} height={22} />
//                 {/* <p>{matchData?.courseLength} mins</p> */}
//                 <p>100 mins</p>
//               </div>

//               <div className="flex gap-1 px-3 py-1 bg-[#D2C3FF] rounded-3xl shadow">
//                 <Image src={levelIcon} alt="time icon" width={22} height={22} />
//                 <p>{matchData?.level}</p>
//               </div>

//               <div className="flex gap-1 px-3 py-1 bg-[#D2C3FF] rounded-3xl shadow">
//                 <Image
//                   src={peopleIcon}
//                   alt="time icon"
//                   width={22}
//                   height={22}
//                 />
//                 <p>{matchData?.capacity} spots / class</p>
//               </div>
//             </div>

//             {/* ///////description////////////// */}

//             <div className="my-8 mt-10 text-[#45444A]">
//               <h4 className="font-bold">Class description</h4>
//               <p className="text-[#737177]">{matchData?.description}</p>
//             </div>
//             {/* ///////Read more////////////// */}
//             <div className="my-8 text-[#45444A]">
//               <h4 className="font-bold">Read more</h4>
//               {/* <p className="text-[#737177]">{matchData?.courseDetail}</p> */}
//               <p className="text-[#737177]">{matchData?.description}</p>
//             </div>

//             {/* ///////courseRequirements////////////// */}
//             <div className="my-8 text-[#45444A]">
//               <h4 className="font-bold">Course Requirements</h4>
//               {/* <p className="text-[#737177]">{matchData?.courseRequirements}</p> */}
//               <p className="text-[#737177]">courseRequirements</p>
//             </div>

//             {/* ///////courseMaterials////////////// */}
//             <div className="my-8 text-[#45444A]">
//               <h4 className="font-bold">Course Materials</h4>
//               <p className="text-[#737177]">courseMaterials</p>
//               {/* <p className="text-[#737177]">{matchData?.courseMaterials}</p> */}
//             </div>

//             {/* ///////Course Length////////////// */}
//             <div className="my-8 text-[#45444A]">
//               <h4 className="font-bold">Course Length</h4>
//               <p className="text-[#737177]">
//                 <b>{matchData?.lessons}</b> Lessons
//               </p>
//             </div>
//           </div>
//         </Layout>

//         <Layout>
//           <div className="p-4 sm:p-12">
//             <h2 className="text-[#45444A] font-bold text-2xl ">
//               About Your Tutor
//             </h2>

//             {/* //////////////////// */}
//             <div className="flex gap-4 items-center my-5">
//               <Image
//                 src={matchTutor?.tutorPhoto}
//                 alt="tutor photo"
//                 width={70}
//                 height={70}
//               />
//               <div className="text-[#45444A]">
//                 <p className="font-bold">
//                   {matchTutor?.tutorFirstName} {matchTutor?.tutorLastName}
//                 </p>
//                 <p className=" text-[#737177] text-sm">{matchTutor?.role}</p>
//               </div>
//             </div>

//             {/* //////////////////// */}

//             <div className="flex gap-2 px-3 py-1 text-[#5C5A60]">
//               <Image src={peopleIcon} alt="time icon" width={22} height={22} />
//               <p className="font-semibold">
//                 <b>{matchTutor?.activeStudent}</b> Active Students
//               </p>
//             </div>

//             {/* //////////////////// */}

//             <div className="flex items-center gap-2 px-3 py-1 text-[#5C5A60]">
//               <Image
//                 src={languageIcon}
//                 alt="language icon"
//                 width={22}
//                 height={22}
//               />
//               <div className="font-semibold flex flex-wrap gap-6">
//                 Speaks{" "}
//                 {matchTutor?.speaks.map((language) => (
//                   <div key={language.languageId}>
//                     <Country
//                       flag={language.flag}
//                       countryName={language.language}
//                       fontWeight="semibold"
//                       textSize="13px"
//                       width={22}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* /////////bio/////////// */}

//             <div className="mt-8">
//               <h4 className="text-[#45444A] font-bold">Bio</h4>
//               <p className="text-[#737177]">{matchTutor?.personalSummary}</p>
//             </div>

//             {/* /////////more/////////// */}

//             <div className="mt-8">
//               <Link href={`/tutor/detail/${matchTutor?.tutorId}`}>
//                 <u className="text-sm text-[#737177]">more about tutor...</u>
//               </Link>
//             </div>
//           </div>
//         </Layout>

//         {(matchedCourses ?? []).filter((course) => course.courseId !== courseId)
//           .length > 0 && (
//           <div className="mt-10">
//             <h4 className="text-[#45444A] font-bold text-lg sm:text-2xl">
//               Other Courses Taught by Tutor
//             </h4>
//             <hr className="flex-1 h-px my-4 border-1 border-[#45444A]" />

//             <div className="px-2 sm:px-14 mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center justify-around">
//               {matchedCourses
//                 ?.filter((course) => course.courseId !== courseId)
//                 .map((course) => (
//                   <div key={course.courseId}>
//                     <CourseCart course={course} />
//                   </div>
//                 ))}
//             </div>
//           </div>
//         )}

//         {/* //////////////////// */}
//         <div className="fixed left-0 right-0 bottom-0 z-40 flex justify-between border-[#737177] px-3 sm:px-10 md:px-28 items-center h-16 bg-[#CB71FF90] backdrop-blur-sm shadow-[-5px_-3px_15px_rgba(0,0,0,0.2)] ">
//           <p className="font-bold text-[#45444A] ">
//             {matchData?.price[0].currency} {matchData?.price[0].price}
//           </p>

//           <Button label="start course" type="button" marginTop="0" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;
