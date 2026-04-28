"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "./LangContext";

const news = [
  {
    date: "28 Abr 2026 / 28 Apr 2026",
    headline_pt: "MESO Desenvolve Primeira Fábrica de Drones em Angola",
    headline_en: "MESO Develops Angola's First Drone Factory",
    sub_pt: "A nossa primeira fábrica Pax produzirá até 50.000 sistemas aéreos por ano até 2028, criando mais de 150 empregos qualificados em Luanda.",
    sub_en: "Our first Pax Factory will produce up to 50,000 aerial systems per year by 2028, creating over 150 skilled jobs in Luanda.",
    tag_pt: "FABRICAÇÃO",
    tag_en: "MANUFACTURING",
    featured: true,
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80&auto=format&fit=crop",
  },
  {
    date: "12 Mar 2026 / 12 Mar 2026",
    headline_pt: "Líderes Militares Angolanos Visitam as Instalações da MESO",
    headline_en: "Senior Angolan Military Leaders Visit MESO Facilities",
    sub_pt: "Delegação de alto nível visita os nossos laboratórios de I&D em Luanda para explorar possibilidades de parceria estratégica.",
    sub_en: "High-level delegation visits our R&D labs in Luanda to explore strategic partnership possibilities.",
    tag_pt: "DEFESA",
    tag_en: "DEFENSE",
    featured: false,
    image: "https://images.unsplash.com/photo-1581092160607-ee67df6382af?w=800&q=80&auto=format&fit=crop",
  },
  {
    date: "05 Fev 2026 / 05 Feb 2026",
    headline_pt: "MESO e Sonangol Assinam Acordo de Parceria Estratégica",
    headline_en: "MESO and Sonangol Sign Strategic Partnership Agreement",
    sub_pt: "Acordo de referência para implantar sistemas MESO Scout em operações de inspeção de oleodutos onshore e offshore.",
    sub_en: "Landmark agreement to deploy MESO Scout systems across onshore and offshore pipeline inspection operations.",
    tag_pt: "PARCERIA",
    tag_en: "PARTNERSHIP",
    featured: false,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80&auto=format&fit=crop",
  },
  {
    date: "18 Jan 2026 / 18 Jan 2026",
    headline_pt: "MESO Expande Financiamento para 34M USD",
    headline_en: "MESO Extends Funding to $34M",
    sub_pt: "Ronda de financiamento da Série A liderada por investidores africanos e internacionais para acelerar o desenvolvimento e produção de sistemas.",
    sub_en: "Series A funding round led by African and international investors to accelerate systems development and production.",
    tag_pt: "FINANCIAMENTO",
    tag_en: "FUNDING",
    featured: false,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Newsroom() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang, t } = useLang();

  const featured = news[0];
  const secondary = news.slice(1);

  return (
    <section id="noticias" className="bg-black border-t border-white/[0.06]">
      {/* Label */}
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 py-5 border-b border-white/[0.06] flex items-center justify-between">
        <span className="label text-white/35">{t("SALA DE IMPRENSA", "NEWSROOM")}</span>
        <motion.a
          href="#contacto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="label text-white/30 hover:text-white transition-colors cursor-pointer"
        >
          {t("VER TUDO →", "VIEW ALL →")}
        </motion.a>
      </div>

      <div className="max-w-[1400px] mx-auto">
        {/* Featured story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/[0.06] group cursor-pointer"
        >
          {/* Image */}
          <div className="img-zoom border-b lg:border-b-0 lg:border-r border-white/[0.06]">
            <img
              src={featured.image}
              alt={lang === "pt" ? featured.headline_pt : featured.headline_en}
              className="w-full h-[300px] lg:h-[440px] object-cover"
              style={{ filter: "brightness(0.6) contrast(1.05) grayscale(0.2)" }}
            />
          </div>

          {/* Text */}
          <div className="px-6 lg:px-12 py-10 lg:py-14 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="label text-white/35">{lang === "pt" ? featured.tag_pt : featured.tag_en}</span>
                <span className="label text-white/20">{featured.date}</span>
              </div>
              <h2 className="font-condensed font-800 text-white leading-tight tracking-tight mb-5"
                style={{ fontSize: "clamp(22px, 3vw, 38px)" }}>
                {lang === "pt" ? featured.headline_pt : featured.headline_en}
              </h2>
              <p className="text-white/40 text-[14px] leading-relaxed">
                {lang === "pt" ? featured.sub_pt : featured.sub_en}
              </p>
            </div>
            <div className="mt-8">
              <a href="#contacto" className="btn-outline">
                {t("Ler Mais", "Read More")}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Secondary stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/[0.06]">
          {secondary.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
              className={`group cursor-pointer ${i < secondary.length - 1 ? "border-b md:border-b-0 md:border-r" : ""} border-white/[0.06] hover:bg-white/[0.02] transition-colors duration-300`}
            >
              {/* Thumbnail */}
              <div className="img-zoom h-40 overflow-hidden border-b border-white/[0.06]">
                <img
                  src={item.image}
                  alt={lang === "pt" ? item.headline_pt : item.headline_en}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.45) grayscale(0.5) contrast(1.05)" }}
                />
              </div>

              <div className="px-6 py-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="label text-white/30">{lang === "pt" ? item.tag_pt : item.tag_en}</span>
                </div>
                <h3 className="font-condensed font-700 text-white text-[17px] leading-tight tracking-wide mb-2 group-hover:text-white/80 transition-colors">
                  {lang === "pt" ? item.headline_pt : item.headline_en}
                </h3>
                <div className="label text-white/20 mt-3">{item.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
