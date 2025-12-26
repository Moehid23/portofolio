export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  span?: string; // for masonry layout (e.g., "col-span-2 row-span-2")
}

export const galleryItems: GalleryItem[] = [
  // Row 1
  {
    id: "1",
    src: "/image-gallery/compfest-presentation.png",
    alt: "COMPFEST UI Presentation",
    category: "Event",
    span: "md:col-span-2 md:row-span-2" // 2x2
  },
  {
    id: "2",
    src: "/image-gallery/compfest-graduation.JPG",
    alt: "COMPFEST Graduation",
    category: "Event",
    span: "md:col-span-2 md:row-span-1" // 2x1
  },

  // Row 2 (Remaining 2 columns from top right)
  {
    id: "3",
    src: "/image-gallery/hackjam-2024.jpeg",
    alt: "Hackjam 2024",
    category: "Event",
    span: "md:col-span-1 md:row-span-1" // 1x1
  },
  {
    id: "4",
    src: "/image-gallery/ptsier-2025.jpeg",
    alt: "PT SIER 2025 - CleanScape VR",
    category: "VR Development",
    span: "md:col-span-1 md:row-span-1" // 1x1
  },
];