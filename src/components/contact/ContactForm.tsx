"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CheckCircle2, Send, Mail, ArrowUpRight, Copy, ExternalLink, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<ContactFormData | null>(null);

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

  const getEmailBody = (data: Partial<ContactFormData>) => {
    return `Hello Abdul Muhid,\n\n${data.message || ""}\n\n---\nSender Details:\nName: ${data.name || ""}\nEmail: ${data.email || ""}`;
  };

  const handleOpenGmail = (data?: ContactFormData) => {
    const d = data || formValues;
    const subject = encodeURIComponent(d.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(getEmailBody(d));
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=muthadoabdul23@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  const handleOpenMailApp = (data?: ContactFormData) => {
    const d = data || formValues;
    const subject = encodeURIComponent(d.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(getEmailBody(d));
    window.location.href = `mailto:muthadoabdul23@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopyMessage = () => {
    if (!lastSubmittedData) return;
    const text = `To: muthadoabdul23@gmail.com\nSubject: ${lastSubmittedData.subject}\n\n${getEmailBody(lastSubmittedData)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (data: ContactFormData) => {
    setLastSubmittedData(data);
    
    // Automatically trigger preferred mail client / compose window
    try {
      // 1. Try sending via FormSubmit as background webhook
      fetch(`https://formsubmit.co/ajax/muthadoabdul23@gmail.com`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          _subject: `[Portfolio Inquiry] ${data.subject}`,
          message: data.message,
          _replyto: data.email,
        }),
      }).catch(() => {});

      // 2. Open Gmail / mail client directly so the message is guaranteed to reach the user
      handleOpenGmail(data);

      setIsSuccess(true);
      reset();
    } catch {
      handleOpenMailApp(data);
      setIsSuccess(true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-xl shadow-neutral-100/70">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
            Send a Direct Message
          </h2>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            muthadoabdul23@gmail.com
          </span>
        </div>
        <p className="mb-6 text-xs sm:text-sm text-neutral-500">
          Fill out the form below to send an email inquiry directly to my personal inbox.
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

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Button 
              type="submit" 
              className="flex-1 h-12 text-sm sm:text-base font-semibold rounded-xl bg-black hover:bg-neutral-800 text-white transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" 
              isLoading={isSubmitting}
            >
              <Send className="h-4 w-4" /> Send Message
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenGmail()}
              className="h-12 px-4 rounded-xl border-neutral-300 hover:bg-neutral-100 text-neutral-800 text-xs sm:text-sm font-medium flex items-center gap-2"
              title="Compose directly in Gmail"
            >
              <ExternalLink className="h-4 w-4 text-red-500" /> Open Gmail
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
            className="flex flex-col gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/90 p-5 text-emerald-950 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm text-emerald-900">Inquiry Prepared &amp; Sent!</p>
                <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                  Your message has been directed to <strong>muthadoabdul23@gmail.com</strong>. If your email app hasn&apos;t opened automatically, you can choose an option below:
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-emerald-200/80">
              <button
                type="button"
                onClick={() => handleOpenGmail(lastSubmittedData || undefined)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Open in Gmail
              </button>

              <button
                type="button"
                onClick={() => handleOpenMailApp(lastSubmittedData || undefined)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100 text-xs font-semibold transition-colors"
              >
                <Mail className="h-3.5 w-3.5" /> Open in Mail App
              </button>

              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100 text-xs font-semibold transition-colors"
              >
                <Copy className="h-3.5 w-3.5" /> {copied ? "Copied!" : "Copy Message"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

