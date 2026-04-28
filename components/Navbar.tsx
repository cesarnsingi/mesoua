"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "./LangContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#sistemas", label: t("Sistemas", "Systems") },
    { href: "#plataforma", label: t("Plataforma", "Platform") },
    { href: "#industrias", label: t("Indústrias", "Industries") },
    { href: "#noticias", label: t("Notícias", "Newsroom") },
    { href: "#contacto", label: t("Contacto", "Contact") },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-white/[0.06] bg-black/95 backdrop-blur-sm" : ""
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0">
            <span className="font-condensed font-900 text-[22px] tracking-[0.25em] text-white uppercase leading-none">
              MESO
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* Lang toggle */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLang("pt")}
                className={`lang-btn ${lang === "pt" ? "text-white" : "text-white/30"}`}
              >
                PT
              </button>
              <span className="text-white/20 text-xs">/</span>
              <button
                onClick={() => setLang("en")}
                className={`lang-btn ${lang === "en" ? "text-white" : "text-white/30"}`}
              >
                EN
              </button>
            </div>

            <a href="#contacto" className="btn-outline hidden lg:inline-block">
              {t("Falar Connosco", "Talk to Us")}
            </a>

            {/* Mobile burger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                className="block w-5 h-px bg-white origin-center"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="block w-5 h-px bg-white"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                className="block w-5 h-px bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-14 left-0 right-0 z-40 bg-black border-b border-white/10"
          >
            <nav className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMenuOpen(false)}
                  className="font-condensed text-xl font-600 tracking-[0.12em] uppercase text-white/60 hover:text-white transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
