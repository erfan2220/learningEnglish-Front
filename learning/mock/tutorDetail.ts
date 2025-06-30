import videoPic from "../assets/images/videoPic.svg"
import tutorPhoto from "../assets/icons/tutorPhoto.svg";
import ukFlag from "../assets/icons/ukFlag.svg"
import franceFlag from "../assets/icons/frenchFlag.svg"
import irFlag from "../assets/icons/irFlag.svg"
import { start } from "repl";

export const tutorDetail=[
    // {
    //     id:1,
    //     tutorId:"pt1001",
    //     tutorPhoto:tutorPhoto,
    //     role:"Professional Teacher",
    //     tutorFirstName:"Charlotte",
    //     tutorLastName:"Watson",
    //     country:"Iran",
    //     subject:"English",
    //     phoneNumber:"+989111111111",
    //     email:"Watson@gmail.com",
    //     certification:[
    //         {
    //             certificationId:1,
    //             certificationTitle:"TEFL Certified",
    //             certificationIssueDate:"2025-01-15",
    //             certificationIssuer:"International TEFL Academy",
    //         },
    //         {
    //             certificationId:2,
    //             certificationTitle:"CELTA Certified",
    //             certificationIssueDate:"2024-06-20",
    //             certificationIssuer:"Cambridge Assessment English",
    //         },
    //         {
    //             certificationId:3,
    //             certificationTitle: "DELF B2 Certified",
    //             certificationIssueDate: "2024-11-15",
    //             certificationIssuer: "France Education International"

    //         }
    //     ],
    //     education:[
    //         {
    //             degreeId:1,
    //             degree: "Bachelor's Degree",
    //             institutionName: "University of Tehran",
    //             institutionCity: "Tehran",
    //             institutionCountry:"Iran",
    //             field: "English Language Teaching",
    //             startDate: "2016-09-01",
    //             endDate: "2020-06-30"
    //         },
    //         {
    //             degreeId:2,
    //             degree: "Master's Degree",
    //             institutionName: "Allameh Tabataba'i University",
    //             location: "Tehran, Iran",
    //             field: "English Language Teaching",
    //             startDate: "2021-09-01",
    //             endDate: "2023-06-30"
    //         }

    //     ],
    //     speaks:[
    //         {
    //             languageId:1,
    //             language:"English",
    //             flag:ukFlag
    //         },

    //         {
    //             languageId:2,
    //             language:"French",
    //             flag:franceFlag
    //         },
    //     ],
    //     introduceVideo:videoPic,//upload introduce video
        
    //     personalSummary:"I am a passionate and experienced English teacher with over 5 years of teaching experience. I have a Bachelor's degree in English Language Teaching and a Master's degree in the same field. I am TEFL and CELTA certified, and I have taught students of all ages and levels, from beginners to advanced learners. My teaching style is interactive and communicative, focusing on real-life language use and practical skills.",
    //     classExpectations:"I am also fluent in French and Farsi, which allows me to connect with students from diverse backgrounds. I believe in creating a supportive and engaging learning environment where students feel comfortable to express themselves and make mistakes. My goal is to help students achieve their language learning goals while having fun along the way.",
    //     teachingStyle:"jkgkfjg",
    //     targetAudience:"khsjlaskd jdlsalnkjcslck ;jsalk",

    //     experience: [
    //         {
    //             experienceId: 1,
    //             experienceTitle: "English Language Instructor",
    //             experienceCity: "Tehran",
    //             experienceCountry: "Iran",
    //             startDate: "2019-09-01",
    //             endDate: "2021-06-30",
    //             descriptionExperience: "Taught English language courses to university students, designed lesson plans, and conducted language proficiency assessments."
    //         },
    //         {
    //             experienceId: 2,
    //             experienceTitle: "Curriculum Developer",
    //             experienceCity: "Tehran",
    //             experienceCountry: "Iran",
    //             startDate: "2021-08-01",
    //             endDate: "2023-04-15",
    //             descriptionExperience: "Developed English language curriculum for language institutes, collaborated with teaching staff, and incorporated modern teaching methodologies."
    //         }
    //         ],
    //         coursesList:["c1001", "c1002", "c1003"],
    //         reviews:[
    //             {
    //                 reviewId:1,
    //                 reviewerName:"John Doe",
    //                 reviewDate:"2024-10-01",
    //                 reviewText:"Charlotte is an amazing teacher! She helped me improve my English speaking skills significantly. Highly recommend her classes!",
    //                 rating:5
    //             },
    //             {
    //                 reviewId:2,
    //                 reviewerName:"Jane Smith",
    //                 reviewDate:"2024-09-15",
    //                 reviewText:"I had a great experience learning with Charlotte. Her teaching style is very engaging and effective.",
    //                 rating:4.5
    //             }
    //         ],


    // },
    {
        id:1,
        name:"Harry Potter",
        role:"Professional Teacher",
        speaks:[
            {
            language:"English",
            flag:ukFlag
        },

        {
            language:"Farsi",
            flag:irFlag
        },
        ],
        price:"USD 12.8",
        introduceVideo:videoPic
    },

    {
        id:2,
        name:"Harry Potter",
        role:"Professional Teacher",
        speaks:[
            {
            language:"English",
            flag:ukFlag
        },

        {
            language:"Farsi",
            flag:irFlag
        },
        ],
        price:"USD 12.8",
        introduceVideo:videoPic
    },


    {
        id:3,
        name:"Hermione Granger",
        role:"Professional Teacher",
        speaks:[
            {
            language:"English",
            flag:ukFlag
        },

        {
            language:"Farsi",
            flag:irFlag
        },
        ],
        price:"USD 22.5",
        introduceVideo:videoPic
    },

    {
        id:4,
        name:"Draco Malfoy",
        role:"Professional Teacher",
        speaks:[
            {
            language:"English",
            flag:ukFlag
        },

        {
            language:"French",
            flag:franceFlag
        },
        ],
        price:"USD 30",
        introduceVideo:videoPic
    },

    {
        id:5,
        name:"Luna Lovegood",
        role:"Professional Teacher",
        speaks:[
            {
            language:"English",
            flag:ukFlag
        },

        {
            language:"French",
            flag:franceFlag
        },
        {
            language:"Farsi",
            flag:irFlag
        },
        ],
        price:"USD 16.8",
        introduceVideo:videoPic
    },
]