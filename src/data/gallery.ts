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
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    alt: "Strategic Planning",
    category: "Work",
    span: "md:col-span-2 md:row-span-2" // 2x2
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    alt: "Office Setup",
    category: "Workspace",
    span: "md:col-span-2 md:row-span-1" // 2x1
  },
  
  // Row 2 (Remaining 2 columns from top right)
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    alt: "Team Collaboration",
    category: "Community",
    span: "md:col-span-1 md:row-span-1" // 1x1
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    alt: "Meeting",
    category: "Culture",
    span: "md:col-span-1 md:row-span-1" // 1x1
  },

  // Row 3
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
    alt: "Development",
    category: "Tech",
    span: "md:col-span-1 md:row-span-1" // 1x1
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    alt: "Creative Brainstorming",
    category: "Innovation",
    span: "md:col-span-2 md:row-span-1" // 2x1
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    alt: "Design Process",
    category: "Design",
    span: "md:col-span-1 md:row-span-1" // 1x1
  }
];