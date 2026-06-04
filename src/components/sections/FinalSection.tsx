import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import SectionShell from "@/components/ui/SectionShell";
import { textToImageUrl } from "@/utils/images";

export default function FinalSection() {
  const reduceMotion = useReducedMotion();
  const closingImg = textToImageUrl(
    "cinematic premium advertising photography, South African family walking outdoors at golden hour, subtle red and yellow accents, uplifting mood, film grain, no text, no logos, ultra realistic",
    "landscape_16_9",
  );

  return (
    <SectionShell id="final" variant="dark" eyebrow="Final Slide" title="PEP helps South Africans create moments that matter.">
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5">
        <div className="absolute inset-0">
          <img src={closingImg} alt="Closing emotional moment" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        </div>

        <div className="relative z-10 p-8 sm:p-12">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/75">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f3c51a]" />
                Created as Spec Work for Promise Agency
              </div>

              <div className="mt-10 font-[var(--font-display)] text-5xl leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl">
                Moments aren’t bought.
                <br />
                They’re prepared for.
              </div>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                This case study is a speculative campaign concept designed to show how premium digital storytelling can reframe value
                into meaning—without losing what makes PEP trusted.
              </p>
            </div>
          </Reveal>
        </div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          initial={reduceMotion ? false : { opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-1/3 bg-[#e10600]"
            initial={reduceMotion ? false : { y: "100%" }}
            whileInView={reduceMotion ? { y: "100%" } : { y: "-120%" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 left-1/3 w-1/3 bg-[#0b0d10]"
            initial={reduceMotion ? false : { y: "100%" }}
            whileInView={reduceMotion ? { y: "100%" } : { y: "-120%" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1.1, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/3 bg-[#f3c51a]"
            initial={reduceMotion ? false : { y: "100%" }}
            whileInView={reduceMotion ? { y: "100%" } : { y: "-120%" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1.1, delay: 0.29, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </div>
    </SectionShell>
  );
}

