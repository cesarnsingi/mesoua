"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "./LangContext";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang, t } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", interest: "", message: "",
  });

  const interests = lang === "pt"
    ? ["MESO Scout — Vigilância VTOL", "MESO Atlas — UAV Industrial", "MESO Duma — Veículo Terrestre", "MESO Core — Plataforma de Software", "Parceria de Fabricação", "Investimento / Série A"]
    : ["MESO Scout — VTOL Surveillance", "MESO Atlas — Industrial UAV", "MESO Duma — Ground Vehicle", "MESO Core — Software Platform", "Manufacturing Partnership", "Investment / Series A"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-black border-t border-white/[0.06]">
      {/* Label */}
      <div className="max-w-[1400px] mx-auto px-6 py-5 border-b border-white/[0.06]">
        <span className="label text-white/35">{t("FALAR CONNOSCO", "TALK TO US")}</span>
      </div>

      <div ref={ref} className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: headline + info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="px-6 lg:px-12 py-12 lg:py-20 border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col justify-between"
          >
            <div>
              <h2
                className="font-condensed font-900 text-white leading-none tracking-tight mb-8"
                style={{ fontSize: "clamp(38px, 5.5vw, 72px)" }}
              >
                {t("Vamos Construir Juntos.", "Let's Build Together.")}
              </h2>
              <p className="text-white/40 text-[14px] leading-relaxed max-w-sm mb-10">
                {t(
                  "Se é operador de infraestrutura, parceiro governamental ou investidor — estamos prontos para trabalhar consigo.",
                  "Whether you're an infrastructure operator, government partner, or investor — we're ready to work with you."
                )}
              </p>

              {/* Contact details */}
              <div className="space-y-0">
                {[
                  { label_pt: "Morada", label_en: "Address", val: "Ingombota, Luanda, Angola" },
                  { label_pt: "Email", label_en: "Email", val: "hello@meso.ao" },
                  { label_pt: "Investidores", label_en: "Investors", val: "invest@meso.ao" },
                  { label_pt: "Telefone", label_en: "Phone", val: "+244 923 000 000" },
                ].map((item) => (
                  <div key={item.val} className="spec-row">
                    <span className="spec-key">{t(item.label_pt, item.label_en)}</span>
                    <span className="spec-val">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Angola / HQ image */}
            <div className="mt-10 img-zoom">
              <img
                src="https://images.unsplash.com/photo-1590246814883-57c511e80560?w=700&q=80&auto=format&fit=crop"
                alt="Luanda Angola"
                className="w-full h-40 object-cover"
                style={{ filter: "brightness(0.4) grayscale(0.4) contrast(1.1)" }}
              />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="px-6 lg:px-12 py-12 lg:py-20"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="font-condensed font-800 text-white text-3xl mb-3">
                  {t("Mensagem Enviada.", "Message Received.")}
                </div>
                <p className="text-white/40 text-sm">
                  {t("A nossa equipa responderá em 24 horas.", "Our team will respond within 24 hours.")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0">
                {/* Name + Company */}
                <div className="grid grid-cols-2 gap-px bg-white/[0.06] mb-px">
                  <div className="bg-black">
                    <div className="label text-white/25 px-0 pt-0 pb-2">
                      {t("Nome", "Name")}
                    </div>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/[0.1] pb-3 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors font-barlow pr-4"
                      placeholder={t("João Silva", "João Silva")}
                    />
                  </div>
                  <div className="bg-black pl-4">
                    <div className="label text-white/25 pb-2">
                      {t("Empresa", "Company")}
                    </div>
                    <input
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-transparent border-b border-white/[0.1] pb-3 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="Sonangol"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <div className="label text-white/25 pb-2">{t("Email", "Email")}</div>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/[0.1] pb-3 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder={t("joao@empresa.ao", "joao@company.ao")}
                  />
                </div>

                <div className="pt-6">
                  <div className="label text-white/25 pb-2">
                    {t("Área de Interesse", "Area of Interest")}
                  </div>
                  <select
                    value={form.interest}
                    onChange={e => setForm({ ...form, interest: e.target.value })}
                    className="w-full bg-transparent border-b border-white/[0.1] pb-3 text-white/60 text-[14px] focus:outline-none focus:border-white/40 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">
                      {t("Selecionar...", "Select...")}
                    </option>
                    {interests.map(opt => (
                      <option key={opt} value={opt} className="bg-black text-white">{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-6">
                  <div className="label text-white/25 pb-2">{t("Mensagem", "Message")}</div>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/[0.1] pb-3 text-white text-[14px] placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    placeholder={t("Fale-nos sobre o seu projeto...", "Tell us about your project...")}
                  />
                </div>

                <div className="pt-8">
                  <button type="submit" className="btn-outline w-full text-center">
                    {t("Enviar Mensagem", "Send Message")}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
