import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Software Engineering COMPFEST17 Academy SEA Certification",
    company: "Indonesia University",
    location: "Jakarta, Indonesia",
    startDate: "2025-08",
    endDate: "2025-09",
    current: false,
    description: [
      "Selected as one of the top 20 participants from 4,000 applicants (Top 0.5%) for an intensive software engineering academy.",
      "Achieved \"Best Case Study Team\" award for the \"SEA Catering\" project.",
      "Developed the \"SEA Catering\" case study using Next.js, Supabase, and Tailwind, implementing JWT token authentication and a Stripe payment gateway microservice.",
      "Designed and developed the \"GatotKota\" project, a public infrastructure reporting platform, utilizing Next.js, Tailwind, and Leaflet for mapping functionalities."
    ]
  },
  {
    id: "2",
    title: "Fullstack Developer",
    company: "Semeton Corp Student Freelance Team",
    location: "Malang, Indonesia",
    startDate: "2025-09",
    current: true,
    description: [
      "Collaborated as part of a student-led freelance team to design, develop, and deliver technical solutions for clients.",
      "Entrusted with the full-stack development of \"Cleanscape VR,\" managing the entire project lifecycle from initial 360-degree image capture to final development.",
      "Built the VR-based learning medium using Next.js (React) and A-Frame, successfully creating a virtual simulation of the PT IPAL SIER wastewater treatment plant for Environmental Engineering students."
    ]
  },
  {
    id: "3",
    title: "Mobile Developer (Hacker Division)",
    company: "RAION (Student Community)",
    location: "Brawijaya University",
    startDate: "2024-01",
    endDate: "2025-07",
    current: false,
    description: [
      "Contributed to 'Lawmate', an AI-powered legal assistance app, building and integrating cross-platform UI/UX features using Flutter.",
      "Developed core features for 'Coinvest', an educational crypto market simulation app, utilizing native Android development with Kotlin."
    ]
  },
  {
    id: "4",
    title: "Frontend Developer",
    company: "UNIKAHIDHA",
    location: "Brawijaya University",
    startDate: "2024-01",
    current: true,
    description: [
      "Served as a Frontend Developer for the organization's official website (unikahidha.ub.ac.id), responsible for development and maintenance using React.js, Inertia.js, and Laravel.",
      "Focused on developing new features while optimizing website performance and user experience for members."
    ]
  },
  {
    id: "5",
    title: "Fullstack Developer",
    company: "Klinik Bayu & Klinik Made Warti",
    location: "Indonesia",
    startDate: "2025-02",
    current: true,
    description: [
      "Led the mobile-first frontend development for 'Klinik Bayu', a digital medical record application, using Next.js and collaborating closely with backend developers to integrate APIs.",
      "Designed and built a complete web-based medical record system for 'Made Warti Clinic' using Laravel (PHP), delivering patient management, treatment history, and an admin control panel."
    ]
  },
  {
    id: "6",
    title: "Fullstack Mobile Developer",
    company: "CalTrack (AI Nutrition Tracker)",
    location: "Remote",
    startDate: "2024-06",
    endDate: "2024-08",
    current: false,
    description: [
      "Developed an AI-powered mobile application for nutrition and calorie tracking, building both the frontend (Flutter) and backend (Firebase).",
      "Successfully integrated the Gemini AI API to provide users with intelligent food recommendations."
    ]
  }
];
