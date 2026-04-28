"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "./LangContext";

export default function Vision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLang();

  return (
    <section id="visao" className="bg-black border-t border-white/[0.06]">
      {/* Label */}
      <div className="max-w-[1400px] mx-auto px-6 py-5 border-b border-white/[0.06]">
        <span className="label text-white/35">{t("VISÃO & FÁBRICA", "VISION & FACTORY")}</span>
      </div>

      <div ref={ref} className="max-w-[1400px] mx-auto">
        {/* Full-width factory image */}
        <div className="img-zoom relative border-b border-white/[0.06]">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80&auto=format&fit=crop"
            alt="MESO drone factory Luanda"
            className="w-full h-[360px] lg:h-[500px] object-cover"
            style={{ filter: "brightness(0.35) grayscale(0.3) contrast(1.1)" }}
          />
          <div className="absolute inset-0 flex items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="px-6 lg:px-12 pb-10 lg:pb-16 w-full"
            >
              <div className="label text-white/35 mb-4">
                {t("FABRICAÇÃO EM ÁFRICA", "MANUFACTURING IN AFRICA")}
              </div>
              <h2
                className="font-condensed font-900 text-white leading-none tracking-tight"
                style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
              >
                {t("Feito em África.", "Made in Africa.")}
                <br />
                <span className="text-white/40">{t("Construído para Escalar.", "Built to Scale.")}</span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Two column text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/[0.06]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="px-6 lg:px-12 py-10 lg:py-14 border-b lg:border-b-0 lg:border-r border-white/[0.06]"
          >
            <p className="font-condensed font-400 text-white/50 text-[16px] leading-relaxed max-w-md">
              {t(
                "A MESO está a desenvolver capacidades de fabrico de drones escaláveis em África — reduzindo a dependência de importações, acelerando os prazos de entrega e criando a primeira cadeia de fornecimento de sistemas autónomos do continente.",
                "MESO is developing scalable drone manufacturing capabilities in Africa — reducing import dependency, accelerating delivery timelines, and creating the continent's first autonomous systems supply chain."
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="px-6 lg:px-12 py-10 lg:py-14"
          >
            <p className="font-condensed font-400 text-white/50 text-[16px] leading-relaxed max-w-md">
              {t(
                "A nossa instalação em Luanda irá produzir as plataformas Scout e Atlas à escala continental — posicionando Angola como o hub africano de engenharia de sistemas autónomos e criando mais de 150 empregos altamente qualificados.",
                "Our Luanda facility will produce Scout and Atlas platforms at continental scale — positioning Angola as Africa's autonomous systems engineering hub and creating 150+ highly skilled jobs."
              )}
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { val: "2026", label_pt: "Início de Produção", label_en: "Production Start" },
            { val: "500+", label_pt: "Unidades / Ano", label_en: "Units / Year" },
            { val: "150+", label_pt: "Empregos Criados", label_en: "Jobs Created" },
            { val: "5", label_pt: "Nações Parceiras", label_en: "Partner Nations" },
          ].map((s, i) => (
            <motion.div
              key={s.val}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
              className={`py-8 px-6 lg:px-12 ${i > 0 ? "border-l border-white/[0.06]" : ""}`}
            >
              <div className="font-condensed font-900 text-white text-4xl lg:text-5xl leading-none mb-2">
                {s.val}
              </div>
              <div className="label text-white/30">
                {t(s.label_pt, s.label_en)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
