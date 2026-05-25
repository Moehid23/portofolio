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
    src: "/image-gallery/placeholder-1.png",
    alt: "Gallery Image Placeholder 1",
    category: "Category Placeholder",
    span: "md:col-span-2 md:row-span-2" // 2x2
  },
  {
    id: "2",
    src: "/image-gallery/placeholder-2.png",
    alt: "Gallery Image Placeholder 2",
    category: "Category Placeholder",
    span: "md:col-span-2 md:row-span-1" // 2x1
  },

  // Row 2
  {
    id: "3",
    src: "/image-gallery/placeholder-3.png",
    alt: "Gallery Image Placeholder 3",
    category: "Category Placeholder",
    span: "md:col-span-1 md:row-span-1" // 1x1
  },
  {
    id: "4",
    src: "/image-gallery/placeholder-4.png",
    alt: "Gallery Image Placeholder 4",
    category: "Category Placeholder",
    span: "md:col-span-1 md:row-span-1" // 1x1
  },
];
