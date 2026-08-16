"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CheckCircle2, Send, Mail, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const formValues = watch();

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(formValues.subject || "Inquiry from Portfolio Website");
    const body = encodeURIComponent(
      `Name: ${formValues.name || ""}\nEmail: ${formValues.email || ""}\n\nMessage:\n${formValues.message || ""}`
    );
    window.location.href = `mailto:muthadoabdul23@gmail.com?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (data: ContactFormData) => {
    setError(null);
    try {
      const formData = new FormData();
      formData.append("access_key", "1dddb4e5-1881-488a-9734-a53731adead2");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("subject", `[Portfolio Inquiry] ${data.subject}`);
      formData.append("message", data.message);
      formData.append("from_name", "Portfolio Visitor");
      formData.append("replyto", data.email);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 8000);
      } else {
        // If web3forms is blocked, offer direct mailto fallback
        setError(result.message || "Failed to send online. You can send directly via your email client below.");
      }
    } catch (err) {
      console.error("Error submitting form: ", err);
      setError("Network issue. Please click 'Send via Email App' to send directly.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-neutral-200/90 bg-white p-8 shadow-xl shadow-neutral-100/70">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Send a Direct Message
          </h2>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600">
            muthadoabdul23@gmail.com
          </span>
        </div>
        <p className="mb-6 text-sm text-neutral-500">
          Messages sent through this form will be delivered directly to my personal email.
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700">Your Name</label>
            <Input
              placeholder="e.g. John Doe"
              {...register("name")}
              aria-invalid={!!errors.name}
              className="h-11 rounded-xl border-neutral-200 bg-neutral-50 focus:bg-white transition-all text-sm"
            />
            {errors.name && (
              <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700">Your Email Address</label>
            <Input
              type="email"
              placeholder="e.g. name@company.com"
              {...register("email")}
              aria-invalid={!!errors.email}
              className="h-11 rounded-xl border-neutral-200 bg-neutral-50 focus:bg-white transition-all text-sm"
            />
            {errors.email && (
              <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700">Subject</label>
            <Input
              placeholder="e.g. Project Collaboration / Job Opportunity"
              {...register("subject")}
              aria-invalid={!!errors.subject}
              className="h-11 rounded-xl border-neutral-200 bg-neutral-50 focus:bg-white transition-all text-sm"
            />
            {errors.subject && (
              <p className="text-xs text-red-500 font-medium">{errors.subject.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700">Message</label>
            <Textarea
              placeholder="Tell me about your project, timeline, or inquiry..."
              rows={4}
              {...register("message")}
              aria-invalid={!!errors.message}
              className="rounded-xl border-neutral-200 bg-neutral-50 focus:bg-white transition-all resize-none text-sm"
            />
            {errors.message && (
              <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>
            )}
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-2">
              <p className="font-medium">{error}</p>
              <button
                type="button"
                onClick={handleDirectEmail}
                className="inline-flex items-center gap-1.5 font-bold text-black underline hover:text-neutral-700"
              >
                <Mail className="h-3.5 w-3.5" /> Click here to send directly via your Mail app
              </button>
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Button 
              type="submit" 
              className="flex-1 h-12 text-base font-semibold rounded-xl bg-black hover:bg-neutral-800 text-white transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" 
              isLoading={isSubmitting}
            >
              <Send className="h-4 w-4" /> Send Message
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={handleDirectEmail}
              className="h-12 px-5 rounded-xl border-neutral-300 hover:bg-neutral-100 text-neutral-800 text-sm font-medium flex items-center gap-2"
              title="Opens your default email client (Gmail / Outlook)"
            >
              <Mail className="h-4 w-4" /> Open in Mail App
            </Button>
          </div>
        </form>
      </div>

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800 shadow-sm"
          >
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="font-bold text-sm">Message Sent Successfully!</p>
              <p className="text-xs text-green-700 mt-0.5 leading-relaxed">
                Thank you! Your message has been forwarded to <strong>muthadoabdul23@gmail.com</strong>. I will get back to you as soon as possible.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

