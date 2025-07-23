// "use client";
// import React, { useEffect, useState } from "react";
// import Layout from "../Layout/Layout";
// import axiosInstance from "@/APIs/axiosInstance";
// import { CourseTypeTemporary } from "@/model/courseType";

// const CourseDetail = ({ courseId }: { courseId: number }) => {
//   const [course, setCourse] = useState<CourseTypeTemporary | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const res = await axiosInstance.get(`/api/courses/${courseId}`);
//         setCourse(res.data);
//         console.log("course from backend", res.data);
//       } catch (error) {
//         console.error("fetching error", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (!isNaN(courseId)) {
//       fetchCourse();
//     }
//   }, [courseId]);

//   return (
//     <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
//       <div className="mt-[160px]">
//         {loading ? (
//           <p>loading ...</p>
//         ) : (
//           <div>
//             <Layout>
//               <div className="p-4 sm:p-12"></div>
//             </Layout>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;
