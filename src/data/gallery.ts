export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  description?: string;
  date?: string;
  location?: string;
  span?: string; // for masonry layout (e.g., "col-span-2 row-span-2")
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "/wisuda.webp",
    alt: "Graduation Ceremony (Wisuda Sarjana Komputer)",
    category: "Graduation",
    description: "Official graduation ceremony celebrating the completion of Bachelor of Computer Science (S.Kom.) in Informatics Engineering at Universitas Buana Perjuangan Karawang with a GPA of 3.80.",
    date: "2026",
    location: "Universitas Buana Perjuangan Karawang",
    span: "md:col-span-2 md:row-span-2" // Featured 2x2
  },
  {
    id: "2",
    src: "/sidang_ta.webp",
    alt: "Bachelor Thesis Defense & Seminar (Sidang & Sempro)",
    category: "Academic Achievement",
    description: "Successful defense of the undergraduate thesis research titled 'Penerapan Random Forest Untuk Prediksi Pemesanan Spare Part Dalam Pencegahan Overstock Dan Understock'.",
    date: "2026",
    location: "Faculty of Computer Science, UBP Karawang",
    span: "md:col-span-2 md:row-span-1" // 2x1 layout
  },
  {
    id: "3",
    src: "/iaka_competition_2025.webp",
    alt: "IAKA Competition 2025",
    category: "Competition",
    description: "Participating and demonstrating technical competence, precision problem solving, and innovative solutions at the IAKA Competition 2025.",
    date: "2025",
    location: "IAKA Arena",
    span: "md:col-span-2 md:row-span-1" // 2x1 layout
  },
  {
    id: "4",
    src: "/seminar_kkn.webp",
    alt: "Community Engagement & Social Work Seminar (Seminar KKN)",
    category: "Community Engagement",
    description: "Presenting technological community development programs, digital literacy initiatives, and social service projects during the University Social Work program (KKN).",
    date: "2025",
    location: "Karawang Regency",
    span: "md:col-span-2 md:row-span-1" // 2x1 layout
  },
  {
    id: "5",
    src: "/clash_of_akhlak.webp",
    alt: "Clash of Akhlak Event",
    category: "Corporate Event",
    description: "Participating in corporate culture building, collaborative leadership exercises, and knowledge-sharing sessions during the Clash of Akhlak event.",
    date: "2024",
    location: "Peruri / Corporate Center",
    span: "md:col-span-2 md:row-span-1" // 2x1 layout
  },
];
