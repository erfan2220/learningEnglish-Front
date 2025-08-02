import { tutorMockDetail } from "@/mock/tutorMockData";
import React from "react";
import Layout from "../Layout/Layout";
// import locationIcon from "./../../assets/icons/locationPink.svg";
// import languageIcon from "./../../assets/icons/languagePurple.svg";
// import tickIcon from "./../../assets/icons/tickGreen.svg";
// import learningIcon from "../../assets/icons/learningOrange.svg";
import Country from "../Country/Country";
// import locationIconBlue from "./../../assets/icons/locationBlue.svg";
// import fieldIcon from "./../../assets/icons/institutionGreen.svg";
// import degreeIcon from "./../../assets/icons/educationPink.svg";
// import starIcon from "./../../assets/icons/star.svg";
// import studentIcon from "./../../assets/icons/studentPink.svg";
// import lessonIcon from "./../../assets/icons/lessonsBlue.svg";
// import levelIcon from "./../../assets/icons/levelIcon.svg";
import { courseMockDetail } from "@/mock/courseMockData";
import ReviewCart from "../ReviewCart/ReviewCart";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

type Props = {
  tutorId: string;
};

const TutorDetail = ({ tutorId }: Props) => {
  const detail = tutorMockDetail.find((detail) => detail.tutorId === tutorId);
  //   const courses = detail?.coursesList;
  //   console.log(courses);

  const matchedCourses = courseMockDetail.filter((course) =>
    detail?.coursesList?.includes(course.courseId)
  );
  //   console.log(matchedCourses);

  if (!detail) return <div className="text-red-500">Tutor not found</div>;

  return (
    <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
      <div className="mt-[60px]">
        {/* ====================video==================== */}
        <div className="flex justify-center items-center">
          <div className="w-full sm:w-[50%]">
            <VideoPlayer src={detail.introduceVideo} />
          </div>
        </div>

        {/* ====================detail==================== */}
        <Layout>
          <div className="p-4 sm:px-12 sm:py-8">
            {/* ====================name-photo==================== */}

            <div className="flex items-center gap-4">
              <div>
                <img
                  src={detail.tutorPhoto}
                  alt={detail.tutorFirstName}
                  className="w-[100px] h-[100px]"
                />
                {/* <Image
                  src={detail.tutorPhoto}
                  alt={detail.tutorFirstName}
                  width={100}
                  height={100}
                /> */}
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-2xl text-[#45444A]">
                  {detail.tutorFirstName} {detail.tutorLastName}
                </h2>
                <p className="text-[#8B8A8E] text-sm font-semibold">
                  {detail.role}
                </p>
              </div>
            </div>

            {/* ====================location==================== */}
            <div className="flex gap-2 mt-4">
              <img
                src={"/icons/locationPink.svg"}
                alt="locationIcon"
                className="w-6 h-6"
              />
              {/* <Image
                src={locationIcon}
                alt="location icon"
                width={24}
                height={24}
              /> */}

              <p className="text-[#5C5A60] font-semibold">
                from {detail.country} {`(UTC )`}
              </p>
            </div>
            {/* ====================speak==================== */}

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 my-6">
              <div className="flex gap-2">
                <img
                  src={"/icons/languagePurple.svg"}
                  alt="languageIcon"
                  className="w-6 h-6"
                />

                {/* <Image
                  src={languageIcon}
                  alt="location icon"
                  width={24}
                  height={24}
                /> */}
                <p className="text-[#5C5A60]">Speak:</p>
              </div>
              {detail.speaks.map((language) => (
                <div
                  key={language.languageId}
                  className="font-bold items-center flex gap-1 text-sm"
                >
                  <Country
                    countryName={language.language}
                    flag={language.flag}
                    fontWeight={"bold"}
                    textSize={"14px"}
                    width={"24px"}
                  />

                  <p className="text-[#FF4866]">{language.level}</p>
                </div>
              ))}
            </div>

            {/* ====================teach==================== */}

            <div className="flex flex-wrap items-center gap-6 mt-2">
              <div className="flex gap-2">
                <img
                  src={"/icons/learningOrange.svg"}
                  alt="learningIcon"
                  className="w-6 h-6"
                />

                {/* <Image
                  src={learningIcon}
                  alt="location icon"
                  width={24}
                  height={24}
                /> */}
                <p className="text-[#5C5A60]">Teaches:</p>
              </div>
              <p className="font-bold text-[#45444A]">{detail.subject}</p>
            </div>
            {/* ====================about me==================== */}

            <div className="text-sm sm:text-base my-10">
              <p className="font-bold text-xl text-[#45444A]">About me</p>
              <hr className="flex-1 my-2 border-1 border-[#BBBBBB]" />
              <p className="text-[#737177] ">{detail.personalSummary}</p>
            </div>

            {/* ====================Certificates==================== */}

            <div className="text-xm sm:text-sm my-10 text-[#737177]">
              <p className="font-bold text-xl text-[#45444A]">Certificates</p>
              <hr className="flex-1 my-2 border-1 border-[#BBBBBB]" />

              {detail.certification.length > 0 && (
                <div className="flex mt-2 items-center gap-2 text-xs font-semibold">
                  <img
                    src={"/icons/tickGreen.svg"}
                    alt="tickIcon"
                    className="w-6 h-6"
                  />

                  {/* <Image
                    src={tickIcon}
                    alt="tick icon"
                    width={24}
                    height={24}
                  /> */}
                  <p className="text-[#7A9E0D]">Certificate verified</p>
                </div>
              )}
              <div className="mt-4 gap-y-8">
                <table className="w-full border-collapse border border-gray-400 text-sm">
                  <thead>
                    <tr>
                      <th className="border font-bold border-gray-300 text-center px-4 py-2">
                        Title
                      </th>
                      <th className="border font-bold border-gray-300 text-center px-4 py-2">
                        Issue Date
                      </th>
                      <th className="border font-bold border-gray-300 text-center px-4 py-2">
                        Issuer
                      </th>
                      <th className="hidden sm:table-cell border font-bold border-gray-300 text-center px-4 py-2">
                        Certificate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.certification.map((cert) => (
                      <tr key={cert.certificationId}>
                        <td className="border border-gray-300 text-center px-4 py-2 align-middle">
                          {cert.certificationTitle}
                        </td>
                        <td className="border border-gray-300 text-center px-4 py-2 align-middle">
                          {cert.certificationIssueDate}
                        </td>
                        <td className="border border-gray-300 text-center px-4 py-2 align-middle">
                          {cert.certificationIssuer}
                        </td>
                        <td className="hidden sm:table-cell border border-gray-300 text-center px-4 py-2 align-middle">
                          <a
                            href={
                              typeof cert.certificationPicture === "string"
                                ? cert.certificationPicture
                                : cert.certificationPicture
                              // : cert.certificationPicture.src
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {/* <a
                            href={
                              cert.certificationPicture.src ||
                              cert.certificationPicture
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          > */}
                            <img
                              src={cert.certificationPicture}
                              alt="certification"
                              className="w-[80px] h-[80px] rounded-lg mx-auto cursor-pointer"
                            />

                            {/* <Image
                              src={cert.certificationPicture}
                              alt="certification pic"
                              width={80}
                              height={40}
                              className="rounded-lg mx-auto cursor-pointer"
                            /> */}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ====================education==================== */}
            <div className="w-full my-10 text-[#5C5A60]">
              <p className="font-bold text-xl text-[#45444A]">Education</p>
              <hr className="flex-1 my-2 border-1 border-[#BBBBBB]" />

              {detail.education.map((education) => (
                <div
                  key={education.degreeId}
                  className="w-full sm:flex mt-4 mb-6"
                >
                  <div className="w-full sm:w-1/3 mb-2 mt-4 sm:my-0">
                    <b>
                      {education.startDate.slice(0, 4)}-
                      {education.endDate.slice(0, 4)}
                    </b>
                  </div>
                  <div className="w-full sm:w-2/3 sm:text-sm">
                    <div className="flex gap-2">
                      <img
                        src={"/icons/educationPink.svg"}
                        alt="degreeIcon"
                        className="w-4 h-4"
                      />
                      {/* <Image
                        src={degreeIcon}
                        alt="degree"
                        width={16}
                        height={16}
                      /> */}
                      <p className="font-semibold">{education.degree}</p>
                    </div>
                    <div className="flex gap-2">
                      <img
                        src={"/icons/institutionGreen.svg"}
                        alt="fieldIcon"
                        className="w-4 h-4"
                      />

                      {/* <Image
                        src={fieldIcon}
                        alt="field"
                        width={16}
                        height={16}
                      /> */}
                      <p>{education.field}</p>
                    </div>

                    <div className="flex gap-2">
                      <img
                        src={"/icons/locationBlue.svg"}
                        alt="locationIconBlue"
                        className="w-4 h-4"
                      />

                      {/* <Image
                        src={locationIconBlue}
                        alt="location"
                        width={16}
                        height={16}
                      /> */}
                      <p>
                        {education.institutionName}
                        {" - "}
                        {education.institutionCountry}
                        {" - "}
                        {education.institutionCity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ====================experience==================== */}

            <div className="w-full my-10 text-[#5C5A60]">
              <p className="font-bold text-xl text-[#45444A]">
                Work Experience
              </p>
              <hr className="flex-1 my-2 border-1 border-[#BBBBBB]" />

              {detail.experience.map((experience) => (
                <div
                  key={experience.experienceId}
                  className="w-full sm:flex mt-4 mb-6"
                >
                  <div className="w-full sm:w-1/3 mb-2 mt-4 sm:my-0">
                    <b>
                      {experience.startDate.slice(0, 4)}-
                      {experience.endDate.slice(0, 4)}
                    </b>
                  </div>
                  <div className="w-full sm:w-2/3 text-sm">
                    <p className="font-bold">{experience.experienceTitle}</p>

                    <div className="flex gap-2">
                      <img
                        src={"/icons/locationBlue.svg"}
                        alt="locationIconBlue"
                        className="w-4 h-4"
                      />

                      {/* <Image
                        src={locationIconBlue}
                        alt="location"
                        width={16}
                        height={16}
                      /> */}
                      <p className="font-semibold text-[#737177]">
                        {experience.experienceCountry}
                        {" - "}
                        {experience.experienceCity}
                      </p>
                    </div>

                    <p className="text-[#8B8A8E]">
                      {experience.descriptionExperience}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Layout>

        <Layout>
          <div className="flex justify-evenly  items-center py-4">
            {/* ==================== */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-[#8B8A8E] font-bold text-sm sm:text-base">
                Rating
              </p>
              <div className="flex items-center gap-2">
                <img
                  src={"/icons/star.svg"}
                  alt="starIcon"
                  className="w-5 sm:w-8 h-8 "
                />

                {/* <Image
                  src={starIcon}
                  alt="star icon"
                  width={32}
                  height={32}
                  className="w-5 sm:w-8"
                /> */}
                <p className="sm:text-xl font-bold text-[#FFA648]">ff</p>
              </div>
            </div>
            {/* ==================== */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-[#8B8A8E] font-bold text-sm sm:text-base">
                Students
              </p>
              <div className="flex items-center gap-2">
                <img
                  src={"/icons/studentPink.svg"}
                  alt="studentIcon"
                  className="w-5 sm:w-8 h-8 "
                />

                {/* <Image
                  src={studentIcon}
                  alt="student icon"
                  width={32}
                  height={32}
                  className="w-5 sm:w-8"
                /> */}
                {detail.studentLists.length > 0 ? (
                  <p className="sm:text-xl font-bold text-[#5C5A60]">
                    {detail.studentLists.length}
                  </p>
                ) : (
                  <p>0</p>
                )}
              </div>
            </div>

            {/* ==================== */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-[#8B8A8E] font-bold text-sm sm:text-base">
                Lessons
              </p>
              <div className="flex items-center gap-2">
                <img
                  src={"/icons/lessonsBlue.svg"}
                  alt="lessonIcon"
                  className="w-5 sm:w-8 h-8 "
                />

                {/* <Image
                  src={lessonIcon}
                  alt="lesson icon"
                  width={32}
                  height={32}
                  className="w-5 sm:w-8"
                /> */}
                {detail.coursesList.length > 0 ? (
                  <p className="sm:text-xl font-bold text-[#5C5A60]">
                    {detail.coursesList.length}
                  </p>
                ) : (
                  <p>0</p>
                )}
              </div>
            </div>
          </div>
        </Layout>

        <div className="mt-10">
          <h4 className="text-xl text-[#45444A] font-bold">Courses</h4>
          <Layout marginTop="mt-4">
            <div className="p-4 sm:px-12 sm:pt-8 sm:pb-4">
              {matchedCourses.map((course) => (
                <div
                  key={course.courseId}
                  className="mb-6 sm:flex sm:justify-between sm:items-center"
                >
                  <div>
                    <p className="text-[#45444A] font-bold text-sm sm:text-base">
                      {course.courseTitle}
                    </p>
                    {/* ====================teach==================== */}
                    <div className="flex gap-2 text-[#5C5A60]">
                      <img
                        src={"/icons/lessonsBlue.svg"}
                        alt="lessonIcon"
                        className="w-6 h-6"
                      />

                      {/* <Image
                        src={lessonIcon}
                        alt="lesson"
                        width={24}
                        height={24}
                      /> */}
                      <p>
                        <b>{course.lesson.length}</b> Lessons taught
                      </p>
                    </div>
                    {/* ====================level==================== */}

                    <div className="flex gap-2 text-[#5C5A60]">
                      <img
                        src={"/icons/levelIcon.svg"}
                        alt="levelIcon"
                        className="w-6 h-6"
                      />

                      {/* <Image
                        src={levelIcon}
                        alt="level"
                        width={24}
                        height={24}
                      /> */}
                      <p>
                        Level: <b>{course.courseLevel}</b>
                      </p>
                    </div>
                  </div>

                  {/* ====================price==================== */}
                  <div className="flex gap-2 h-8 mt-3 sm:mt-0">
                    {course.price.map((price) => (
                      <div
                        key={price.priceId}
                        className="bg-[#FFC3CD] px-2 py-1 rounded-3xl text-[#9D1229] font-semibold text-sm sm:text-base"
                      >
                        <p>
                          {price.currency} {price.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Layout>
        </div>

        {/* ====================reviews==================== */}

        <div className="mt-10 ">
          <h4 className="text-xl text-[#45444A] font-bold">
            {detail.reviews.length} Reviews
          </h4>
          <Layout marginTop="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-12 py-8">
              {detail.reviews.map((review) => (
                <div key={review.reviewId} className="mx-4 my-4">
                  <ReviewCart data={review} />
                </div>
              ))}
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default TutorDetail;
