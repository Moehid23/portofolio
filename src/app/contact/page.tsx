import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Modern Personal Website",
  description: "Get in touch with me for collaborations or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <Container>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tighter md:text-5xl">
              Contact Me
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              Have a project in mind or want to collaborate? Send me a message.
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
