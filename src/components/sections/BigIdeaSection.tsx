import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import SectionShell from "@/components/ui/SectionShell";

export default function BigIdeaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="big-idea"
      variant="dark"
      eyebrow="The Big Idea"
      title="More Than Just a Price Tag"
      className="bg-[#0b0d10]"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-8 sm:p-12">
        <motion.div
          aria-hidden
          className="absolute inset-0"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-[55%] bg-[#e10600]"
            initial={reduceMotion ? false : { x: "0%" }}
            whileInView={reduceMotion ? { x: "0%" } : { x: "-105%" }}
            viewport={{ once: true, amount: 0.7 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1.05, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-[55%] bg-[#0b0d10]"
            initial={reduceMotion ? false : { x: "0%" }}
            whileInView={reduceMotion ? { x: "0%" } : { x: "105%" }}
            viewport={{ once: true, amount: 0.7 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1.05, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_30%,rgba(243,197,26,0.12),transparent_70%)]" />
        </motion.div>

        <div className="relative z-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/70">Campaign Concept</p>
              <h3 className="mt-4 font-[var(--font-display)] text-4xl leading-[0.98] tracking-[-0.03em] text-white sm:text-5xl">
                Turn price into proof of care.
              </h3>
              <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                We celebrate the moments people prepare for—and show that PEP is the partner in that preparation. The “price tag”
                becomes a symbol not of cheapness, but of possibility: more moments, made reachable.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/65">Role</div>
                <div className="mt-2 text-lg font-semibold text-white">Enabler</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/65">Emotion</div>
                <div className="mt-2 text-lg font-semibold text-white">Pride</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/65">Proof</div>
                <div className="mt-2 text-lg font-semibold text-white">Real Stories</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}

