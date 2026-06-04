import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import SectionShell from "@/components/ui/SectionShell";

const lines = [
  "PEP is not where people simply buy products.",
  "It is where people prepare for life's important moments.",
];

export default function InsightSection() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="insight"
      variant="dark"
      eyebrow="The Insight"
      title="A brand of preparation—before the moment happens."
      className="bg-[#0b0d10]"
    >
      <div className="relative">
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#e10600]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-[#f3c51a]/15 blur-3xl" />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="font-[var(--font-display)] text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {lines.map((line, idx) => (
                <motion.div
                  key={line}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.85, delay: 0.06 * idx, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <span className="text-[#fbfbfa]">{line}</span>
                  {idx === 1 ? (
                    <motion.span
                      aria-hidden
                      className="absolute -bottom-2 left-0 h-[10px] w-[62%] rounded-full bg-[#e10600]"
                      initial={reduceMotion ? false : { scaleX: 0 }}
                      whileInView={reduceMotion ? { scaleX: 1 } : { scaleX: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "left" }}
                    />
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/70">Translation</div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  PEP sits inside the rituals that create pride: preparing for school, birthdays, first jobs, weddings, and everyday
                  “we made it” moments.
                </p>
                <div className="mt-6 h-px w-full bg-white/10" />
                <div className="mt-6 text-sm font-medium text-white">
                  That’s emotional equity—built one preparation at a time.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

