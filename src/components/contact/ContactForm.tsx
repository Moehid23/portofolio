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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error(err); // Use the error
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold tracking-tighter">
          Send a Message
        </h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Your Name"
              {...register("name")}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              placeholder="Subject"
              {...register("subject")}
              aria-invalid={!!errors.subject}
            />
            {errors.subject && (
              <p className="text-xs text-red-500">{errors.subject.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Textarea
              placeholder="Your Message"
              rows={5}
              {...register("message")}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button type="submit" className="w-full" isLoading={isSubmitting}>
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
            className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700 dark:border-green-900/50 dark:bg-green-900/20 dark:text-green-300"
          >
            <CheckCircle2 className="h-5 w-5" />
            <p className="text-sm font-medium">
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
