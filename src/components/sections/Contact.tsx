"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PERSONAL } from "@/lib/data";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    id: "contact-email",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/ruttikashrirao/",
    href: PERSONAL.linkedin,
    id: "contact-linkedin",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "https://github.com/RuttikaShrirao",
    href: PERSONAL.github,
    id: "contact-github",
  },
  {
    icon: MapPin,
    label: "Location",
    value: PERSONAL.location,
    href: null,
    id: "contact-location",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSending(true);
    // Simulate send — replace with Formspree, EmailJS, or server action
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              eyebrow="Contact"
              title="Let's Build Something Great"
            />
            <p
              className="text-base leading-relaxed mb-10 -mt-6"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m open to opportunities where I can contribute to
              meaningful products, solve challenging engineering problems, and
              grow as a Full Stack Engineer. Whether you have a role in mind, a
              project to discuss, or just want to connect — reach out.
            </p>

            <div className="space-y-4">
              {CONTACT_LINKS.map((link) => {
                const Icon = link.icon;
                const content = (
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "var(--bg-card)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "var(--accent-bg)",
                        color: "var(--accent-light)",
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {link.label}
                      </p>
                      <p
                        className="text-sm font-medium mt-0.5 break-all sm:break-normal"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {link.value}
                      </p>
                    </div>
                  </div>
                );

                return link.href ? (
                  <a
                    key={link.id}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity"
                    id={link.id}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={link.id}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card rounded-2xl p-5 sm:p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(34,197,94,0.1)" }}
                >
                  <Check size={28} style={{ color: "#22c55e" }} />
                </div>
                <h3
                  className="font-heading font-bold text-xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-secondary text-sm mt-2"
                  id="contact-send-another"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h3
                  className="font-heading font-bold text-lg mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Send a Message
                </h3>

                <FormField
                  label="Name"
                  id="contact-form-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                <FormField
                  label="Email"
                  id="contact-form-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                <div>
                  <label
                    htmlFor="contact-form-message"
                    className="block text-xs font-semibold mb-2 uppercase tracking-wide"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-form-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm resize-none outline-none transition-all duration-200"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                    required
                    aria-required="true"
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-400">{error}</p>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-3.5 text-base"
                  disabled={sending}
                  id="contact-form-submit"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      Send Message
                    </span>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                  I typically respond within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  autoComplete,
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold mb-2 uppercase tracking-wide"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          color: "var(--text-primary)",
        }}
        required
        aria-required="true"
      />
    </div>
  );
}
