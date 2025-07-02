import tutorPhoto from "../assets/icons/tutorPhoto.svg";
import ukFlag from "../assets/icons/ukFlag.svg"
import franceFlag from "../assets/icons/frenchFlag.svg"
import coursePicture from "../assets/images/coursePicture.svg";
import iranFlag from "../assets/icons/irFlag.svg"


export const courseMockDetail=[
    {
        id:1,
        courseId:"cr1001",
        courseTitle:"Speak English, have fun!",
        tutorId:"pt1001",
        tutorFirstName:"Charlotte",
        tutorLastName:"Watson",
        tutorPhoto:tutorPhoto,
        activeStudents:2,
        tutorSpeak:[
            {
                languageId:1,
                languageName:"English",
                languageFlag:ukFlag,
                level:"native"
            },
            {
                languageId:2,
                languageName:"French",
                languageFlag:franceFlag,
                level:"B1"
            }
        ],
        price:[
            {
                priceId:1,
                price:12.8,
                currency:"USD"
            },
            {
                priceId:2,
                price:300,
                currency:"Toman"
            }

        ],
        courseLevel:"B1",
        courseDay:"Monday",
        courseTimeStart:10,
        courseTimeEnd:11,
        courseLanguage:"English",
        courseLength:180, //lessons
        coursePicture:coursePicture,
        courseDescription:"This is a fun and interactive course designed to help you improve your English speaking skills while having a great time. Join us for engaging activities, discussions, and games that will boost your confidence and fluency in English.",
        courseDetail:"In this course, you will participate in various speaking activities, including role-plays, discussions, and games. The focus will be on improving your fluency and confidence in speaking English. You will also have the opportunity to practice your pronunciation and expand your vocabulary through fun and engaging exercises.",
        courseCapacity:20,
        courseDuration:180, // in minutes
        courseRequirements:"Basic knowledge of English (A2 level or higher) is recommended. No prior speaking experience is required.",
        courseMaterials:"All course materials will be provided online, including worksheets, videos, and interactive",

        lesson:[
            {
                lessonId:1,
                lessonTitle:"lesson 1",
                lessonPart:"vocabulary",
                lessonDocument:"../assets/doc/sampleDocLesson.pdf",
                lessonVideo:"../assets/video/sampleVocab.mp4",
                lessonDescription:"basic vocabulary ",
                homeworks:[
                    {
                    homeworkId:1,
                    homeworkTitle:"vocab",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                },
                {
                    homeworkId:2,
                    homeworkTitle:"grammar",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                }
                ]

            },

            {
                lessonId:2,
                lessonTitle:"lesson 2",
                lessonPart:"vocabulary",
                lessonDocument:"../assets/doc/sampleDocLesson.pdf",
                lessonVideo:"../assets/video/sampleVocab.mp4",
                lessonDescription:"basic vocabulary ",
                homeworks:[
                    {
                    homeworkId:1,
                    homeworkTitle:"vocab",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                },
                {
                    homeworkId:2,
                    homeworkTitle:"grammar",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                }
                ]

            }
        ],
    },

    {
        id:2,
        courseId:"cr1002",
        courseTitle:"Vocabulary Mastery",
        tutorId:"pt1001",
        tutorFirstName:"Charlotte",
        tutorLastName:"Watson",
        tutorPhoto:tutorPhoto,
        activeStudents:2,
        tutorSpeak:[
            {
                languageId:1,
                languageName:"English",
                languageFlag:ukFlag,
                level:"native"
            },
            {
                languageId:2,
                languageName:"French",
                languageFlag:franceFlag,
                level:"B1"
            }
        ],
        price:[
            {
                priceId:1,
                price:12.8,
                currency:"USD"
            },
            {
                priceId:2,
                price:300,
                currency:"Toman"
            }

        ],
        courseLevel:"B1",
        courseDay:"Monday",
        courseTimeStart:10,
        courseTimeEnd:11,
        courseLanguage:"English",
        courseLength:180, //lessons
        coursePicture:coursePicture,
        courseDescription:"This is a fun and interactive course designed to help you improve your English speaking skills while having a great time. Join us for engaging activities, discussions, and games that will boost your confidence and fluency in English.",
        courseDetail:"In this course, you will participate in various speaking activities, including role-plays, discussions, and games. The focus will be on improving your fluency and confidence in speaking English. You will also have the opportunity to practice your pronunciation and expand your vocabulary through fun and engaging exercises.",
        courseCapacity:20,
        courseDuration:180, // in minutes
        courseRequirements:"Basic knowledge of English (A2 level or higher) is recommended. No prior speaking experience is required.",
        courseMaterials:"All course materials will be provided online, including worksheets, videos, and interactive",

        lesson:[
            {
                lessonId:1,
                lessonTitle:"lesson 1",
                lessonPart:"vocabulary",
                lessonDocument:"../assets/doc/sampleDocLesson.pdf",
                lessonVideo:"../assets/video/sampleVocab.mp4",
                lessonDescription:"basic vocabulary ",
                homeworks:[
                    {
                    homeworkId:1,
                    homeworkTitle:"vocab",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                },
                {
                    homeworkId:2,
                    homeworkTitle:"grammar",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                }
                ]

            },

            {
                lessonId:2,
                lessonTitle:"lesson 2",
                lessonPart:"vocabulary",
                lessonDocument:"../assets/doc/sampleDocLesson.pdf",
                lessonVideo:"../assets/video/sampleVocab.mp4",
                lessonDescription:"basic vocabulary ",
                homeworks:[
                    {
                    homeworkId:1,
                    homeworkTitle:"vocab",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                },
                {
                    homeworkId:2,
                    homeworkTitle:"grammar",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                }
                ]

            }
        ],
    },


    {
        id:3,
        courseId:"cr1003",
        courseTitle:"Advanced English Speaking",
        tutorId:"pt1002",
        tutorFirstName:"Emily",
        tutorLastName:"Johnson",
        tutorPhoto:tutorPhoto,
        activeStudents:2,
        tutorSpeak:[
            {
                languageId:1,
                languageName:"English",
                languageFlag:ukFlag,
                level:"native"
            },
        ],
        price:[
            {
                priceId:1,
                price:12.8,
                currency:"USD"
            },
            {
                priceId:2,
                price:300,
                currency:"Toman"
            }

        ],
        courseLevel:"C1",
        courseDay:"Saturday",
        courseTimeStart:15,
        courseTimeEnd:17,
        courseLanguage:"English",
        courseLength:180, //lessons
        coursePicture:coursePicture,
        courseDescription:"This is a fun and interactive course designed to help you improve your English speaking skills while having a great time. Join us for engaging activities, discussions, and games that will boost your confidence and fluency in English.",
        courseDetail:"In this course, you will participate in various speaking activities, including role-plays, discussions, and games. The focus will be on improving your fluency and confidence in speaking English. You will also have the opportunity to practice your pronunciation and expand your vocabulary through fun and engaging exercises.",
        courseCapacity:20,
        courseDuration:180, // in minutes
        courseRequirements:"Basic knowledge of English (A2 level or higher) is recommended. No prior speaking experience is required.",
        courseMaterials:"All course materials will be provided online, including worksheets, videos, and interactive",

        lesson:[
            {
                lessonId:1,
                lessonTitle:"lesson 1",
                lessonPart:"vocabulary",
                lessonDocument:"../assets/doc/sampleDocLesson.pdf",
                lessonVideo:"../assets/video/sampleVocab.mp4",
                lessonDescription:"basic vocabulary ",
                homeworks:[
                    {
                    homeworkId:1,
                    homeworkTitle:"vocab",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                },
                {
                    homeworkId:2,
                    homeworkTitle:"grammar",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                }
                ]

            },

            {
                lessonId:2,
                lessonTitle:"lesson 2",
                lessonPart:"vocabulary",
                lessonDocument:"../assets/doc/sampleDocLesson.pdf",
                lessonVideo:"../assets/video/sampleVocab.mp4",
                lessonDescription:"basic vocabulary ",
                homeworks:[
                    {
                    homeworkId:1,
                    homeworkTitle:"vocab",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                },
                {
                    homeworkId:2,
                    homeworkTitle:"grammar",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                }
                ]

            }
        ],
    },

    {
        id:4,
        courseId:"cr1004",
        courseTitle:"Speak French Easily",
        tutorId:"pt1003",
        tutorFirstName:"Liam",
        tutorLastName:"Smith",
        tutorPhoto:tutorPhoto,
        activeStudents:2,
        tutorSpeak:[
            {
                languageId:1,
                languageName:"French",
                languageFlag:franceFlag,
                level:"native"
            },
            {
                languageId:1,
                languageName:"English",
                languageFlag:ukFlag,
                level:"B2"
            },
        ],
        price:[
            {
                priceId:1,
                price:12.8,
                currency:"USD"
            },
            {
                priceId:2,
                price:300,
                currency:"Toman"
            }

        ],
        courseLevel:"B1",
        courseDay:"Friday",
        courseTimeStart:12,
        courseTimeEnd:14,
        courseLanguage:"French",
        courseLength:30, //lessons
        coursePicture:coursePicture,
        courseDescription:"This is a fun and interactive course designed to help you improve your English speaking skills while having a great time. Join us for engaging activities, discussions, and games that will boost your confidence and fluency in English.",
        courseDetail:"In this course, you will participate in various speaking activities, including role-plays, discussions, and games. The focus will be on improving your fluency and confidence in speaking English. You will also have the opportunity to practice your pronunciation and expand your vocabulary through fun and engaging exercises.",
        courseCapacity:20,
        courseDuration:120, // in minutes
        courseRequirements:"Basic knowledge of English (A2 level or higher) is recommended. No prior speaking experience is required.",
        courseMaterials:"All course materials will be provided online, including worksheets, videos, and interactive",

        lesson:[
            {
                lessonId:1,
                lessonTitle:"lesson 1",
                lessonPart:"vocabulary",
                lessonDocument:"../assets/doc/sampleDocLesson.pdf",
                lessonVideo:"../assets/video/sampleVocab.mp4",
                lessonDescription:"basic vocabulary ",
                homeworks:[
                    {
                    homeworkId:1,
                    homeworkTitle:"vocab",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                },
                {
                    homeworkId:2,
                    homeworkTitle:"grammar",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                }
                ]

            },

            {
                lessonId:2,
                lessonTitle:"lesson 2",
                lessonPart:"vocabulary",
                lessonDocument:"../assets/doc/sampleDocLesson.pdf",
                lessonVideo:"../assets/video/sampleVocab.mp4",
                lessonDescription:"basic vocabulary ",
                homeworks:[
                    {
                    homeworkId:1,
                    homeworkTitle:"vocab",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                },
                {
                    homeworkId:2,
                    homeworkTitle:"grammar",
                    homeworkDocument:"../assets/doc/sampleDocHomework.pdf",
                }
                ]

            }
        ],
    },

    {
  id: 5,
  courseId: "cr1005",
  courseTitle: "Learn Persian Through Stories",
  tutorId: "pt1004",
  tutorFirstName: "Parisa",
  tutorLastName: "Rahnama",
  tutorPhoto: tutorPhoto,
  activeStudents: 5,
  tutorSpeak: [
    {
      languageId: 1,
      languageName: "Persian",
      languageFlag: iranFlag,
      level:"native"
    },
    {
      languageId: 2,
      languageName: "English",
      languageFlag: ukFlag,
      level:"C1"
    }
  ],
  price: [
    {
      priceId: 1,
      price: 15.0,
      currency: "USD"
    },
    {
      priceId: 2,
      price: 600,
      currency: "Toman"
    }
  ],
  courseLevel: "A2",
  courseDay: "Tuesday",
  courseTimeStart: 16,
  courseTimeEnd: 17,
  courseLanguage: "Persian",
  courseLength: 24, // lessons
  coursePicture: coursePicture,
  courseDescription: "This course introduces Persian through storytelling and real-life dialogues, helping you improve listening and speaking skills in an enjoyable and natural way.",
  courseDetail: "Each session focuses on a short story or conversation. You’ll learn practical vocabulary, common expressions, and basic grammar while exploring Persian culture. Perfect for beginners with some familiarity with the alphabet.",
  courseCapacity: 15,
  courseDuration: 60, // in minutes
  courseRequirements: "You should be able to read Persian letters and basic words.",
  courseMaterials: "Story PDFs, audio narrations, grammar tips, and short quizzes will be available online.",

  lesson: [
    {
      lessonId: 1,
      lessonTitle: "Lesson 1: My Family",
      lessonPart: "Speaking & Listening",
      lessonDocument: "../assets/doc/sampleDocLesson.pdf",
      lessonVideo: "../assets/video/sampleVocab.mp4",
      lessonDescription: "Learn how to introduce family members and describe simple relationships.",
      homeworks: [
        {
          homeworkId: 1,
          homeworkTitle: "Family Tree",
          homeworkDocument: "../assets/doc/sampleDocHomework.pdf"
        },
        {
          homeworkId: 2,
          homeworkTitle: "Listening Practice",
          homeworkDocument: "../assets/doc/sampleDocHomework.pdf"
        }
      ]
    },
    {
      lessonId: 2,
      lessonTitle: "Lesson 2: At the Market",
      lessonPart: "Vocabulary & Listening",
      lessonDocument: "../assets/doc/sampleDocLesson.pdf",
      lessonVideo: "../assets/video/sampleVocab.mp4",
      lessonDescription: "Practice shopping vocabulary and polite expressions in a bazaar setting.",
      homeworks: [
        {
          homeworkId: 1,
          homeworkTitle: "New Words",
          homeworkDocument: "../assets/doc/sampleDocHomework.pdf"
        },
        {
          homeworkId: 2,
          homeworkTitle: "Dialogue Writing",
          homeworkDocument: "../assets/doc/sampleDocHomework.pdf"
        }
      ]
    }
  ]
},


{
  id: 6,
  courseId: "cr1006",
  courseTitle: "IELTS Speaking Booster",
  tutorId: "pt1005",
  tutorFirstName: "Michael",
  tutorLastName: "Anderson",
  tutorPhoto: tutorPhoto,
  activeStudents: 1,
  tutorSpeak: [
    {
      languageId: 1,
      languageName: "English",
      languageFlag: ukFlag,
      level: "native"
    },
    {
      languageId: 2,
      languageName: "French",
      languageFlag: franceFlag,
      level: "B2"
    }
  ],
  price: [
    {
      priceId: 1,
      price: 20.0,
      currency: "USD"
    },
    {
      priceId: 2,
      price: 800,
      currency: "Toman"
    }
  ],
  courseLevel: "C1",
  courseDay: "Monday",
  courseTimeStart: 18,
  courseTimeEnd: 19,
  courseLanguage: "English",
  courseLength: 10, // lessons
  coursePicture: coursePicture,
  courseDescription: "A fast-track IELTS Speaking course designed to help intermediate and advanced learners improve fluency, accuracy, and confidence for the IELTS speaking test.",
  courseDetail: "This course focuses on the three IELTS Speaking parts through practice questions, examiner-style feedback, and fluency-building strategies. Includes weekly mock tests and vocabulary expansion.",
  courseCapacity: 10,
  courseDuration: 60, // in minutes
  courseRequirements: "Intermediate (B1+) English level and interest in IELTS preparation.",
  courseMaterials: "IELTS sample questions, feedback sheets, model answers, and vocabulary lists.",

  lesson: [
    {
      lessonId: 1,
      lessonTitle: "Lesson 1: Introduction & Part 1 Basics",
      lessonPart: "Speaking Practice",
      lessonDocument: "../assets/doc/sampleDocLesson.pdf",
      lessonVideo: "../assets/video/sampleVocab.mp4",
      lessonDescription: "Learn how to confidently answer familiar questions about yourself and your life.",
      homeworks: [
        {
          homeworkId: 1,
          homeworkTitle: "Part 1 Practice Questions",
          homeworkDocument: "../assets/doc/sampleDocHomework.pdf"
        },
        {
          homeworkId: 2,
          homeworkTitle: "Record a 2-minute speech",
          homeworkDocument: "../assets/doc/sampleDocHomework.pdf"
        }
      ]
    },
    {
      lessonId: 2,
      lessonTitle: "Lesson 2: Developing Part 2 (Cue Card)",
      lessonPart: "Fluency & Organization",
      lessonDocument: "../assets/doc/sampleDocLesson.pdf",
      lessonVideo: "../assets/video/sampleVocab.mp4",
      lessonDescription: "Understand how to structure your 2-minute response and use linking expressions.",
      homeworks: [
        {
          homeworkId: 1,
          homeworkTitle: "Cue Card – Describe a memorable trip",
          homeworkDocument: "../assets/doc/sampleDocHomework.pdf"
        },
        {
          homeworkId: 2,
          homeworkTitle: "Vocabulary Review Sheet",
          homeworkDocument: "../assets/doc/sampleDocHomework.pdf"
        }
      ]
    }
  ]
}



    

]