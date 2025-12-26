"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// import { db } from "@/lib/firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setError(null);
    try {
      // Add a new document with a generated id.
      // await addDoc(collection(db, "messages"), {
      //   ...data,
      //   createdAt: serverTimestamp(),
      // });

      // SIMULATION FOR STATIC BUILD
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted (Static Mode):", data);

      setIsSuccess(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Something went wrong. Please check your connection or try again later.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-lg shadow-neutral-100/50">
        <h2 className="mb-2 text-2xl font-bold tracking-tighter">
          Send a Message
        </h2>
        <p className="mb-8 text-neutral-500">
          I usually respond within 24 hours.
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Input
              placeholder="Your Name"
              {...register("name")}
              aria-invalid={!!errors.name}
              className="h-12 rounded-xl border-neutral-200 bg-neutral-50 focus:bg-white transition-all"
            />
            {errors.name && (
              <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              aria-invalid={!!errors.email}
              className="h-12 rounded-xl border-neutral-200 bg-neutral-50 focus:bg-white transition-all"
            />
            {errors.email && (
              <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              placeholder="Subject"
              {...register("subject")}
              aria-invalid={!!errors.subject}
              className="h-12 rounded-xl border-neutral-200 bg-neutral-50 focus:bg-white transition-all"
            />
            {errors.subject && (
              <p className="text-xs text-red-500 font-medium">{errors.subject.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Textarea
              placeholder="Your Message"
              rows={5}
              {...register("message")}
              aria-invalid={!!errors.message}
              className="rounded-xl border-neutral-200 bg-neutral-50 focus:bg-white transition-all resize-none"
            />
            {errors.message && (
              <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>
            )}
          </div>

          {error && <p className="text-sm text-red-500 font-medium bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}

          <Button 
            type="submit" 
            className="w-full h-14 text-lg font-medium rounded-xl bg-black hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98]" 
            isLoading={isSubmitting}
          >
            Send Message
          </Button>
        </form>
      </div>

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700 shadow-sm"
          >
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold">Message sent!</p>
              <p className="text-sm opacity-90">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
