"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "./LangContext";

export default function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();

  return (
    <section className="bg-black border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Label row */}
        <div className="py-5 border-b border-white/[0.06]">
          <span className="label text-white/35">
            {t("A NOSSA MISSÃO", "OUR MISSION")}
          </span>
        </div>

        {/* Mission statement */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="py-16 lg:py-24 max-w-4xl"
        >
          <p
            className="font-condensed font-700 text-white leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: "clamp(28px, 4.5vw, 58px)" }}
          >
            {t(
              "Construir sistemas autónomos que capacitem as nações africanas a proteger o seu povo, infraestrutura e recursos naturais.",
              "Building autonomous systems that empower African nations to safeguard their people, infrastructure, and natural resources."
            )}
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4">
          {[
            { val: "3", label: t("Sistemas de Plataforma", "Platform Systems") },
            { val: "5+", label: t("Nações Africanas", "African Nations") },
            { val: "99.4%", label: t("Taxa de Sucesso", "Mission Success") },
            { val: "2026", label: t("Fábrica Luanda", "Luanda Factory") },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
              className={`py-8 px-0 pr-8 ${i > 0 ? "pl-8 border-l border-white/[0.06]" : ""}`}
            >
              <div className="font-condensed font-900 text-white text-4xl lg:text-5xl leading-none mb-2">
                {s.val}
              </div>
              <div className="label text-white/35">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
