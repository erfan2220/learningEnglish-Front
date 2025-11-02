root/
├── .gitignore
├── .env
├── .components.json
├── eslint.config.mjs
├── middleware.ts
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
│
├── app/                            # Next.js App Router root
│   ├── [lang]/                     # (i18n planned) dynamic language segment
│   ├── Articles/                   # Articles / Blog section
│   ├── cart/                       # Shopping cart
│   ├── contactUs/                  # Contact page
│   ├── courses/                    # Courses list or course details
│   ├── dashboard/                  # User dashboard (protected)
│   ├── FAQ/                        # Frequently Asked Questions
│   ├── forgotPassword/             # Password reset page
│   ├── languageTest/               # Language proficiency test
│   ├── policy/                     # Privacy policy
│   ├── serviceTerms/               # Terms of service
│   ├── signin/                     # Sign-in page
│   ├── signupStudent/              # Student registration
│   ├── signupTutor/                # Tutor registration
│   ├── tutor/                      # Tutor public page / list
│   ├── tutorAuthentication/        # Tutor auth and verification
│   │
│   ├── globals.css                 # Global styles
│   ├── icon.png                    # App icon / favicon
│   ├── layout.tsx                  # Root layout (Header, Footer, Providers)
│   ├── page.tsx                    # Landing page (Home)
│   └── providers.tsx               # Global context providers (Redux, etc.)
│
├── assets/                         # Local images, icons, fonts (imported in code)
│
├── components/                     # Reusable UI components
│   ├── Button/
│   ├── FeatureItemLandingPage/
│   ├── Footer/
│   ├── Header/
│   ├── Layout/
│   ├── Slide/
│   ├── TutorialStep/
│   └── LandingPage/
│
├── constant/                       # Static data & config (display texts, arrays)
│   ├── becomeTutor.ts
│   ├── features.ts
│   ├── stepsData.ts
│   └── ...
│
├── hooks/                          # Custom React hooks (useAuth, useFetch, etc.)
│
├── lib/                            # Shared utilities & helpers
│   ├── api.ts                      # Axios instance + interceptors
│   └── ...
│
├── mock/                           # Mock data for testing / local dev
│
├── model/                          # TypeScript types & interfaces
│   └── (e.g. user.ts, course.ts)
│
├── public/                         # Public static assets (served as /images, /favicon)
│   ├── images/
│   ├── favicon.ico
│   └── ...
│
├── routes/                         # Centralized route constants
│   └── routes.ts
│
└── services/                       # API services calling backend endpoints
    ├── userService.ts
    ├── authService.ts
    └── ...
