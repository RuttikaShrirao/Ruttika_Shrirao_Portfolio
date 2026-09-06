"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun, FileText } from "lucide-react";
import { useTheme } from "next-themes";
import { PERSONAL } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Avatar() {
  const initials = PERSONAL.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
      style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ paddingTop: scrolled ? "10px" : "20px" }}
      >
        <div className="container-lg">
          <div
            className="nav-pill rounded-2xl px-4 py-2.5 flex items-center justify-between"
            style={{
              boxShadow: scrolled ? "0 4px 24px rgba(79, 70, 229, 0.1)" : "none",
            }}
          >
            {/* Left: Brand */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              id="nav-brand"
            >
              <Avatar />
              <span
                className="font-heading font-bold text-sm hidden sm:block"
                style={{ color: "var(--text-primary)" }}
              >
                {PERSONAL.firstName}
                <span className="text-gradient-accent"> Shrirao</span>
              </span>
            </Link>

            {/* Center: Nav links pill */}
            <nav className="hidden md:flex items-center gap-1 p-1 rounded-2xl" style={{ backgroundColor: "var(--bg-secondary)" }}>
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    id={`nav-${link.label.toLowerCase()}`}
                    className="relative px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      color: isActive ? "white" : "var(--text-secondary)",
                      backgroundColor: isActive ? "var(--accent)" : "transparent",
                    }}
                    onClick={() => setActive(link.href.slice(1))}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: Theme + CTA */}
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-secondary)",
                  }}
                  aria-label="Toggle theme"
                  id="nav-theme-toggle"
                >
                  {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                </button>
              )}
              <a
                href={PERSONAL.resumeUrl}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                  color: "white",
                  boxShadow: "0 2px 12px rgba(79, 70, 229, 0.3)",
                }}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-resume"
              >
                <FileText size={13} />
                Resume
              </a>
              <button
                className="md:hidden w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-secondary)" }}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                id="nav-mobile-open"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              style={{ backgroundColor: "rgba(15, 23, 42, 0.5)" }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col p-6"
              style={{ backgroundColor: "var(--bg-card)", borderLeft: "1px solid var(--border)" }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Avatar />
                  <span className="font-heading font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                    {PERSONAL.firstName} <span className="text-gradient-accent">Shrirao</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-muted)" }}
                  id="nav-mobile-close"
                >
                  <X size={16} />
                </button>
              </div>
              <nav className="flex flex-col gap-2 flex-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      color: active === link.href.slice(1) ? "var(--accent)" : "var(--text-secondary)",
                      backgroundColor: active === link.href.slice(1) ? "var(--accent-bg)" : "transparent",
                    }}
                    onClick={() => { setActive(link.href.slice(1)); setMobileOpen(false); }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href={PERSONAL.resumeUrl}
                className="btn-primary justify-center mt-4"
                target="_blank"
                rel="noopener noreferrer"
                id="nav-mobile-resume"
              >
                <FileText size={14} />
                Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
