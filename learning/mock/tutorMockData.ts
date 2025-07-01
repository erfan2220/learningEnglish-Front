import iranFlag from "../assets/icons/irFlag.svg"
import tutorPhoto from "../assets/icons/tutorPhoto.svg";
import ukFlag from "../assets/icons/ukFlag.svg"
import franceFlag from "../assets/icons/frenchFlag.svg"
import certificationPic from '../assets/images/cert1.png'

export const tutorDetail=[
    {
        id:1,
        tutorId:"pt1001",
        tutorPhoto:tutorPhoto,
        role:"Professional Teacher",
        tutorFirstName:"Charlotte",
        tutorLastName:"Watson",
        country:"Iran",
        subject:"English",
        phoneNumber:"+989111111111",
        activeStudent:3,
        email:"Watson@gmail.com",
        pricePerHour:[
            {
                priceId:1,
                price:12,
                currency:"USD"
            },
            {
                priceId:2,
                price:200,
                currency:"Toman"
            }

        ],
        certification:[
            {
                certificationId:1,
                certificationTitle:"TEFL Certified",
                certificationIssueDate:"2025-01-15",
                certificationIssuer:"International TEFL Academy",
                certificationPicture:certificationPic,
            },
            {
                certificationId:2,
                certificationTitle:"CELTA Certified",
                certificationIssueDate:"2024-06-20",
                certificationIssuer:"Cambridge Assessment English",
                certificationPicture:certificationPic,

            },
            {
                certificationId:3,
                certificationTitle: "DELF B2 Certified",
                certificationIssueDate: "2024-11-15",
                certificationIssuer: "France Education International",
                certificationPicture:certificationPic,


            }
        ],
        education:[
            {
                degreeId:1,
                degree: "Bachelor's Degree",
                institutionName: "University of Tehran",
                institutionCity: "Tehran",
                institutionCountry:"Iran",
                field: "English Language Teaching",
                startDate: "2016-09-01",
                endDate: "2020-06-30"
            },
            {
                degreeId:2,
                degree: "Master's Degree",
                institutionName: "Allameh Tabataba'i University",
                location: "Tehran, Iran",
                field: "English Language Teaching",
                startDate: "2021-09-01",
                endDate: "2023-06-30"
            }

        ],
        speaks:[
            {
                languageId:1,
                language:"English",
                flag:ukFlag,
                level:"native"
            },

            {
                languageId:2,
                language:"French",
                flag:franceFlag,
                level:"B1"
            },
        ],
        introduceVideo:"../assets/video/sampleVideo.mp4",//upload introduce video
        
        personalSummary:"I am a passionate and experienced English teacher with over 5 years of teaching experience. I have a Bachelor's degree in English Language Teaching and a Master's degree in the same field. I am TEFL and CELTA certified, and I have taught students of all ages and levels, from beginners to advanced learners. My teaching style is interactive and communicative, focusing on real-life language use and practical skills.",
        classExpectations:"I am also fluent in French and Farsi, which allows me to connect with students from diverse backgrounds. I believe in creating a supportive and engaging learning environment where students feel comfortable to express themselves and make mistakes. My goal is to help students achieve their language learning goals while having fun along the way.",
        teachingStyle:"jkgkfjg",
        targetAudience:"khsjlaskd jdlsalnkjcslck ;jsalk",

        experience: [
            {
                experienceId: 1,
                experienceTitle: "English Language Instructor",
                experienceCity: "Tehran",
                experienceCountry: "Iran",
                startDate: "2019-09-01",
                endDate: "2021-06-30",
                descriptionExperience: "Taught English language courses to university students, designed lesson plans, and conducted language proficiency assessments."
            },
            {
                experienceId: 2,
                experienceTitle: "Curriculum Developer",
                experienceCity: "Tehran",
                experienceCountry: "Iran",
                startDate: "2021-08-01",
                endDate: "2023-04-15",
                descriptionExperience: "Developed English language curriculum for language institutes, collaborated with teaching staff, and incorporated modern teaching methodologies."
            }
            ],
            coursesList:["cr1001", "cr1002"],
            reviews:[
                {
                    reviewId:1,
                    reviewerName:"John",
                    reviewDate:"2024-10-01",
                    reviewText:"Charlotte is an amazing teacher! She helped me improve my English speaking skills significantly. Highly recommend her classes!",
                    rating:5
                },
                {
                    reviewId:2,
                    reviewerName:"Emily",
                    reviewDate:"2024-09-15",
                    reviewText:"I had a great experience learning with Charlotte. Her teaching style is very engaging and effective.",
                    rating:4
                }
            ],
            messagesReceives:[{
                messageId:1,
                messageSender:"st1001",
                messageText:"hi there"
            }],
            messagesSent:[{
                messageId:1,
                messageReceive:"st1001",
                messageText:"hi there"
            },
            {
                messageId:2,
                messageReceive:"st1002",
                messageText:"hi there"
            }
        
        ],

            studentLists:["st1001","st1002"]


    },


    {
    id: 2,
    tutorId: "pt1002",
    tutorPhoto: tutorPhoto,
    role: "Professional Teacher",
    tutorFirstName: "Emily",
    tutorLastName: "Johnson",
    country: "Canada",
    subject: "English",
    phoneNumber: "+989123456789",
    activeStudent: 2,
    email: "emily.johnson@gmail.com",
    pricePerHour: [
      {
        priceId: 1,
        price: 20,
        currency: "USD"
      },
      {
        priceId: 2,
        price: 800,
        currency: "Toman"
      }
    ],
    certification: [
      {
        certificationId: 1,
        certificationTitle: "TEFL Certified",
        certificationIssueDate: "2023-05-10",
        certificationIssuer: "International TEFL Academy",
        certificationPicture:certificationPic,

      },
    ],
    education: [
      {
        degreeId: 1,
        degree: "Bachelor's Degree",
        institutionName: "University of Toronto",
        institutionCity: "Toronto",
        institutionCountry: "Canada",
        field: "English Literature",
        startDate: "2015-09-01",
        endDate: "2019-06-30"
      },
      {
        degreeId: 2,
        degree: "Master's Degree",
        institutionName: "McGill University",
        location: "Montreal, Canada",
        field: "TESOL",
        startDate: "2020-09-01",
        endDate: "2022-06-30"
      }
    ],
    speaks: [
      {
        languageId: 1,
        language: "English",
        flag: ukFlag,
        level:"native"
      },
    ],
    introduceVideo: "../assets/video/sampleVideo.mp4",
    personalSummary:
      "Passionate English teacher with over 5 years of experience teaching students of all ages and backgrounds.",
    classExpectations:
      "Supportive and interactive environment with focus on speaking and real-life communication.",
    teachingStyle: "Interactive, student-centered, communicative.",
    targetAudience: "High school and university students, professionals.",
    experience: [
      {
        experienceId: 1,
        experienceTitle: "ESL Teacher",
        experienceCity: "Vancouver",
        experienceCountry: "Canada",
        startDate: "2020-01-01",
        endDate: "2022-12-31",
        descriptionExperience:
          "Taught ESL classes in private institutes and developed teaching materials."
      },
      {
        experienceId: 2,
        experienceTitle: "Online Tutor",
        experienceCity: "Remote",
        experienceCountry: "Canada",
        startDate: "2023-01-01",
        endDate: "Present",
        descriptionExperience:
          "Tutored students from around the world via online platforms with customized lesson plans."
      }
    ],
    coursesList: ["cr1003"],
    reviews: [
      {
        reviewId: 1,
        reviewerName: "Emily",
        reviewDate: "2024-11-01",
        reviewText:
          "Emily is an excellent tutor! Her lessons are fun and very helpful.",
        rating: 5
      },
      {
        reviewId: 1,
        reviewerName: "Sofia",
        reviewText: "I learned a lot, but sometimes the explanations were a bit fast for me.",
        reviewRating: 4,
        reviewDate: "2024-05-10"
      },
      
    ],

    messagesReceives:[{
        messageId:1,
        messageSender:"st1001",
        messageText:"hi there"
    },
    {
    messageId:2,
    messageSender:"st1003",
    messageText: "Sure, I’ll review it today. Thanks!"
    }

],
    messagesSent:[{
        messageId:1,
        messageReceive:"st1001",
        messageText:"hi there"
    },
    {
        messageId:2,
        messageReceive:"st1003",
        messageText: "Hola Sofia! Don’t forget to review unit 3 before tomorrow’s session."
    }
        
        ],

            studentLists:["st1001","st1002","st1003"]

  },
//////////////////////////////////////////////////////////
  {
    id: 3,
    tutorId: "pt1003",
    tutorPhoto: tutorPhoto,
    role: "Professional Teacher",
    tutorFirstName: "Liam",
    tutorLastName: "Smith",
    country: "France",
    subject: "French",
    phoneNumber: "+989122334455",
    activeStudent: 2,
    email: "liam.smith@outlook.com",
    pricePerHour: [
      {
        priceId: 1,
        price: 18,
        currency: "USD"
      },
      {
        priceId: 2,
        price: 720,
        currency: "Toman"
      }
    ],
    certification: [
      {
        certificationId: 1,
        certificationTitle: "DALF C1 Certified",
        certificationIssueDate: "2023-03-15",
        certificationIssuer: "France Éducation International",
        certificationPicture:certificationPic,
      },
      {
        certificationId: 2,
        certificationTitle: "TESOL",
        certificationIssueDate: "2022-07-20",
        certificationIssuer: "TESOL International Association",
        certificationPicture:certificationPic,
      }
    ],
    education: [
      {
        degreeId: 1,
        degree: "Bachelor's Degree",
        institutionName: "Sorbonne University",
        institutionCity: "Paris",
        institutionCountry: "France",
        field: "French Language and Literature",
        startDate: "2014-09-01",
        endDate: "2018-06-30"
      },
      {
        degreeId: 2,
        degree: "Master's Degree",
        institutionName: "University of Lyon",
        location: "Lyon, France",
        field: "Applied Linguistics",
        startDate: "2019-09-01",
        endDate: "2021-06-30"
      }
    ],
    speaks: [
      {
        languageId: 1,
        language: "French",
        flag: franceFlag,
        level:"native"
      },
      {
        languageId: 2,
        language: "English",
        flag: ukFlag,
        level:"B2"
      }
    ],
    introduceVideo: "../assets/video/sampleVideo.mp4",
    personalSummary:
      "Native French teacher with a strong background in linguistics and years of experience teaching international students.",
    classExpectations:
      "Focus on pronunciation, conversation, and grammar through real-life examples.",
    teachingStyle: "Structured, friendly, and immersive.",
    targetAudience: "Adults, college students, and DELF/DALF candidates.",
    experience: [
      {
        experienceId: 1,
        experienceTitle: "French Tutor",
        experienceCity: "Paris",
        experienceCountry: "France",
        startDate: "2020-02-01",
        endDate: "2022-12-01",
        descriptionExperience:
          "Provided one-on-one tutoring and helped students prepare for official exams."
      },
      {
        experienceId: 2,
        experienceTitle: "Online Language Coach",
        experienceCity: "Remote",
        experienceCountry: "France",
        startDate: "2023-01-01",
        endDate: "Present",
        descriptionExperience:
          "Conducted virtual lessons with interactive materials and regular feedback sessions."
      }
    ],
    coursesList: ["cr1004"],
    reviews: [
      {
        reviewId: 1,
        reviewerName: "Noah",
        reviewText: "Very kind and patient. Helped me a lot with pronunciation.",
        reviewRating: 5,
        reviewDate: "2024-03-01"
      },
      {
        reviewId: 1,
        reviewerName: "Ava",
        reviewText: "The tutor was friendly and made complex grammar topics easier to understand.",
        reviewRating: 5,
        reviewDate: "2024-06-01"
      },
      
    ],

    messagesReceives:[{
        messageId:1,
        messageSender:"st1004",
        messageText: "Hi Noah! Good job on your last assignment 🎉"
    },
    {
        messageId:2,
        messageSender:"st1004",
        messageText: "Reminder: We’ll start lesson 5 tomorrow. Please check the materials in advance."
    },
    {
        messageId:3,
        messageSender:"st1005",
        messageText: "Thanks! I’m looking forward to the review session."
    }

],
    messagesSent:[{
        messageId:1,
        messageReceive:"st1004",
         messageText: "Thank you! I enjoyed that lesson a lot."
    },
    {
        messageId:2,
        messageReceive:"st1005",
        messageText: "Great job on your homework! Let’s review it tomorrow together."
    }
        
        ],

            studentLists:["st1004","st1005"]
  },

  ////////////////////////////////////////////////////////////


  {
  id: 4,
  tutorId: "pt1004",
  tutorPhoto: tutorPhoto,
  role: "Professional Teacher",
  tutorFirstName: "Parisa",
  tutorLastName: "Rahnama",
  country: "Iran",
  subject: "Persian",
  phoneNumber: "+989123456789",
  activeStudent: 1,
  email: "parisa.rahnama@example.com",
  pricePerHour: [
    {
      priceId: 1,
      price: 12,
      currency: "USD"
    },
    {
      priceId: 2,
      price: 500,
      currency: "Toman"
    }
  ],
  certification: [
    {
      certificationId: 1,
      certificationTitle: "Advanced Persian Teaching Certificate",
      certificationIssueDate: "2021-11-20",
      certificationIssuer: "Tehran Language Institute",
      certificationPicture: certificationPic
    }
  ],
  education: [
    {
      degreeId: 1,
      degree: "Bachelor's Degree",
      institutionName: "University of Tehran",
      institutionCity: "Tehran",
      institutionCountry: "Iran",
      field: "Persian Literature",
      startDate: "2012-09-01",
      endDate: "2016-06-30"
    },
    {
      degreeId: 2,
      degree: "Master's Degree",
      institutionName: "Allameh Tabataba'i University",
      location: "Tehran, Iran",
      field: "Language Education",
      startDate: "2017-09-01",
      endDate: "2019-06-30"
    }
  ],
  speaks: [
    {
      languageId: 1,
      language: "Persian",
      flag: iranFlag,
      level:"native"
    },
    {
      languageId: 2,
      language: "English",
      flag: ukFlag,
      level:"C1"
    }
  ],
  introduceVideo: "/assets/video/sampleVideo.mp4",
  personalSummary:
    "Native Persian instructor with a passion for teaching and over 5 years of experience helping learners speak confidently.",
  classExpectations:
    "Improve your grammar, vocabulary, and speaking with structured lessons and personal feedback.",
  teachingStyle: "Friendly, supportive, and culturally immersive.",
  targetAudience: "Teens, adults, and heritage learners living abroad.",
  experience: [
    {
      experienceId: 1,
      experienceTitle: "Persian Language Teacher",
      experienceCity: "Tehran",
      experienceCountry: "Iran",
      startDate: "2019-01-01",
      endDate: "2022-09-01",
      descriptionExperience:
        "Taught Persian to non-native students and designed specialized learning materials."
    },
    {
      experienceId: 2,
      experienceTitle: "Online Persian Instructor",
      experienceCity: "Remote",
      experienceCountry: "Iran",
      startDate: "2022-10-01",
      endDate: "Present",
      descriptionExperience:
        "Conducting online classes via Zoom, with interactive assignments and personalized progress tracking."
    }
  ],
  coursesList: ["cr1005"],
  reviews: [
    {
      reviewId: 1,
      reviewerName: "Yuki",
      reviewText: "Parisa was incredibly patient and helped me improve my Persian conversation skills quickly!",
      reviewRating: 5,
      reviewDate: "2024-04-18"
    },
  ],
  messagesReceives: [
    {
      messageId: 1,
      messageSender: "st1006",
      messageText: "Thank you for the class today, I learned so many new expressions!"
    },
  ],
  messagesSent: [
    {
      messageId: 1,
      messageReceive: "st1006",
      messageText: "Hi Yuki! Don’t forget to revise the verb list for next week."
    },
  ],
  studentLists: ["st1006"]
},


{
  id: 5,
  tutorId: "pt1005",
  tutorPhoto: tutorPhoto,
  role: "Certified English Teacher",
  tutorFirstName: "Michael",
  tutorLastName: "Anderson",
  country: "Canada",
  subject: "English",
  phoneNumber: "+14165557788",
  activeStudent: 1,
  email: "michael.anderson@example.com",
  pricePerHour: [
    {
      priceId: 1,
      price: 20,
      currency: "USD"
    },
    {
      priceId: 2,
      price: 800,
      currency: "Toman"
    }
  ],
  certification: [
    {
      certificationId: 1,
      certificationTitle: "CELTA (Certificate in Teaching English to Speakers of Other Languages)",
      certificationIssueDate: "2020-04-15",
      certificationIssuer: "University of Cambridge",
      certificationPicture: certificationPic
    },
    {
      certificationId: 2,
      certificationTitle: "TESOL",
      certificationIssueDate: "2019-08-01",
      certificationIssuer: "TESOL International Association",
      certificationPicture: certificationPic
    }
  ],
  education: [
    {
      degreeId: 1,
      degree: "Bachelor's Degree",
      institutionName: "University of British Columbia",
      institutionCity: "Vancouver",
      institutionCountry: "Canada",
      field: "English Literature",
      startDate: "2010-09-01",
      endDate: "2014-06-30"
    },
    {
      degreeId: 2,
      degree: "Master's Degree",
      institutionName: "McGill University",
      location: "Montreal, Canada",
      field: "Education (TESL)",
      startDate: "2015-09-01",
      endDate: "2017-06-30"
    }
  ],
  speaks: [
    {
      languageId: 1,
      language: "English",
      flag: ukFlag,
      level: "native"
    },
    {
      languageId: 2,
      language: "French",
      flag: franceFlag,
      level: "B2"
    }
  ],
  introduceVideo: "../assets/video/sampleVideo.mp4",
  personalSummary:
    "Experienced and certified English teacher with a passion for helping students achieve fluency and confidence in everyday conversations and academic settings.",
  classExpectations:
    "Build vocabulary, refine grammar, and improve speaking and writing through interactive lessons and targeted feedback.",
  teachingStyle: "Communicative, practical, and student-centered.",
  targetAudience: "High school and university students, professionals, and IELTS candidates.",
  experience: [
    {
      experienceId: 1,
      experienceTitle: "ESL Teacher",
      experienceCity: "Toronto",
      experienceCountry: "Canada",
      startDate: "2018-01-01",
      endDate: "2021-07-01",
      descriptionExperience:
        "Taught general and academic English to international students from diverse cultural backgrounds."
    },
    {
      experienceId: 2,
      experienceTitle: "Online English Coach",
      experienceCity: "Remote",
      experienceCountry: "Canada",
      startDate: "2021-08-01",
      endDate: "Present",
      descriptionExperience:
        "Conducts personalized 1-on-1 coaching sessions with a focus on speaking, writing, and exam preparation (IELTS/TOEFL)."
    }
  ],
  coursesList: ["cr1006"],
  reviews: [
    {
      reviewId: 1,
      reviewerName: "Carlos",
      reviewText: "Michael's speaking tips helped me feel more confident for the IELTS exam.",
      reviewRating: 5,
      reviewDate: "2024-06-24"
    },
  ],
  messagesReceives: [
    {
      messageId: 1,
      messageSender: "st1007",
      messageText: "Hi Michael, I just submitted the writing task."
    },
  ],
  messagesSent: [
    
  ],
  studentLists: ["st1007"]
}








]