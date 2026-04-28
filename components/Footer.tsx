"use client";
import { useLang } from "./LangContext";

const links = {
  pt: {
    "Sistemas": ["MESO Scout", "MESO Atlas", "MESO Duma", "MESO Core"],
    "Empresa": ["Visão", "Fabricação", "Carreiras", "Imprensa"],
    "Indústrias": ["Petróleo & Gás", "Mineração", "Agricultura", "Cidades Inteligentes"],
    "Legal": ["Privacidade", "Termos", "Segurança"],
  },
  en: {
    "Systems": ["MESO Scout", "MESO Atlas", "MESO Duma", "MESO Core"],
    "Company": ["Vision", "Manufacturing", "Careers", "Press"],
    "Industries": ["Oil & Gas", "Mining", "Agriculture", "Smart Cities"],
    "Legal": ["Privacy", "Terms", "Security"],
  },
};

export default function Footer() {
  const { lang, t } = useLang();
  const navLinks = links[lang];

  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Top: logo + links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 py-14 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="inline-block mb-5">
              <span className="font-condensed font-900 text-[20px] tracking-[0.25em] text-white uppercase">
                MESO
              </span>
            </a>
            <p className="text-white/30 text-[13px] leading-relaxed max-w-[180px] mb-6">
              {t(
                "Sistemas autónomos para a infraestrutura crítica de África.",
                "Autonomous systems for Africa's critical infrastructure."
              )}
            </p>
            {/* Social icons — text style like Terra */}
            <div className="flex gap-4">
              {["X", "LI", "IG", "GH"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-condensed text-[11px] font-600 tracking-[0.12em] text-white/25 hover:text-white transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(navLinks).map(([category, items]) => (
            <div key={category}>
              <div className="label text-white/25 mb-5">{category.toUpperCase()}</div>
              <ul className="space-y-3">
                {(items as string[]).map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-condensed text-[13px] font-400 text-white/35 hover:text-white transition-colors tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="label text-white/20">
            © 2026 MESO Technologies, Lda. Luanda, Angola.
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
            <span className="label text-white/20">
              {t("Todos os Sistemas Operacionais", "All Systems Operational")}
            </span>
          </div>
          <div className="label text-white/15">
            MESO-OS v2.4 · {t("EST.", "EST.")} 2022
          </div>
        </div>
      </div>
    </footer>
  );
}
