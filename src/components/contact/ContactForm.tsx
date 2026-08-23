"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { 
  CheckCircle2, 
  Send, 
  Mail, 
  ArrowUpRight, 
  Copy, 
  Check, 
  MapPin, 
  ExternalLink 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("muthadoabdul23@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const onSubmit = async (data: ContactFormData) => {
    setLastSubmittedData(data);
    try {
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

      handleOpenGmail(data);
      setIsSuccess(true);
      reset();
    } catch {
      handleOpenMailApp(data);
      setIsSuccess(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-neutral-200/90 shadow-xl shadow-neutral-100/70 p-5 sm:p-7 md:p-8 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Col: Direct Channels (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4 border-b lg:border-b-0 lg:border-r border-neutral-200/80 pb-6 lg:pb-0 lg:pr-8">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
              Let&apos;s Connect
            </h3>

            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Reach out for technical collaborations, engineering opportunities, or general inquiries.
            </p>
          </div>

          {/* Quick Channels */}
          <div className="space-y-2 pt-2">
            {/* Email Box */}
            <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-neutral-400 font-semibold flex items-center gap-1">
                  <Mail className="h-3 w-3" /> Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-[10px] font-semibold text-neutral-600 hover:text-black transition-colors flex items-center gap-1"
                >
                  {emailCopied ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3 text-neutral-400" />}
                  <span>{emailCopied ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <p className="text-xs font-bold text-neutral-900 truncate">
                muthadoabdul23@gmail.com
              </p>
            </div>

            {/* LinkedIn & Instagram with Local SVGs */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://www.linkedin.com/in/abdul-muhid-muhthado-964b951a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/70 hover:bg-white hover:border-neutral-300 hover:shadow-xs transition-all text-xs font-semibold text-neutral-800 group"
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                    className="h-4 w-4 object-contain shrink-0"
                  />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.instagram.com/abdullmoehid_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/70 hover:bg-white hover:border-neutral-300 hover:shadow-xs transition-all text-xs font-semibold text-neutral-800 group"
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={16}
                    height={16}
                    className="h-4 w-4 object-contain shrink-0"
                  />
                  <span>Instagram</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs text-neutral-600">
              <MapPin className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
              <span className="truncate">Karawang, West Java, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Right Col: Instant Message Form (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-neutral-700">Your Name</label>
                <Input
                  placeholder="e.g. John Doe"
                  {...register("name")}
                  aria-invalid={!!errors.name}
                  className="h-9 rounded-lg border-neutral-200 bg-neutral-50 focus:bg-white text-xs"
                />
                {errors.name && (
                  <p className="text-[10px] text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-neutral-700">Your Email</label>
                <Input
                  type="email"
                  placeholder="name@company.com"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                  className="h-9 rounded-lg border-neutral-200 bg-neutral-50 focus:bg-white text-xs"
                />
                {errors.email && (
                  <p className="text-[10px] text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-neutral-700">Subject</label>
              <Input
                placeholder="Project Collaboration / Inquiry"
                {...register("subject")}
                aria-invalid={!!errors.subject}
                className="h-9 rounded-lg border-neutral-200 bg-neutral-50 focus:bg-white text-xs"
              />
              {errors.subject && (
                <p className="text-[10px] text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-neutral-700">Message</label>
              <Textarea
                placeholder="Write your message here..."
                rows={3}
                {...register("message")}
                aria-invalid={!!errors.message}
                className="rounded-lg border-neutral-200 bg-neutral-50 focus:bg-white resize-none text-xs"
              />
              {errors.message && (
                <p className="text-[10px] text-red-500">{errors.message.message}</p>
              )}
            </div>

            <div className="pt-1 flex flex-col sm:flex-row gap-2">
              <Button
                type="submit"
                className="flex-1 h-10 text-xs font-semibold rounded-lg bg-black hover:bg-neutral-800 text-white flex items-center justify-center gap-2"
                isLoading={isSubmitting}
              >
                <Send className="h-3.5 w-3.5" /> Send Message
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => handleOpenGmail()}
                className="h-10 px-3.5 rounded-lg border-neutral-300 hover:bg-neutral-100 text-neutral-800 text-xs font-medium flex items-center gap-1.5"
                title="Compose directly in Gmail"
              >
                <ExternalLink className="h-3.5 w-3.5 text-red-500" /> Open in Gmail
              </Button>
            </div>
          </form>

          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs flex items-center gap-2"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Message prepared &amp; forwarded to <strong>muthadoabdul23@gmail.com</strong>!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
