"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/Button";
import { ImagePlus } from "lucide-react";

interface ImageUploadProps {
  onUpload: (result: any) => void;
  folder?: string;
}

export function ImageUpload({ onUpload, folder = "portfolio" }: ImageUploadProps) {
  return (
    <CldUploadWidget
      uploadPreset="portfolio_preset" // We will need to create this in Cloudinary dashboard or use unsigned
      options={{
        folder: folder,
        sources: ['local', 'url', 'unsplash'],
        multiple: false,
        maxFiles: 1,
      }}
      onSuccess={(result) => {
        console.log("Upload success:", result);
        onUpload(result);
      }}
    >
      {({ open }) => {
        return (
          <Button
            type="button"
            variant="outline"
            onClick={() => open()}
            className="flex items-center gap-2 border-dashed border-2 h-32 w-full justify-center flex-col hover:bg-neutral-50 transition-all"
          >
            <ImagePlus className="h-6 w-6 text-neutral-400" />
            <span className="text-neutral-500 font-medium">Click to upload image</span>
          </Button>
        );
      }}
    </CldUploadWidget>
  );
}
