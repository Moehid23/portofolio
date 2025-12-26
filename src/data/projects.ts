import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "INDOJAVATRIP",
    description: "Designed and developed the official landing page for a Bromo tour and travel website, leading the UI design process in Figma through to frontend implementation.",
    shortDescription: "Tour & Travel Website Landing Page",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minimalist%20travel%20website%20landing%20page%20bromo%20mountain%20black%20and%20white&image_size=landscape_16_9",
    images: [],
    technologies: ["Next.js", "Tailwind CSS", "Figma", "TypeScript"],
    category: "Web",
    featured: true,
    date: "2024-12"
  },
  {
    id: "2",
    title: "EduTech Platform",
    description: "Built the complete frontend interface for a university E-Learning platform, focusing on responsive UI design and modular learning components.",
    shortDescription: "E-Learning Platform Interface",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=E-learning%20platform%20dashboard%20clean%20ui%20minimalist&image_size=landscape_16_9",
    images: [],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    category: "Web",
    featured: true,
    date: "2024-12"
  },
  {
    id: "3",
    title: "SEA Catering",
    description: "Developed for the COMPFEST17 Academy, implementing JWT token authentication and a Stripe payment gateway microservice.",
    shortDescription: "Catering Service Platform",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Catering%20service%20website%20minimalist%20food%20display&image_size=landscape_16_9",
    images: [],
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Stripe"],
    category: "Web",
    featured: true,
    date: "2025-09"
  },
  {
    id: "4",
    title: "Cleanscape VR",
    description: "Built a VR-based learning medium using Next.js (React) and A-Frame, creating a virtual simulation of the PT IPAL SIER wastewater treatment plant.",
    shortDescription: "VR Wastewater Treatment Simulation",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=VR%20simulation%20interface%20industrial%20plant%20minimalist&image_size=landscape_16_9",
    images: [],
    technologies: ["Next.js", "React", "A-Frame", "VR"],
    category: "Other",
    featured: true,
    date: "2025-09"
  },
  {
    id: "5",
    title: "CalTrack",
    description: "Developed an AI-powered mobile application for nutrition and calorie tracking with Gemini AI integration for intelligent food recommendations.",
    shortDescription: "AI Nutrition Tracker Mobile App",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Mobile%20app%20nutrition%20tracker%20clean%20ui&image_size=landscape_16_9",
    images: [],
    technologies: ["Flutter", "Gemini AI", "Firebase", "Dart"],
    category: "Mobile",
    featured: false,
    date: "2024-08"
  },
  {
    id: "6",
    title: "GatotKota",
    description: "A public infrastructure reporting platform utilizing Next.js, Tailwind, and Leaflet for mapping functionalities.",
    shortDescription: "Infrastructure Reporting Platform",
    image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Map%20based%20reporting%20platform%20interface%20minimalist&image_size=landscape_16_9",
    images: [],
    technologies: ["Next.js", "Tailwind CSS", "Leaflet"],
    category: "Web",
    featured: false,
    date: "2025-09"
  }
];
