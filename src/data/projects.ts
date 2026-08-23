import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "maps",
    title: "MAPS",
    description: "An industrial web application designed to manage machinery and utility maintenance, featuring workflows for scheduling preventive maintenance and logging unplanned repairs to keep equipment running smoothly.",
    shortDescription: "Machinery and utility maintenance management system for industrial operations.",
    image: "/image-project/MAPS/1.webp",
    images: [
      "/image-project/MAPS/1.webp",
      "/image-project/MAPS/2.webp",
      "/image-project/MAPS/3.webp",
      "/image-project/MAPS/4.webp",
      "/image-project/MAPS/5.webp",
      "/image-project/MAPS/6.webp"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    categories: ["Web"],
    featured: true,
    date: "2025"
  },
  {
    id: "sinotis",
    title: "Sinotis",
    description: "A real-time tracking application for unplanned maintenance. It tracks technician response times, parts waiting time, and task durations from issue report to final resolution.",
    shortDescription: "Real-time maintenance tracking and response time analytics.",
    image: "/image-project/Sinotis/1.webp",
    images: [
      "/image-project/Sinotis/1.webp",
      "/image-project/Sinotis/2.webp",
      "/image-project/Sinotis/3.webp",
      "/image-project/Sinotis/5.webp",
      "/image-project/Sinotis/6.webp"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Real-Time Tracking", "Bootstrap"],
    categories: ["Web"],
    featured: true,
    date: "2025"
  },
  {
    id: "sipena",
    title: "Sipena",
    description: "A cost estimation web app that calculates unit price analysis (AHSP), material cost breakdowns, and labor rates for construction and engineering projects.",
    shortDescription: "Digital unit price analysis (AHSP) and cost calculation system.",
    image: "/image-project/Sipena/1.webp",
    images: [
      "/image-project/Sipena/1.webp",
      "/image-project/Sipena/2.webp",
      "/image-project/Sipena/3.webp",
      "/image-project/Sipena/4.webp",
      "/image-project/Sipena/5.webp",
      "/image-project/Sipena/6.webp"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    categories: ["Web"],
    featured: true,
    date: "2025"
  },
  {
    id: "survey",
    title: "Survey Renovation System",
    description: "A digital survey platform for recording building renovation requirements, featuring an online product catalog and digital signature verification.",
    shortDescription: "Renovation survey platform with online catalog and digital signatures.",
    image: "/image-project/Survey/1.webp",
    images: [
      "/image-project/Survey/1.webp",
      "/image-project/Survey/2.webp",
      "/image-project/Survey/3.webp",
      "/image-project/Survey/4.webp",
      "/image-project/Survey/5.webp",
      "/image-project/Survey/6.webp",
      "/image-project/Survey/7.webp",
      "/image-project/Survey/8.webp",
      "/image-project/Survey/9.webp",
      "/image-project/Survey/10.webp",
      "/image-project/Survey/11.webp"
    ],
    technologies: ["React", "Node.js", "Digital Signature", "PostgreSQL", "Tailwind CSS"],
    categories: ["Web"],
    featured: true,
    date: "2026"
  },
  {
    id: "komodo",
    title: "Komodo App (Digital STO)",
    description: "An Android application designed for tablets and barcode scanners to manage warehouse stock taking (Stock Take Opname) and real-time inventory counts.",
    shortDescription: "Android tablet app for warehouse stock taking and barcode scanning.",
    image: "/image-project/komodo/1.webp",
    images: [
      "/image-project/komodo/1.webp",
      "/image-project/komodo/2.webp",
      "/image-project/komodo/3.webp",
      "/image-project/komodo/4.webp",
      "/image-project/komodo/5.webp",
      "/image-project/komodo/6.webp",
      "/image-project/komodo/7.webp",
      "/image-project/komodo/8.webp",
      "/image-project/komodo/9.webp"
    ],
    technologies: ["Android", "Flutter / Kotlin", "Barcode Scanner SDK", "Tablet UI/UX", "Firebase"],
    categories: ["Mobile"],
    featured: true,
    date: "2026"
  },
  {
    id: "skripsi",
    title: "Sistem Prediksi Spare Part (Skripsi)",
    description: "A machine learning application using the Random Forest algorithm to forecast spare part ordering demand and prevent inventory overstock and understock.",
    shortDescription: "Random Forest machine learning model for spare part inventory prediction.",
    image: "/image-project/skripsi/1.webp",
    images: [
      "/image-project/skripsi/1.webp",
      "/image-project/skripsi/2.webp",
      "/image-project/skripsi/3.webp",
      "/image-project/skripsi/4.webp",
      "/image-project/skripsi/5.webp",
      "/image-project/skripsi/6.webp",
      "/image-project/skripsi/7.webp"
    ],
    technologies: ["Python", "Flask", "Random Forest", "Scikit-Learn", "Tableau / Power BI"],
    categories: ["Web", "Other"],
    featured: true,
    date: "2026"
  }
];

