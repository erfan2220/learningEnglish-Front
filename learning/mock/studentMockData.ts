import studentPhoto from "../assets/icons/tutorPhoto.svg";
import ukFlag from "../assets/icons/ukFlag.svg"
import franceFlag from "../assets/icons/frenchFlag.svg"
import coursePicture from "../assets/images/coursePicture.svg";

export const courseDetail=[
    {
        id:1,
        studentId:"st1001",
        studentFirstName:"John",
        studentLastName:"Doe",
        studentEmail:"john@gmail.com",
        studentPhoto:studentPhoto,
        studentCountry:"USA",
        studentPhoneNumber:"+1234567890",
        studentLastDegree:"Bachelor's Degree",
        studentLastInstitution:"University of California",
        studentLastInstitutionCity:"Los Angeles",
        studentLastInstitutionCountry:"USA",
        studentField:"Computer Science",
        coursesList:["cr1001", "cr1002"],
        favoriteTutors:["pt1001", "pt1002"],
        studentEnrollmentDate:"2024-01-01",
        studentHomeworkCompleted:50, //grade
        studentHomework:[
            {
                homeworkId:1,
                homeworkTitle:"",
                homeWorkSent:"document"
            },
            {
                homeworkId:2,
                homeworkTitle:"",
                homeWorkSent:"document"
            }
        ],
        studentActiveCourses:3,
        studentActive:true,
        reviews:[
            {
                reviewId:1,
                reviewText:"This course was amazing! I learned so much and the tutor was very helpful.",
                reviewRating:5,
                reviewDate:"2024-01-15"
            },
            {
                reviewId:2,
                reviewText:"Great course, but I wish there were more interactive activities.",
                reviewRating:4,
                reviewDate:"2024-02-20"
            }
        ],


        // courseDetail:[
        //     {
        //         courseId:"cr1001",
        //         courseTitle:"Speak English, have fun!",
        //         tutorId:"pt1001",
        //         tutorFirstName:"Charlotte",
        //         tutorLastName:"Watson",
        //         tutorPhoto:studentPhoto,
        //         activeStudents:60,
        //         tutorSpeak:[
        //             {
        //                 languageId:1,
        //                 languageName:"English",
        //                 languageFlag:ukFlag
        //             },
        //             {
        //                 languageId:2,
        //                 languageName:"French",
        //                 languageFlag:franceFlag
        //             }
        //         ],
        //         price:[
        //             {
        //                 priceId:1,
        //                 price:12.8,
        //                 currency:"USD"
        //             },
        //             {
        //                 priceId:2,
        //                 price:300,
        //                 currency:"Toman"
        //             }
        //         ],
        //         courseLevel:"B1",
        //         courseDay:"Monday",
        //         courseTime:"10 am - 11 am",
        //         courseLanguage:"English",
        //         courseLength:180, //lessons
        //         coursePicture:coursePicture,
        //         courseDescription:"This is a fun and interactive course designed to help you improve your English speaking skills while having a great time. Join us for engaging activities, discussions, and games that will boost your confidence and fluency in English.",
        //         courseDetail:"In this course, you will participate in various speaking activities, including role-plays, discussions, and games. The focus will be on improving your fluency and confidence in speaking English. You will also have the opportunity to practice your pronunciation and expand your vocabulary through fun and engaging exercises.",
        //         courseCapacity:20,
        //         courseDuration:180, // in minutes
        //         courseRequirements:"Basic knowledge of English (A2 level or higher) is recommended. No prior speaking experience is required.",
        //         courseMaterials:"All course materials will be provided online, including worksheets, videos, and interactive"
        //     }
        // ]
    }
]