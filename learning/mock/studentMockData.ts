import studentPhoto from "../assets/icons/tutorPhoto.svg";

export const studentDetail=[
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
        coursesList:["cr1001", "cr1003"],
        favoriteTutors:["pt1001", "pt1002","pt1003","pt1004"],
        studentEnrollmentDate:"2024-01-01",
        studentHomeworkCompleted:[
            {
                gradeId:1,
                courseId:"cr1001",
                grade:30
            },
            {
                gradeId:2,
                courseId:"cr1003",
                grade:70
            }
        ],
        studentHomework:[
            {
                homeworkId:1,
                homeworkTitle:"",
                homeWorkSent:"../assets/doc/sampleHomeworkSent.pdf"
            },
            {
                homeworkId:2,
                homeworkTitle:"",
                homeWorkSent:"../assets/doc/sampleHomeworkSent.pdf"
            }
        ],
        studentActiveCourses:3,
        studentActive:true,
        reviews:[
            {
                reviewId:2,
                reviewFor:"pt1001",
                reviewDate:"2024-09-15",
                reviewText:"I had a great experience learning with Charlotte. Her teaching style is very engaging and effective.",
                rating:4
            },
            {
                reviewId: 1,
                reviewFor:"pt1002",
                reviewDate: "2024-11-01",
                reviewText:
                "Emily is an excellent tutor! Her lessons are fun and very helpful.",
                rating: 5
            },
        ],
        messagesReceives:[{
                messageId:1,
                messageSender:"pt1001",
                messageText:"hi there"
            }],
        messagesSent:[{
                messageId:1,
                messageReceive:"pt1001",
                messageText:"hi there"
            },
            {
                messageId:2,
                messageReceive:"pt1002",
                messageText:"hi there"
            },
        
        ]
    },

    {
    id: 2,
    studentId: "st1002",
    studentFirstName: "Emily",
    studentLastName: "Smith",
    studentEmail: "emilysmith@example.com",
    studentPhoto: studentPhoto,
    studentCountry: "UK",
    studentPhoneNumber: "+447912345678",
    studentLastDegree: "Master's Degree",
    studentLastInstitution: "University of Oxford",
    studentLastInstitutionCity: "Oxford",
    studentLastInstitutionCountry: "UK",
    studentField: "Linguistics",
    coursesList: ["cr1002", "cr1003"],
    favoriteTutors: ["pt1001","pt1002"],
    studentEnrollmentDate: "2024-03-12",
    studentHomeworkCompleted:[
            {
                gradeId:1,
                courseId:"cr1002",
                grade:70
            },
            {
                gradeId:2,
                courseId:"cr1003",
                grade:90
            }
        ],
    studentHomework: [
        {
            homeworkId: 1,
            homeworkTitle: "",
            homeWorkSent: "/assets/sampleHomeworkSent.pdf"
        },
        {
            homeworkId: 2,
            homeworkTitle: "",
            homeWorkSent: "/assets/sampleHomeworkSent.pdf"
        }
    ],
    studentActiveCourses: 2,
    studentActive: true,
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
        messagesReceives:[{
                messageId:1,
                messageSender:"pt1001",
                messageText:"hi there"
            }],
        messagesSent:[{
                messageId:1,
                messageReceive:"pt1001",
                messageText:"hi there"
            },
            {
                messageId:2,
                messageReceive:"pt1002",
                messageText:"hi there"
            },
        
        ]
},

{
    id: 3,
    studentId: "st1003",
    studentFirstName: "Sofia",
    studentLastName: "Martinez",
    studentEmail: "sofia.martinez@example.com",
    studentPhoto: studentPhoto,
    studentCountry: "Spain",
    studentPhoneNumber: "+34911222333",
    studentLastDegree: "Bachelor's Degree",
    studentLastInstitution: "Universidad Complutense de Madrid",
    studentLastInstitutionCity: "Madrid",
    studentLastInstitutionCountry: "Spain",
    studentField: "Education",
    coursesList: ["cr1002", "cr1004"],
    favoriteTutors: ["pt1002", "pt1004"],
    studentEnrollmentDate: "2024-04-01",
    studentHomeworkCompleted:[
            {
                gradeId:1,
                courseId:"cr1002",
                grade:80
            },
            {
                gradeId:2,
                courseId:"cr1004",
                grade:100
            }
        ],
    studentHomework: [
        {
            homeworkId: 1,
            homeworkTitle: "Grammar Practice - Week 1",
            homeWorkSent: "/assets/sampleHomeworkSent.pdf"
        },
        {
            homeworkId: 2,
            homeworkTitle: "Speaking Task - Video Submission",
            homeWorkSent: "/assets/sampleHomeworkSent.pdf"
        }
    ],
    studentActiveCourses: 2,
    studentActive: true,
    reviews: [
        {
            reviewId: 1,
            reviewFor:"pt1002",
            reviewText: "The course materials were very organized and the tutor encouraged everyone to participate.",
            reviewRating: 5,
            reviewDate: "2024-04-15"
        },
        {
            reviewId: 2,
            reviewFor:"pt1004",
            reviewText: "I learned a lot, but sometimes the explanations were a bit fast for me.",
            reviewRating: 4,
            reviewDate: "2024-05-10"
        }
    ],
    messagesReceives: [
        {
            messageId: 1,
            messageSender: "pt1002",
            messageText: "Hola Sofia! Don’t forget to review unit 3 before tomorrow’s session."
        },
        {
            messageId: 2,
            messageSender: "pt1004",
            messageText: "Hi! Please upload your video assignment by tonight."
        }
    ],
    messagesSent: [
        {
            messageId: 1,
            messageReceive: "pt1002",
            messageText: "Sure, I’ll review it today. Thanks!"
        },
        {
            messageId: 2,
            messageReceive: "pt1004",
            messageText: "Just uploaded it. Let me know if it worked!"
        }
    ]
},

{
    id: 4,
    studentId: "st1004",
    studentFirstName: "Noah",
    studentLastName: "Kim",
    studentEmail: "noah.kim@example.com",
    studentPhoto: studentPhoto,
    studentCountry: "South Korea",
    studentPhoneNumber: "+821012345678",
    studentLastDegree: "Bachelor's Degree",
    studentLastInstitution: "Seoul National University",
    studentLastInstitutionCity: "Seoul",
    studentLastInstitutionCountry: "South Korea",
    studentField: "English Literature",
    coursesList: ["cr1004"],
    favoriteTutors: ["pt1003"],
    studentEnrollmentDate: "2023-02-10",
    studentHomeworkCompleted:[
            {
                gradeId:1,
                courseId:"cr1004",
                grade:85
            },
        ],
    studentHomework: [
        {
            homeworkId: 1,
            homeworkTitle: "Essay Writing Practice",
            homeWorkSent: "/assets/sampleHomeworkSent.pdf"
        },
        {
            homeworkId: 2,
            homeworkTitle: "Listening Comprehension",
            homeWorkSent: "/assets/sampleHomeworkSent.pdf"
        }
    ],
    studentActiveCourses: 2,
    studentActive: true,
    reviews: [
        {
            reviewId: 1,
            reviewFor: "pt1003",
            reviewText: "Very kind and patient. Helped me a lot with pronunciation.",
            reviewRating: 5,
            reviewDate: "2024-03-01"
        },
        
    ],
    messagesSent: [
        {
            messageId: 1,
            messageSender: "pt1003",
            messageText: "Hi Noah! Good job on your last assignment 🎉"
        },
        {
            messageId: 2,
            messageSender: "pt1003",
            messageText: "Reminder: We’ll start lesson 5 tomorrow. Please check the materials in advance."
        }
    ],
    messagesReceives: [
        {
            messageId: 1,
            messageReceive: "pt1003",
            messageText: "Thank you! I enjoyed that lesson a lot."
        },
        {
            messageId: 2,
            messageReceive: "pt1003",
            messageText: "Got it! I’ll be ready."
        }
    ],
},

{
    id: 5,
    studentId: "st1005",
    studentFirstName: "Ava",
    studentLastName: "Müller",
    studentEmail: "ava.mueller@example.com",
    studentPhoto: studentPhoto,
    studentCountry: "Germany",
    studentPhoneNumber: "+4915123456789",
    studentLastDegree: "Master's Degree",
    studentLastInstitution: "Humboldt University of Berlin",
    studentLastInstitutionCity: "Berlin",
    studentLastInstitutionCountry: "Germany",
    studentField: "Translation Studies",
    coursesList: ["cr1004", "cr1005"],
    favoriteTutors: ["pt1002"],
    studentEnrollmentDate: "2024-05-05",
    studentHomeworkCompleted:[
            {
                gradeId:1,
                courseId:"cr1004",
                grade:70
            },
            {
                gradeId:2,
                courseId:"cr1005",
                grade:80
            }
        ],
    studentHomework: [
        {
            homeworkId: 1,
            homeworkTitle: "Translation Task - Idioms",
            homeWorkSent: "/assets/sampleHomeworkSent.pdf"
        },
        {
            homeworkId: 2,
            homeworkTitle: "Grammar Review Worksheet",
            homeWorkSent: "/assets/sampleHomeworkSent.pdf"
        }
    ],
    studentActiveCourses: 1,
    studentActive: true,
    reviews: [
        {
            reviewId: 1,
            reviewFor: "pt1003",
            reviewText: "The tutor was friendly and made complex grammar topics easier to understand.",
            reviewRating: 5,
            reviewDate: "2024-06-01"
        },
        {
            reviewId: 2,
            reviewFor: "pt1005",
            reviewText: "The course was good, but I would have liked more speaking practice.",
            reviewRating: 4,
            reviewDate: "2024-06-22"
        }
    ],
    messagesReceives: [
        {
            messageId: 1,
            messageSender: "pt1003",
            messageText: "Great job on your homework! Let’s review it tomorrow together."
        },
        {
            messageId: 2,
            messageSender: "pt1004",
            messageText: "Please check the updated schedule for next week."
        }
    ],
    messagesSent: [
        {
            messageId: 1,
            messageReceive: "pt1003",
            messageText: "Thanks! I’m looking forward to the review session."
        },
        {
            messageId: 2,
            messageReceive: "pt1004",
            messageText: "Got the new schedule. See you then!"
        }
    ]
},


{
    id: 6,
    studentId: "st1006",
    studentFirstName: "Yuki",
    studentLastName: "Tanaka",
    studentEmail: "yuki.tanaka@example.jp",
    studentPhoto: studentPhoto,
    studentCountry: "Japan",
    studentPhoneNumber: "+819012345678",
    studentLastDegree: "Bachelor's Degree",
    studentLastInstitution: "Tokyo University of Foreign Studies",
    studentLastInstitutionCity: "Tokyo",
    studentLastInstitutionCountry: "Japan",
    studentField: "Language Education",
    coursesList: ["cr1005"],
    favoriteTutors: ["pt1003", "pt1004"],
    studentEnrollmentDate: "2024-04-10",
    studentHomeworkCompleted:[
            {
                gradeId:1,
                courseId:"cr1005",
                grade:40
            },
        ],
    studentHomework: [
        {
            homeworkId: 1,
            homeworkTitle: "Listening Comprehension Exercise",
            homeWorkSent: "/assets/sampleHomeworkSent.pdf"
        },
        {
            homeworkId: 2,
            homeworkTitle: "Cultural Essay on Iran",
            homeWorkSent: "/assets/sampleHomeworkSent.pdf"
        }
    ],
    studentActiveCourses: 2,
    studentActive: true,
    reviews: [
        {
            reviewId: 1,
            reviewFor: "pt1004",
            reviewText: "Parisa was incredibly patient and helped me improve my Persian conversation skills quickly!",
            reviewRating: 5,
            reviewDate: "2024-04-18"
        },
    ],
    messagesReceives: [
        {
            messageId: 1,
            messageSender: "pt1004",
            messageText: "Hi Yuki! Don’t forget to revise the verb list for next week."
        },
    ],
    messagesSent: [
        {
            messageId: 2,
            messageReceive: "pt1004",
            messageText: "Thank you for the class today, I learned so many new expressions!"
        }
    ]
},

{
  id: 7,
  studentId: "st1007",
  studentFirstName: "Carlos",
  studentLastName: "Ramírez",
  studentEmail: "carlos.ramirez@example.mx",
  studentPhoto: studentPhoto,
  studentCountry: "Mexico",
  studentPhoneNumber: "+525512345678",
  studentLastDegree: "Bachelor's Degree",
  studentLastInstitution: "National Autonomous University of Mexico",
  studentLastInstitutionCity: "Mexico City",
  studentLastInstitutionCountry: "Mexico",
  studentField: "International Relations",
  coursesList: ["cr1006"],
  favoriteTutors: ["pt1001","pt1003","pt1004","pt1005"],
  studentEnrollmentDate: "2024-06-10",
  studentHomeworkCompleted:[
            {
                gradeId:1,
                courseId:"cr1006",
                grade:90
            },
        ],
  studentHomework: [
    {
      homeworkId: 1,
      homeworkTitle: "IELTS Speaking Part 2 Practice",
      homeWorkSent: "/assets/sampleHomeworkSent.pdf"
    },
    {
      homeworkId: 2,
      homeworkTitle: "Vocabulary Log – Week 1",
      homeWorkSent: "/assets/sampleHomeworkSent.pdf"
    }
  ],
  studentActiveCourses: 1,
  studentActive: true,
  reviews: [
    {
      reviewId: 1,
      reviewFor: "pt1005",
      reviewText: "Michael's speaking tips helped me feel more confident for the IELTS exam.",
      reviewRating: 5,
      reviewDate: "2024-06-24"
    }
  ],
  messagesReceives: [
   
  ],
  messagesSent: [
    {
      messageId: 1,
      messageReceive: "pt1005",
      messageText: "Hi Michael, I just submitted the writing task."
    }
  ]
}




]