"use client";

import { useState } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { Plus, LogOut, LayoutDashboard, Image as ImageIcon } from "lucide-react";
import { ImageUpload } from "@/components/ui/ImageUpload";
// import { CldImage } from "next-cloudinary";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'projects' | 'gallery'>('projects');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleLogout = async () => {
    // await signOut(auth);
    router.push("/admin");
  };

  const handleUploadSuccess = (result: any) => {
    // result.info contains the image data
    // result.info.secure_url is the HTTPS URL
    // result.info.public_id is the ID for CldImage
    console.log("Uploaded:", result.info);
    setUploadedImage(result.info.secure_url);
    alert("Image uploaded successfully! URL: " + result.info.secure_url);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Sidebar / Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-black text-white flex items-center justify-center font-bold">W</div>
            <span className="text-xl font-bold tracking-tight">Admin Console</span>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-100"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </nav>

      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-neutral-500">Manage your portfolio content</p>
          </div>
        </div>

        {/* Quick Upload Test */}
        <div className="mb-12 p-6 bg-white rounded-3xl border border-neutral-100 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Quick Upload Test</h2>
          <div className="max-w-md">
            <ImageUpload onUpload={handleUploadSuccess} />
            
            {uploadedImage && (
              <div className="mt-4">
                <p className="text-sm text-green-600 font-medium mb-2">Upload Successful!</p>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-200">
                  {/* Using standard img tag for preview to ensure it works immediately */}
                  <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-neutral-400 mt-2 break-all">{uploadedImage}</p>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-neutral-200 mb-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-4 py-3 font-medium text-sm transition-all border-b-2 ${
              activeTab === 'projects' 
                ? 'border-black text-black' 
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <LayoutDashboard className="h-4 w-4" />
            Projects
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-2 px-4 py-3 font-medium text-sm transition-all border-b-2 ${
              activeTab === 'gallery' 
                ? 'border-black text-black' 
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <ImageIcon className="h-4 w-4" />
            Gallery
          </button>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-full py-12 text-center rounded-3xl border border-dashed border-neutral-300 bg-neutral-50">
            <p className="text-neutral-500">
              Content management coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
