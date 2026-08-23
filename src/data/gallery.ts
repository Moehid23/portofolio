export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "Graduation" | "Academic" | "Competition" | "Community" | "Event";
  description: string;
  date: string;
  location: string;
  aspectRatio?: "portrait" | "landscape" | "square";
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "/AbdulMuhidMuthado.webp",
    alt: "Bachelor of Computer Science Graduation - Abdul Muhid Muthado",
    title: "Graduation Ceremony (Bachelor of Computer Science)",
    category: "Graduation",
    description: "Graduation ceremony celebrating the completion of my Bachelor of Computer Science (S.Kom.) in Informatics Engineering at Universitas Buana Perjuangan Karawang with a GPA of 3.80.",
    date: "2026",
    location: "Universitas Buana Perjuangan Karawang",
    aspectRatio: "portrait",
    featured: true
  },
  {
    id: "2",
    src: "/BersamaDekan.webp",
    alt: "Graduation with Dean of Computer Science Faculty - Dr. Hanny Hikmayanti Handayani, M.Kom.",
    title: "With the Dean of Computer Science Faculty",
    category: "Graduation",
    description: "Graduation photo with the Dean of the Faculty of Computer Science, Dr. Hanny Hikmayanti Handayani, M.Kom., celebrating the completion of my bachelor's degree.",
    date: "2026",
    location: "UBP Karawang",
    aspectRatio: "landscape",
    featured: true
  },
  {
    id: "3",
    src: "/BersamaKaprodi.webp",
    alt: "Graduation with Informatics Program Coordinator - Jamaludin Indra, M.Kom.",
    title: "With the Informatics Program Coordinator",
    category: "Graduation",
    description: "Graduation photo with the Coordinator of the Informatics Engineering Program, Jamaludin Indra, M.Kom., in appreciation of his academic guidance and mentorship.",
    date: "2026",
    location: "UBP Karawang",
    aspectRatio: "landscape",
    featured: true
  },
  {
    id: "4",
    src: "/wisuda.webp",
    alt: "Official Graduation Portrait",
    title: "Official Graduation Portrait",
    category: "Graduation",
    description: "Official graduation portrait for Bachelor of Computer Science in Informatics Engineering at Universitas Buana Perjuangan Karawang.",
    date: "2026",
    location: "Universitas Buana Perjuangan Karawang",
    aspectRatio: "portrait",
    featured: false
  },
  {
    id: "5",
    src: "/sidang_ta.webp",
    alt: "Undergraduate Thesis Defense",
    title: "Undergraduate Thesis Defense",
    category: "Academic",
    description: "Successful defense of my undergraduate thesis on applying Random Forest machine learning to predict spare part demand and optimize inventory.",
    date: "2026",
    location: "Faculty of Computer Science, UBP Karawang",
    aspectRatio: "landscape",
    featured: false
  },
  {
    id: "6",
    src: "/iaka_competition_2025.webp",
    alt: "IAKA Competition 2025",
    title: "IAKA Competition 2025",
    category: "Competition",
    description: "Participating in the IAKA Competition 2025, solving practical engineering problems and technical challenges.",
    date: "2025",
    location: "IAKA Arena",
    aspectRatio: "landscape",
    featured: false
  },
  {
    id: "7",
    src: "/seminar_kkn.webp",
    alt: "Community Service Seminar (KKN)",
    title: "Community Service Program (KKN)",
    category: "Community",
    description: "Presenting digital literacy initiatives and technology community development programs during the university community service (KKN) program.",
    date: "2025",
    location: "Karawang Regency",
    aspectRatio: "landscape",
    featured: false
  },
  {
    id: "8",
    src: "/clash_of_akhlak.webp",
    alt: "Clash of Akhlak Event",
    title: "Clash of Akhlak Event",
    category: "Event",
    description: "Participating in team building, leadership workshops, and collaborative culture sessions at the Clash of Akhlak corporate event.",
    date: "2024",
    location: "Peruri Corporate Center",
    aspectRatio: "landscape",
    featured: false
  },
];
