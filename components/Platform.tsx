"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "./LangContext";

export default function Platform() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLang();

  const features = [
    {
      code: "01",
      title_pt: "Monitorização em Tempo Real",
      title_en: "Real-Time Monitoring",
      desc_pt: "Fluxo ao vivo de telemetria de voo, leituras de sensores e feeds visuais de todos os sistemas conectados com latência inferior a 200ms.",
      desc_en: "Live streaming of flight telemetry, sensor readings, and visual feeds from all connected systems with sub-200ms latency.",
    },
    {
      code: "02",
      title_pt: "Inteligência Preditiva",
      title_en: "Predictive Intelligence",
      desc_pt: "Modelos de machine learning treinados em dados operacionais africanos para deteção proativa de anomalias e manutenção preditiva.",
      desc_en: "Machine learning models trained on African operational data for proactive anomaly detection and predictive maintenance.",
    },
    {
      code: "03",
      title_pt: "Missões Autónomas",
      title_en: "Autonomous Tasking",
      desc_pt: "Planeamento e execução de missões orientado por IA. Defina os objetivos; o MESO Core trata do resto — incluindo reencaminhamento adaptativo.",
      desc_en: "AI-driven mission planning and execution. Define objectives; MESO Core handles the rest — including adaptive rerouting.",
    },
    {
      code: "04",
      title_pt: "Computação na Extremidade",
      title_en: "Edge Computing",
      desc_pt: "Unidades de processamento a bordo permitem operação autónoma em ambientes de baixa conectividade nas regiões mais remotas de África.",
      desc_en: "On-board processing units enable autonomous operation in low-connectivity environments across Africa's most remote regions.",
    },
  ];

  return (
    <section id="plataforma" className="bg-black border-t border-white/[0.06]">
      {/* Label */}
      <div className="max-w-[1400px] mx-auto px-6 py-5 border-b border-white/[0.06]">
        <span className="label text-white/35">
          {t("PLATAFORMA DE SOFTWARE", "SOFTWARE PLATFORM")}
        </span>
      </div>

      {/* Main split */}
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/[0.06]">
          {/* Left: image */}
          <div className="img-zoom border-b lg:border-b-0 lg:border-r border-white/[0.06]">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee67df6382af?w=1200&q=80&auto=format&fit=crop"
                alt="MESO Core AI platform"
                className="w-full h-[400px] lg:h-[600px] object-cover"
                style={{ filter: "brightness(0.4) contrast(1.1) grayscale(0.3)" }}
              />
              {/* Overlay text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <div className="label text-white/40 mb-4">
                    {t("SISTEMA OPERATIVO DE IA", "AI-POWERED OS")}
                  </div>
                  <h2 className="font-condensed font-900 text-white text-5xl lg:text-7xl leading-none tracking-tight">
                    MESO<br />Core
                  </h2>
                  <p className="mt-4 text-white/45 text-sm max-w-xs leading-relaxed">
                    {t(
                      "Sistema operativo com IA que traz inteligência de dados e autonomia à segurança de infraestrutura.",
                      "AI-powered operating system that brings data intelligence and autonomy to infrastructure security."
                    )}
                  </p>
                </motion.div>
              </div>

              {/* Simulated HUD overlay */}
              <div className="absolute top-6 right-6 text-right">
                <div className="label text-white/25">MESO-OS v2.4</div>
                <div className="flex items-center justify-end gap-1.5 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                  <span className="label text-white/25">{t("EM LINHA", "ONLINE")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: features */}
          <div>
            {features.map((f, i) => (
              <motion.div
                key={f.code}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                className={`px-8 lg:px-12 py-9 ${i < features.length - 1 ? "border-b border-white/[0.06]" : ""} group hover:bg-white/[0.02] transition-colors duration-300`}
              >
                <div className="flex items-start gap-6">
                  <span className="label text-white/20 mt-1 flex-shrink-0">{f.code}</span>
                  <div>
                    <h3 className="font-condensed font-700 text-white text-xl tracking-wide mb-2">
                      {t(f.title_pt, f.title_en)}
                    </h3>
                    <p className="text-white/40 text-[13px] leading-relaxed">
                      {t(f.desc_pt, f.desc_en)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="px-6 py-6 flex items-center justify-between">
          <p className="font-condensed text-[13px] text-white/30 tracking-wide">
            {t("Solicite uma demonstração ao vivo para a sua equipa.", "Request a live demonstration for your team.")}
          </p>
          <a href="#contacto" className="btn-outline">
            {t("Pedir Demo", "Request Demo")}
          </a>
        </div>
      </div>
    </section>
  );
}
