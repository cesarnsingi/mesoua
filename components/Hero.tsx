"use client";
import { motion } from "framer-motion";
import { useLang } from "./LangContext";

export default function Hero() {
  const { lang, t } = useLang();

  return (
    <section className="relative min-h-screen bg-black flex flex-col overflow-hidden">
      {/* News ticker bar at top — like Terra */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 border-b border-white/10 bg-black"
      >
        <div className="max-w-[1400px] mx-auto px-6 h-10 flex items-center gap-6 overflow-hidden">
          <span className="label flex-shrink-0 text-white/40">
            {t("ÚLTIMO", "LATEST")}
          </span>
          <div className="overflow-hidden flex-1">
            <div className="marquee-inner flex gap-16 whitespace-nowrap">
              {[
                t(
                  "MESO desenvolve a primeira fábrica de drones em Angola — 50.000 sistemas por ano até 2028",
                  "MESO develops Angola's first drone factory — 50,000 systems per year by 2028"
                ),
                t(
                  "Parceria estratégica com o Ministério dos Recursos Minerais de Angola",
                  "Strategic partnership with Angola's Ministry of Mineral Resources"
                ),
                t(
                  "MESO Scout entra em operações na Bacia do Congo — Fase I concluída",
                  "MESO Scout enters operations in Congo Basin — Phase I complete"
                ),
                t(
                  "MESO desenvolve a primeira fábrica de drones em Angola — 50.000 sistemas por ano até 2028",
                  "MESO develops Angola's first drone factory — 50,000 systems per year by 2028"
                ),
                t(
                  "Parceria estratégica com o Ministério dos Recursos Minerais de Angola",
                  "Strategic partnership with Angola's Ministry of Mineral Resources"
                ),
              ].map((item, i) => (
                <span
                  key={i}
                  className="font-condensed text-[11px] tracking-[0.1em] text-white/50 uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main hero image — full bleed */}
      <div className="relative flex-1 flex flex-col">
        {/* Full-screen drone image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=1920&q=85&auto=format&fit=crop&crop=center"
            alt="MESO drone system"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.35) contrast(1.1)" }}
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent" />
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        </div>

        {/* Headline overlay — Terra style: bottom-left aligned */}
        <div className="relative z-10 flex-1 flex flex-col justify-end pb-16 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Large Terra-style headline */}
              <h1 className="font-condensed font-900 text-white leading-[0.88] tracking-[-0.01em] mb-8"
                style={{ fontSize: "clamp(52px, 10vw, 130px)" }}
              >
                {lang === "pt" ? (
                  <>Protegendo<br />a Infraestrutura<br />Crítica de África.</>
                ) : (
                  <>Protecting<br />Africa&apos;s Critical<br />Infrastructure.</>
                )}
              </h1>

              {/* Mission line */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="h-px w-10 bg-white/30 flex-shrink-0 hidden sm:block" />
                <p className="font-condensed text-[15px] font-400 tracking-[0.05em] text-white/55 uppercase max-w-xl">
                  {t(
                    "Construímos sistemas autónomos que capacitam as nações africanas a proteger o seu povo, infraestrutura e recursos naturais.",
                    "Building autonomous systems that empower African nations to safeguard their people, infrastructure, and natural resources."
                  )}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a href="#sistemas" className="btn-outline">
                  {t("Ver Sistemas", "View Systems")}
                </a>
                <a
                  href="#noticias"
                  className="font-condensed text-[11px] font-600 tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  {t("Últimas Notícias →", "Latest News →")}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom-right coords */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 right-6 z-10 text-right"
        >
          <div className="label text-white/20">8°50&apos;S 13°14&apos;E</div>
          <div className="label text-white/15 mt-0.5">Luanda, Angola</div>
        </motion.div>
      </div>
    </section>
  );
}
