import { Container } from "./Container";
import { SocialLinks } from "@/components/home/SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-100 bg-white py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
           <div className="flex flex-col gap-2 items-center md:items-start">
             <span className="text-lg font-bold">Wira.</span>
             <p className="text-sm text-neutral-500 text-center md:text-left">
               &copy; {currentYear} Personal Website. <br className="hidden md:block" />
               Built with Next.js & Tailwind.
             </p>
           </div>
           
           <div className="flex flex-col items-center gap-4 md:items-end">
              <SocialLinks />
           </div>
        </div>
      </Container>
    </footer>
  );
}
