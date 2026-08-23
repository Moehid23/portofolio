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
    alt: "Wisuda Sarjana Komputer - Abdul Muhid Muthado",
    title: "Graduation Ceremony (Wisuda S.Kom)",
    category: "Graduation",
    description: "Momen wisuda kelulusan Sarjana Komputer (S.Kom.) Program Studi Teknik Informatika, Fakultas Ilmu Komputer, Universitas Buana Perjuangan Karawang dengan IPK 3.80.",
    date: "2026",
    location: "Universitas Buana Perjuangan Karawang",
    aspectRatio: "portrait",
    featured: true
  },
  {
    id: "2",
    src: "/BersamaDekan.webp",
    alt: "Wisuda Bersama Dekan Fakultas Ilmu Komputer - Dr. Hanny Hikmayanti Handayani, M.Kom.",
    title: "Bersama Dekan FASILKOM",
    category: "Graduation",
    description: "Momen wisuda bersama Dekan Fakultas Ilmu Komputer Universitas Buana Perjuangan Karawang, Dr. Hanny Hikmayanti Handayani, M.Kom., merayakan keberhasilan penyelesaian studi sarjana.",
    date: "2026",
    location: "UBP Karawang",
    aspectRatio: "landscape",
    featured: true
  },
  {
    id: "3",
    src: "/BersamaKaprodi.webp",
    alt: "Wisuda Bersama Kaprodi Teknik Informatika - Jamaludin Indra, M.Kom.",
    title: "Bersama Koordinator Prodi TI",
    category: "Graduation",
    description: "Foto wisuda bersama Koordinator Program Studi Teknik Informatika UBP Karawang, Jamaludin Indra, M.Kom., atas bimbingan dan dukungan akademis selama perkuliahan.",
    date: "2026",
    location: "UBP Karawang",
    aspectRatio: "landscape",
    featured: true
  },
  {
    id: "4",
    src: "/wisuda.webp",
    alt: "Graduation Portrait Sarjana Komputer",
    title: "Official Graduation Portrait",
    category: "Graduation",
    description: "Potret resmi wisuda Sarjana Komputer (S.Kom.) Teknik Informatika Universitas Buana Perjuangan Karawang.",
    date: "2026",
    location: "Universitas Buana Perjuangan Karawang",
    aspectRatio: "portrait",
    featured: false
  },
  {
    id: "5",
    src: "/sidang_ta.webp",
    alt: "Sidang & Seminar Skripsi (Thesis Defense)",
    title: "Undergraduate Thesis Defense",
    category: "Academic",
    description: "Sidang dan seminar proposal skripsi penelitian Machine Learning Random Forest untuk prediksi kebutuhan pemesanan spare part dalam pencegahan overstock dan understock.",
    date: "2026",
    location: "Fakultas Ilmu Komputer, UBP Karawang",
    aspectRatio: "landscape",
    featured: false
  },
  {
    id: "6",
    src: "/iaka_competition_2025.webp",
    alt: "IAKA Competition 2025",
    title: "IAKA Competition 2025",
    category: "Competition",
    description: "Partisipasi dan pemecahan tantangan rekayasa teknologi dan presisi industri pada ajang kompetisi IAKA 2025.",
    date: "2025",
    location: "IAKA Arena",
    aspectRatio: "landscape",
    featured: false
  },
  {
    id: "7",
    src: "/seminar_kkn.webp",
    alt: "Seminar Program KKN (Kuliah Kerja Nyata)",
    title: "Community Engagement (KKN)",
    category: "Community",
    description: "Pemaparan program digitalisasi teknologi dan pengabdian masyarakat pada seminar penutupan Kuliah Kerja Nyata (KKN).",
    date: "2025",
    location: "Kabupaten Karawang",
    aspectRatio: "landscape",
    featured: false
  },
  {
    id: "8",
    src: "/clash_of_akhlak.webp",
    alt: "Clash of Akhlak Event",
    title: "Clash of Akhlak Event",
    category: "Event",
    description: "Partisipasi dalam team building, workshop kepemimpinan, dan sharing session budaya kerja BUMN pada acara Clash of Akhlak.",
    date: "2024",
    location: "Peruri Corporate Center",
    aspectRatio: "landscape",
    featured: false
  },
];
