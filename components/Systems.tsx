"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "./LangContext";

type Spec = { key_pt: string; key_en: string; val: string };

interface Product {
  id: string;
  type_pt: string;
  type_en: string;
  name: string;
  desc_pt: string;
  desc_en: string;
  image: string;
  imageAlt: string;
  specs: Spec[];
  learnMore_pt: string;
  learnMore_en: string;
}

const products: Product[] = [
  {
    id: "01",
    type_pt: "Drone de Vigilância Autónomo",
    type_en: "Autonomous Surveillance Drone",
    name: "MESO Scout",
    desc_pt: "Scout é um drone VTOL de longa autonomia e múltiplas missões, concebido para vigilância de infraestrutura crítica como minas, oleodutos e fronteiras.",
    desc_en: "Scout is a long-range, multi-mission VTOL drone built for surveillance of critical infrastructure such as mines, oil pipelines, and borders.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "MESO Scout VTOL drone",
    specs: [
      { key_pt: "Material da Estrutura", key_en: "Frame Material", val: "Fibra de Carbono 3K / 3K Carbon Fiber" },
      { key_pt: "Alcance Máx.", key_en: "Max. Range", val: "Up to 250 km" },
      { key_pt: "Peso Máx. de Descolagem", key_en: "Max. Takeoff Weight", val: "28 kg" },
      { key_pt: "Autonomia", key_en: "Mission Endurance", val: "90 min" },
      { key_pt: "Carga Útil", key_en: "Payload Capacity", val: "6 kg" },
      { key_pt: "Vel. Máx. de Voo", key_en: "Max. Flight Speed", val: "120 km/h" },
      { key_pt: "Altitude Operacional", key_en: "Max. Operating Altitude", val: "3,000 m" },
    ],
    learnMore_pt: "Saber mais sobre Scout",
    learnMore_en: "Learn more about Scout",
  },
  {
    id: "02",
    type_pt: "UAV Quadricóptero Autónomo",
    type_en: "Autonomous Quadcopter UAV",
    name: "MESO Atlas",
    desc_pt: "Atlas é um drone quadricóptero modular e de grande capacidade, concebido para cargas pesadas e resposta rápida em operações industriais em África.",
    desc_en: "Atlas is a modular, high-capacity quadcopter designed for heavy payloads and rapid deployment in industrial operations across Africa.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "MESO Atlas industrial drone",
    specs: [
      { key_pt: "Material", key_en: "Material", val: "Compósito de Fibra de Carbono & Alumínio Aeronáutico" },
      { key_pt: "Alcance Máx.", key_en: "Max. Range", val: "Up to 80 km" },
      { key_pt: "Autonomia", key_en: "Mission Endurance", val: "Up to 60 mins" },
      { key_pt: "Carga Útil", key_en: "Payload Capacity", val: "15 kg" },
      { key_pt: "Peso Máx.", key_en: "Max. Takeoff Weight", val: "35 kg" },
      { key_pt: "Vel. Máx.", key_en: "Max. Flight Speed", val: "65 km/h" },
      { key_pt: "Altitude Máx.", key_en: "Max. Operating Altitude", val: "2,500 m" },
    ],
    learnMore_pt: "Saber mais sobre Atlas",
    learnMore_en: "Learn more about Atlas",
  },
  {
    id: "03",
    type_pt: "Veículo Terrestre Autónomo",
    type_en: "Autonomous Ground Vehicle",
    name: "MESO Duma",
    desc_pt: "Duma UGV é o nosso drone terrestre autónomo com arquitetura aberta que permite configurações para vigilância terrestre e operações de carga em terrenos adversos.",
    desc_en: "Duma UGV is our autonomous ground vehicle with open architecture enabling configurations for ground surveillance and cargo operations in harsh terrain.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&q=80&auto=format&fit=crop",
    imageAlt: "MESO Duma ground vehicle",
    specs: [
      { key_pt: "Material", key_en: "Material", val: "Compósito de Borracha-Aço / Rubber-Steel Composite" },
      { key_pt: "Alcance de Controlo", key_en: "Control Range", val: "15 km" },
      { key_pt: "Autonomia", key_en: "Mission Endurance", val: "Up to 24 hours" },
      { key_pt: "Carga Útil", key_en: "Payload Capacity", val: "600 kg" },
      { key_pt: "Peso", key_en: "Weight", val: "Approx. 350 kg" },
      { key_pt: "Vel. Máx.", key_en: "Max. Speed", val: "Up to 45 km/h" },
      { key_pt: "Dimensões", key_en: "Dimensions", val: "114.2\"L × 64.97\"W × 55.1\"H" },
    ],
    learnMore_pt: "Saber mais sobre Duma",
    learnMore_en: "Learn more about Duma",
  },
];

function ProductBlock({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang, t } = useLang();
  const isOdd = index % 2 === 1;

  return (
    <div ref={ref} className="border-t border-white/[0.06]">
      {/* Type label row */}
      <div className="max-w-[1400px] mx-auto px-6 py-5 border-b border-white/[0.06]">
        <span className="label text-white/35">
          {lang === "pt" ? product.type_pt : product.type_en}
        </span>
      </div>

      {/* Main content */}
      <div className={`max-w-[1400px] mx-auto px-6 py-0`}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${isOdd ? "lg:grid-flow-dense" : ""}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className={`img-zoom border-white/[0.06] ${isOdd ? "lg:col-start-2 lg:border-l" : "lg:border-r"}`}
          >
            <img
              src={product.image}
              alt={product.imageAlt}
              className="w-full h-[340px] lg:h-[520px] object-cover"
              style={{ filter: "brightness(0.75) contrast(1.05)" }}
            />
          </motion.div>

          {/* Info + specs */}
          <motion.div
            initial={{ opacity: 0, x: isOdd ? 20 : -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between py-10 lg:py-14 lg:px-12"
          >
            {/* Name & desc */}
            <div className="mb-8">
              <h2 className="font-condensed font-900 text-white text-4xl lg:text-5xl xl:text-6xl leading-none tracking-tight mb-4">
                {product.name}
              </h2>
              <p className="font-barlow text-[15px] text-white/50 leading-relaxed max-w-md">
                {lang === "pt" ? product.desc_pt : product.desc_en}
              </p>
            </div>

            {/* Specs */}
            <div>
              {product.specs.map((spec) => (
                <div key={spec.key_en} className="spec-row">
                  <span className="spec-key">{lang === "pt" ? spec.key_pt : spec.key_en}</span>
                  <span className="spec-val">{spec.val}</span>
                </div>
              ))}
            </div>

            {/* Learn more */}
            <div className="mt-8">
              <a href="#contacto" className="btn-outline">
                {lang === "pt" ? product.learnMore_pt : product.learnMore_en}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Systems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { t } = useLang();

  return (
    <section id="sistemas" className="bg-black">
      {/* Section header */}
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 py-5 border-t border-b border-white/[0.06] flex items-center justify-between">
        <span className="label text-white/35">
          {t("SISTEMAS", "SYSTEMS")}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="label text-white/20"
        >
          03 {t("PLATAFORMAS", "PLATFORMS")}
        </motion.span>
      </div>

      {products.map((p, i) => (
        <ProductBlock key={p.id} product={p} index={i} />
      ))}
    </section>
  );
}
