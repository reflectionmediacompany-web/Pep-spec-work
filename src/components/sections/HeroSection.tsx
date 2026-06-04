import { useMemo, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { textToImageUrl } from "@/utils/images";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgLift = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -60]);
  const imgDrift = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 80]);

  const images = useMemo(() => {
    const common =
      "cinematic premium advertising photography, South African retail store atmosphere, warm natural light, film grain, shallow depth of field, human emotion, high-end editorial composition, no text, no logos, ultra realistic";
    return {
      retail: textToImageUrl(
        `${common}, wide shot of a modern affordable retail aisle with red accents, subtle yellow highlights, product shelves softly blurred, cinematic lens flare`,
        "landscape_16_9",
      ),
      family: textToImageUrl(
        `${common}, intimate family moment at home preparing for school, parent helping child with new uniform, gentle smiles, understated red and black wardrobe accents`,
        "portrait_4_3",
      ),
      moment: textToImageUrl(
        `${common}, close-up hands holding a small shopping bag, receipt and price tag detail, premium minimal styling, dramatic shadows, tactile paper texture`,
        "portrait_4_3",
      ),
    };
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_20%_20%,rgba(227,6,0,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_700px_at_85%_10%,rgba(243,197,26,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(251,251,250,0.0),rgba(251,251,250,0.55)_35%,rgba(251,251,250,1))]" />
      </div>

      <div className="relative z-10">
        <div className="container px-6 pt-7">
          <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#e10600]" />
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-black/70">
                Promise Agency · Spec Work
              </div>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-black/70 backdrop-blur sm:inline-flex">
              <Sparkles className="h-3.5 w-3.5 text-[#e10600]" />
              Digital Communications Strategy
            </div>
          </div>
        </div>

        <div className="container grid items-start gap-10 px-6 pb-20 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-28 lg:pt-20">
          <div className="max-w-xl">
            <Reveal>
              <h1 className="font-[var(--font-display)] text-5xl leading-[0.95] tracking-[-0.03em] text-[#0b0d10] sm:text-6xl lg:text-7xl">
                PEP <span className="text-[#e10600]">–</span> More Than Just a Price Tag
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-black/70 sm:text-lg">
                A speculative Digital Communications Strategy created for Promise Agency, designed to deepen emotional connection
                beyond affordability.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm text-black/75 backdrop-blur">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0b0d10] text-white">
                  <span className="font-semibold">R</span>
                </span>
                <span className="font-medium">More moments.</span>
                <span className="h-1 w-1 rounded-full bg-black/30" />
                <span className="font-medium">More meaning.</span>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div className="absolute -left-10 -top-8 hidden h-28 w-28 rounded-full bg-[#f3c51a]/20 blur-2xl lg:block" />
            <div className="absolute -bottom-14 -right-8 hidden h-36 w-36 rounded-full bg-[#e10600]/15 blur-2xl lg:block" />

            <div className="relative grid grid-cols-12 gap-4">
              <motion.div className="col-span-12 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_25px_60px_rgba(11,13,16,0.12)]">
                <motion.img
                  src={images.retail}
                  alt="Cinematic retail atmosphere"
                  className="h-[220px] w-full object-cover sm:h-[280px]"
                  style={{ y: imgLift }}
                />
              </motion.div>

              <motion.div className="col-span-7 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_25px_60px_rgba(11,13,16,0.12)]">
                <motion.img
                  src={images.family}
                  alt="Emotional family moment"
                  className="h-[240px] w-full object-cover sm:h-[290px]"
                  style={{ y: imgDrift }}
                />
              </motion.div>

              <motion.div className="col-span-5 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_25px_60px_rgba(11,13,16,0.12)]">
                <motion.img
                  src={images.moment}
                  alt="Tactile price tag detail"
                  className="h-[240px] w-full object-cover sm:h-[290px]"
                  style={{ y: imgLift }}
                />
              </motion.div>

              <div className="pointer-events-none absolute -bottom-7 left-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-black/70 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e10600]" />
                South Africa · Retail Moments
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-black/70 backdrop-blur md:inline-flex">
          <ArrowDown className="h-4 w-4 text-[#e10600]" />
          Scroll to Experience the Story
        </div>
      </div>
    </section>
  );
}

