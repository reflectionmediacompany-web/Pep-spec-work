import { useMemo, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import SectionShell from "@/components/ui/SectionShell";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  description: string;
};

export default function JourneySection() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const steps: Step[] = useMemo(
    () => [
      { title: "Awareness", description: "Hook with cinematic moments + creator-led formats." },
      { title: "Engagement", description: "Swipeable story arcs that invite reflection and sharing." },
      { title: "Participation", description: "UGC challenge turns preparation rituals into culture." },
      { title: "Community", description: "WhatsApp hub sustains utility, pride, and belonging." },
      { title: "Purchase", description: "Conversion peaks around moments: school, holidays, milestones." },
    ],
    [],
  );

  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const current = hovered ?? active;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (reduceMotion) return;
    const next = Math.min(steps.length - 1, Math.max(0, Math.floor(latest * steps.length)));
    setActive(next);
  });

  return (
    <SectionShell id="journey" variant="dark" eyebrow="Customer Journey" title="A journey that feels like momentum.">
      <div ref={ref}>
        <Reveal>
          <p className="max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            The strategy builds a deliberate flow—from story to participation to community utility—so emotional connection and
            business impact move together.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <div className="hidden gap-3 lg:flex">
              {steps.map((s, idx) => (
                <button
                  key={s.title}
                  type="button"
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(idx)}
                  onBlur={() => setHovered(null)}
                  onClick={() => setActive(idx)}
                  className={cn(
                    "group relative flex-1 rounded-2xl border px-5 py-5 text-left transition-colors",
                    idx <= current ? "border-white/15 bg-white/5" : "border-white/10 bg-transparent",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/65">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className={cn("h-2 w-2 rounded-full", idx === current ? "bg-[#f3c51a]" : "bg-white/25")} />
                  </div>
                  <div className="mt-3 text-lg font-semibold tracking-[-0.02em] text-white">{s.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/65">{s.description}</div>
                  <div className="pointer-events-none absolute inset-x-0 -bottom-5 flex items-center justify-center">
                    {idx < steps.length - 1 ? (
                      <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    ) : null}
                  </div>
                </button>
              ))}
            </div>

            <div className="grid gap-4 lg:hidden">
              {steps.map((s, idx) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={cn(
                    "rounded-2xl border p-5 text-left transition-colors",
                    idx === current ? "border-white/20 bg-white/5" : "border-white/10 bg-transparent",
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-lg font-semibold tracking-[-0.02em] text-white">{s.title}</div>
                    <div className={cn("h-2 w-2 rounded-full", idx === current ? "bg-[#f3c51a]" : "bg-white/25")} />
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-white/65">{s.description}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#e10600]/20 blur-3xl" />
              <div className="relative z-10">
                <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/70">Focus at this stage</div>
                <div className="mt-3 font-[var(--font-display)] text-3xl leading-[1.02] tracking-[-0.03em] text-white">
                  {steps[current]?.title}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{steps[current]?.description}</p>
                <div className="mt-7 h-px w-full bg-white/10" />
                <div className="mt-7 text-sm font-medium text-white">
                  The handoff is designed to feel inevitable—not forced.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

