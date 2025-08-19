// 'use client';

// import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import {
//   Stepper,
//   Step,
//   StepLabel,
//   Button,
//   Typography,
//   Box,
//   StepConnector,
//   stepConnectorClasses,
// } from '@mui/material';
// import {
//   Check as CheckIcon,
//   Person as PersonIcon,
//   School as SchoolIcon,
//   Work as WorkIcon,
//   Email as EmailIcon,
// } from '@mui/icons-material';

// // استایل‌های سفارشی برای استپر
// const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 22,
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         'linear-gradient( 95deg, #4CAF50 0%, #8BC34A 50%, #CDDC39 100%)',
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         'linear-gradient( 95deg, #4CAF50 0%, #8BC34A 50%, #CDDC39 100%)',
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     height: 3,
//     border: 0,
//     backgroundColor: '#eaeaf0',
//     borderRadius: 1,
//   },
// }));

// const ColorlibStepIconRoot = styled('div')<{
//   ownerState: { completed?: boolean; active?: boolean };
// }>(({ theme, ownerState }) => ({
//   backgroundColor: '#ccc',
//   zIndex: 1,
//   color: '#fff',
//   width: 50,
//   height: 50,
//   display: 'flex',
//   borderRadius: '50%',
//   justifyContent: 'center',
//   alignItems: 'center',
//   ...(ownerState.active && {
//     backgroundImage:
//       'linear-gradient( 136deg, #4CAF50 0%, #8BC34A 50%, #CDDC39 100%)',
//     boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
//   }),
//   ...(ownerState.completed && {
//     backgroundImage:
//       'linear-gradient( 136deg, #4CAF50 0%, #8BC34A 50%, #CDDC39 100%)',
//   }),
// }));

// function ColorlibStepIcon(props: StepIconProps) {
//   const { active, completed, className } = props;

//   const icons: { [index: string]: React.ReactElement } = {
//     1: <PersonIcon />,
//     2: <SchoolIcon />,
//     3: <WorkIcon />,
//     4: <EmailIcon />,
//   };

//   return (
//     <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
//       {completed ? <CheckIcon /> : icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// }

// // مراحل مختلف
// const steps = [
//   {
//     label: 'اطلاعات شخصی',
//     description: 'نام و مشخصات فردی',
//   },
//   {
//     label: 'تحصیلات',
//     description: 'مدارک تحصیلی',
//   },
//   {
//     label: 'سابقه کار',
//     description: 'تجربیات کاری',
//   },
//   {
//     label: 'تماس',
//     description: 'اطلاعات ارتباطی',
//   },
// ];

// // کامپوننت اصلی فرم
// export default function MultiStepForm() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [formData, setFormData] = useState({
//     personalInfo: { firstName: '', lastName: '' },
//     education: { degree: '', university: '' },
//     experience: { company: '', position: '' },
//     contact: { email: '', phone: '' },
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   // اعتبارسنجی فرم
//   const validateCurrentStep = () => {
//     const newErrors: Record<string, string> = {};
    
//     if (activeStep === 0) {
//       if (!formData.personalInfo.firstName) newErrors.firstName = 'نام الزامی است';
//       if (!formData.personalInfo.lastName) newErrors.lastName = 'نام خانوادگی الزامی است';
//     } else if (activeStep === 1) {
//       if (!formData.education.degree) newErrors.degree = 'مدرک تحصیلی الزامی است';
//     } else if (activeStep === 3) {
//       if (!formData.contact.email) newErrors.email = 'ایمیل الزامی است';
//       else if (!/^\S+@\S+\.\S+$/.test(formData.contact.email)) {
//         newErrors.email = 'ایمیل معتبر نیست';
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // رفتن به مرحله بعد
//   const handleNext = () => {
//     if (validateCurrentStep()) {
//       setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     }
//   };

//   // برگشت به مرحله قبل
//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   // تغییر مقادیر فرم
//   const handleChange = (step: string, field: string, value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       [step]: {
//         ...prev[step as keyof typeof formData],
//         [field]: value
//       }
//     }));
//   };

//   // رندر فرم هر مرحله
//   const getStepContent = (step: number) => {
//     switch (step) {
//       case 0:
//         return (
//           <div className="space-y-4">
//             <div>
//               <label className="block mb-1">نام</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded"
//                 value={formData.personalInfo.firstName}
//                 onChange={(e) => handleChange('personalInfo', 'firstName', e.target.value)}
//               />
//               {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
//             </div>
//             <div>
//               <label className="block mb-1">نام خانوادگی</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded"
//                 value={formData.personalInfo.lastName}
//                 onChange={(e) => handleChange('personalInfo', 'lastName', e.target.value)}
//               />
//               {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
//             </div>
//           </div>
//         );
//       case 1:
//         return (
//           <div className="space-y-4">
//             <div>
//               <label className="block mb-1">مدرک تحصیلی</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded"
//                 value={formData.education.degree}
//                 onChange={(e) => handleChange('education', 'degree', e.target.value)}
//               />
//               {errors.degree && <p className="text-red-500 text-sm">{errors.degree}</p>}
//             </div>
//             <div>
//               <label className="block mb-1">دانشگاه</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded"
//                 value={formData.education.university}
//                 onChange={(e) => handleChange('education', 'university', e.target.value)}
//               />
//             </div>
//           </div>
//         );
//       case 2:
//         return (
//           <div className="space-y-4">
//             <div>
//               <label className="block mb-1">شرکت</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded"
//                 value={formData.experience.company}
//                 onChange={(e) => handleChange('experience', 'company', e.target.value)}
//               />
//             </div>
//             <div>
//               <label className="block mb-1">سمت</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded"
//                 value={formData.experience.position}
//                 onChange={(e) => handleChange('experience', 'position', e.target.value)}
//               />
//             </div>
//           </div>
//         );
//       case 3:
//         return (
//           <div className="space-y-4">
//             <div>
//               <label className="block mb-1">ایمیل</label>
//               <input
//                 type="email"
//                 className="w-full p-2 border rounded"
//                 value={formData.contact.email}
//                 onChange={(e) => handleChange('contact', 'email', e.target.value)}
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//             </div>
//             <div>
//               <label className="block mb-1">تلفن</label>
//               <input
//                 type="tel"
//                 className="w-full p-2 border rounded"
//                 value={formData.contact.phone}
//                 onChange={(e) => handleChange('contact', 'phone', e.target.value)}
//               />
//             </div>
//           </div>
//         );
//       default:
//         return 'مرحله ناشناخته';
//     }
//   };

//   return (
//     <div className="max-w-3xl my-[100px] mx-auto p-6 bg-white rounded-lg shadow-md">
//       <Stepper
//         alternativeLabel
//         activeStep={activeStep}
//         connector={<ColorlibConnector />}
//         className="mb-8"
//       >
//         {steps.map((step, index) => (
//           <Step key={step.label}>
//             <StepLabel
//               StepIconComponent={ColorlibStepIcon}
//               optional={
//                 <Typography variant="caption" className="text-gray-500">
//                   {step.description}
//                 </Typography>
//               }
//             >
//               {step.label}
//             </StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       <div className="mb-6">
//         {getStepContent(activeStep)}
//       </div>

//       <div className="flex justify-between">
//         <Button
//           variant="outlined"
//           disabled={activeStep === 0}
//           onClick={handleBack}
//           className="ml-2"
//         >
//           قبلی
//         </Button>
        
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleNext}
//         >
//           {activeStep === steps.length - 1 ? 'پایان' : 'بعدی'}
//         </Button>
//       </div>
//     </div>
//   );
// }