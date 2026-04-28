"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "./LangContext";

const industries = [
  {
    id: "01",
    name_pt: "Petróleo & Gás",
    name_en: "Oil & Gas",
    desc_pt: "Inspeção de oleodutos, monitorização de queimadores e vigilância de plataformas offshore. Reduza riscos, diminua paragens e elimine inspeções manuais.",
    desc_en: "Pipeline inspection, flare stack monitoring, and offshore platform surveillance. Reduce risk, cut downtime, eliminate manual inspections.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80&auto=format&fit=crop",
    stat: "60%",
    stat_label_pt: "Redução de Custos",
    stat_label_en: "Cost Reduction",
  },
  {
    id: "02",
    name_pt: "Mineração",
    name_en: "Mining",
    desc_pt: "Levantamentos volumétricos, monitorização de estradas de transporte, verificação de padrões de detonação e mapeamento em tempo real das cavas mineiras.",
    desc_en: "Volumetric surveys, haul road monitoring, blast pattern verification, and real-time pit mapping across Angola's mineral-rich regions.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop",
    stat: "3×",
    stat_label_pt: "Velocidade de Levantamento",
    stat_label_en: "Survey Speed",
  },
  {
    id: "03",
    name_pt: "Agricultura",
    name_en: "Agriculture",
    desc_pt: "Agricultura de precisão em vastas áreas agrícolas angolanas. Imagiologia multiespectral, análise de saúde das culturas e mapeamento de irrigação.",
    desc_en: "Precision agriculture across Angola's vast farmlands. Multispectral imaging, crop health analytics, irrigation mapping, and yield prediction.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80&auto=format&fit=crop",
    stat: "40%",
    stat_label_pt: "Aumento de Produção",
    stat_label_en: "Yield Increase",
  },
  {
    id: "04",
    name_pt: "Cidades Inteligentes",
    name_en: "Smart Cities",
    desc_pt: "Análise de mobilidade urbana, monitorização de infraestrutura, coordenação de resposta a emergências e segurança nas cidades africanas de crescimento mais rápido.",
    desc_en: "Urban mobility analysis, infrastructure health monitoring, emergency response coordination, and security for Africa's fastest-growing cities.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format&fit=crop",
    stat: "24/7",
    stat_label_pt: "Cobertura Contínua",
    stat_label_en: "Continuous Coverage",
  },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang, t } = useLang();

  return (
    <section id="industrias" className="bg-black border-t border-white/[0.06]">
      {/* Label row */}
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 py-5 border-b border-white/[0.06] flex items-center justify-between">
        <span className="label text-white/35">{t("INDÚSTRIAS", "INDUSTRIES")}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="label text-white/20"
        >
          04 {t("SECTORES", "SECTORS")}
        </motion.span>
      </div>

      {/* Grid 2×2 */}
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {industries.map((ind, i) => {
            const isRight = i % 2 === 1;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`group border-b border-white/[0.06] ${isRight ? "md:border-l" : ""} overflow-hidden`}
              >
                {/* Image */}
                <div className="img-zoom h-56 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={lang === "pt" ? ind.name_pt : ind.name_en}
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.5) grayscale(0.4) contrast(1.05)" }}
                  />
                </div>

                {/* Content */}
                <div className="px-6 lg:px-8 py-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="label text-white/25 mb-2">{ind.id}</div>
                      <h3 className="font-condensed font-800 text-white text-2xl lg:text-3xl leading-none tracking-tight">
                        {lang === "pt" ? ind.name_pt : ind.name_en}
                      </h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-condensed font-900 text-white text-3xl leading-none">
                        {ind.stat}
                      </div>
                      <div className="label text-white/30 mt-1">
                        {lang === "pt" ? ind.stat_label_pt : ind.stat_label_en}
                      </div>
                    </div>
                  </div>

                  <p className="text-white/40 text-[13px] leading-relaxed">
                    {lang === "pt" ? ind.desc_pt : ind.desc_en}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
