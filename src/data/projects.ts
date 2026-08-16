import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "maps",
    title: "MAPS",
    description: "Industrial web application system designed for machinery and utility maintenance management, featuring end-to-end workflows for Preventive Maintenance (PM) scheduling and Unplanned Maintenance resolution to maximize equipment uptime.",
    shortDescription: "Machinery & Utilities Maintenance Management (Preventive & Unplanned)",
    image: "/image-project/MAPS/1.png",
    images: [
      "/image-project/MAPS/1.png",
      "/image-project/MAPS/2.png",
      "/image-project/MAPS/3.png",
      "/image-project/MAPS/4.png",
      "/image-project/MAPS/5.png",
      "/image-project/MAPS/6.png"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    categories: ["Web"],
    featured: true,
    date: "2025"
  },
  {
    id: "sinotis",
    title: "Sinotis",
    description: "Specialized real-time tracking platform for unplanned maintenance that accurately calculates each stage duration: notification creation time, technician response time, spare part waiting time, technician multi-tasking duration, through to final resolution.",
    shortDescription: "Real-Time Unplanned Maintenance & Response Time Analytics",
    image: "/image-project/Sinotis/1.png",
    images: [
      "/image-project/Sinotis/1.png",
      "/image-project/Sinotis/2.png",
      "/image-project/Sinotis/3.png",
      "/image-project/Sinotis/5.png",
      "/image-project/Sinotis/6.png"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Real-Time Tracking", "Bootstrap"],
    categories: ["Web"],
    featured: true,
    date: "2025"
  },
  {
    id: "sipena",
    title: "Sipena",
    description: "Digital engineering and estimation system built to calculate and automate AHSP (Analisis Harga Satuan Pekerjaan) requirements, material cost breakdowns, labor rates, and unit price analysis digitally.",
    shortDescription: "Digital AHSP (Analisis Harga Satuan Pekerjaan) Calculation System",
    image: "/image-project/Sipena/1.png",
    images: [
      "/image-project/Sipena/1.png",
      "/image-project/Sipena/2.png",
      "/image-project/Sipena/3.png",
      "/image-project/Sipena/4.png",
      "/image-project/Sipena/5.png",
      "/image-project/Sipena/6.png"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    categories: ["Web"],
    featured: true,
    date: "2025"
  },
  {
    id: "survey",
    title: "Survey Renovation System",
    description: "Comprehensive digital survey application for recording user renovation requirements, equipped with online product catalog recommendations and cryptographic security for legally verified digital signatures.",
    shortDescription: "Renovation Assessment, Online Catalog & Cryptographic Signature",
    image: "/image-project/Survey/1.png",
    images: [
      "/image-project/Survey/1.png",
      "/image-project/Survey/2.png",
      "/image-project/Survey/3.png",
      "/image-project/Survey/4.png",
      "/image-project/Survey/5.png",
      "/image-project/Survey/6.png",
      "/image-project/Survey/7.png",
      "/image-project/Survey/8.png",
      "/image-project/Survey/9.png",
      "/image-project/Survey/10.png",
      "/image-project/Survey/11.png"
    ],
    technologies: ["React", "Node.js", "Cryptography / Digital Signature", "PostgreSQL", "Tailwind CSS"],
    categories: ["Web"],
    featured: true,
    date: "2026"
  },
  {
    id: "komodo",
    title: "Komodo App (Digital STO)",
    description: "Android mobile application tailored for tablet devices and integrated hardware barcode scanners to conduct digital Stock Take Opname (STO), warehouse inventory scanning, and real-time stock reconciliation.",
    shortDescription: "Android Mobile App for Digital STO (Stock Take Opname) & Barcode Scanning",
    image: "/image-project/komodo/1.jpeg",
    images: [
      "/image-project/komodo/1.jpeg",
      "/image-project/komodo/2.jpeg",
      "/image-project/komodo/3.jpeg",
      "/image-project/komodo/4.jpeg",
      "/image-project/komodo/5.jpeg",
      "/image-project/komodo/6.jpeg",
      "/image-project/komodo/7.jpeg",
      "/image-project/komodo/8.jpeg",
      "/image-project/komodo/9.jpeg"
    ],
    technologies: ["Android", "Flutter / Kotlin", "Barcode Scanner SDK", "Tablet UI/UX", "Firebase"],
    categories: ["Mobile"],
    featured: true,
    date: "2026"
  },
  {
    id: "skripsi",
    title: "Sistem Prediksi Spare Part (Skripsi)",
    description: "Penerapan Machine Learning algoritma Random Forest untuk prediksi kebutuhan pemesanan spare part dalam pencegahan overstock dan understock pada sistem inventaris industri.",
    shortDescription: "Random Forest Machine Learning for Spare Part Inventory Prediction",
    image: "/image-project/skripsi/1.png",
    images: [
      "/image-project/skripsi/1.png",
      "/image-project/skripsi/2.png",
      "/image-project/skripsi/3.png",
      "/image-project/skripsi/4.png",
      "/image-project/skripsi/5.png",
      "/image-project/skripsi/6.png",
      "/image-project/skripsi/7.png"
    ],
    technologies: ["Python", "Flask", "Random Forest", "Scikit-Learn", "Tableau / Power BI"],
    categories: ["Web", "Other"],
    featured: true,
    date: "2026"
  }
];

