import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Removed Title & Desc because they are now in the page layout */}
      
      <div className="grid gap-4">
        <a 
          href="mailto:anakwirayudha@gmail.com" 
          className="group flex items-center gap-5 p-5 rounded-2xl bg-neutral-50 border border-neutral-100 transition-all hover:bg-white hover:shadow-lg hover:shadow-neutral-200/40 hover:-translate-y-0.5"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-neutral-100 shadow-sm text-black group-hover:scale-110 transition-transform duration-300">
            <Mail className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">Email</p>
            <p className="text-base font-bold text-neutral-900 truncate">anakwirayudha@gmail.com</p>
          </div>
          <div className="h-8 w-8 rounded-full bg-white border border-neutral-100 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
             <ArrowUpRight className="h-4 w-4 text-black" />
          </div>
        </a>



        <div className="group flex items-center gap-5 p-5 rounded-2xl bg-neutral-50 border border-neutral-100 transition-all hover:bg-white hover:shadow-lg hover:shadow-neutral-200/40 hover:-translate-y-0.5 cursor-default">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-neutral-100 shadow-sm text-black group-hover:scale-110 transition-transform duration-300">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">Location</p>
            <p className="text-base font-bold text-neutral-900">Malang, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
