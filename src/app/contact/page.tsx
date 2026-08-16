import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Abdul Muhid Muthado",
  description: "Get in touch with Abdul Muhid Muthado for engineering opportunities, projects, or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navigation />
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
      </div>

      <main className="flex-1 pt-32 pb-24 relative z-10">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Left Column: Sticky Contact Info */}
            <div className="lg:col-span-5 relative">
               <div className="lg:sticky lg:top-32">
                 <div className="mb-12">
                   <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                     Let's talk.
                   </h1>
                   <p className="text-xl text-neutral-500 leading-relaxed">
                     Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
                   </p>
                 </div>
                 <ContactInfo />
               </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
               <ContactForm />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
