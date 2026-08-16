import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Removed Title & Desc because they are now in the page layout */}
      
        <a
          href="mailto:muthadoabdul23@gmail.com"
          className="group flex items-center gap-5 p-5 rounded-2xl bg-neutral-50 border border-neutral-100 transition-all hover:bg-white hover:shadow-lg hover:shadow-neutral-200/40 hover:-translate-y-0.5"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-neutral-100 shadow-sm text-black group-hover:scale-110 transition-transform duration-300">
            <Mail className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">Direct Email</p>
            <p className="text-base font-bold text-neutral-900 truncate">muthadoabdul23@gmail.com</p>
          </div>
          <div className="h-8 w-8 rounded-full bg-white border border-neutral-100 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
             <ArrowUpRight className="h-4 w-4 text-black" />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/abdul-muhid-muhthado-964b951a3/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 p-5 rounded-2xl bg-neutral-50 border border-neutral-100 transition-all hover:bg-white hover:shadow-lg hover:shadow-neutral-200/40 hover:-translate-y-0.5"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-neutral-100 shadow-sm text-blue-600 group-hover:scale-110 transition-transform duration-300">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63a1.63 1.63 0 0 0 1.63 1.63c.9 0 1.63-.73 1.63-1.63a1.63 1.63 0 0 0-1.63-1.63Z"/></svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">LinkedIn Profile</p>
            <p className="text-base font-bold text-neutral-900 truncate">Abdul Muhid Muthado</p>
          </div>
          <div className="h-8 w-8 rounded-full bg-white border border-neutral-100 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
             <ArrowUpRight className="h-4 w-4 text-black" />
          </div>
        </a>

        <a
          href="https://www.instagram.com/abdullmoehid_/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 p-5 rounded-2xl bg-neutral-50 border border-neutral-100 transition-all hover:bg-white hover:shadow-lg hover:shadow-neutral-200/40 hover:-translate-y-0.5"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-neutral-100 shadow-sm text-pink-600 group-hover:scale-110 transition-transform duration-300">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">Instagram DM</p>
            <p className="text-base font-bold text-neutral-900 truncate">@abdullmoehid_</p>
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
            <p className="text-base font-bold text-neutral-900">Karawang, West Java, Indonesia</p>
          </div>
        </div>
    </div>
  );
}
