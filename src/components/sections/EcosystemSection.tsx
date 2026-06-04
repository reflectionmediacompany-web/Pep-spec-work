import { motion, useReducedMotion } from "framer-motion";
import { Instagram, Facebook, Youtube, MessageCircle, Music2 } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionShell from "@/components/ui/SectionShell";
import { cn } from "@/lib/utils";

type Node = {
  title: string;
  subtitle: string;
  Icon: typeof Instagram;
  x: number;
  y: number;
  tone: "red" | "yellow" | "ink";
};

function toneClass(tone: Node["tone"]) {
  if (tone === "red") return "bg-[#e10600] text-white";
  if (tone === "yellow") return "bg-[#f3c51a] text-[#0b0d10]";
  return "bg-[#0b0d10] text-white";
}

export default function EcosystemSection() {
  const reduceMotion = useReducedMotion();

  const nodes: Node[] = [
    { title: "TikTok", subtitle: "Culture engine", Icon: Music2, x: 16, y: 18, tone: "red" },
    { title: "Instagram", subtitle: "Reels + story arcs", Icon: Instagram, x: 72, y: 16, tone: "ink" },
    { title: "Facebook", subtitle: "Reach + community", Icon: Facebook, x: 82, y: 60, tone: "yellow" },
    { title: "YouTube Shorts", subtitle: "Serial viewing", Icon: Youtube, x: 54, y: 82, tone: "ink" },
    { title: "WhatsApp", subtitle: "Utility hub", Icon: MessageCircle, x: 18, y: 74, tone: "yellow" },
  ];

  return (
    <SectionShell id="ecosystem" eyebrow="Digital Ecosystem" title="Channels designed as one connected system.">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-base leading-relaxed text-black/75 sm:text-lg">
              Each channel plays a distinct role, but the narrative stays consistent: preparation moments are worth celebrating.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-8 grid gap-3">
              {nodes.map((n) => (
                <div key={n.title} className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 px-5 py-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className={cn("inline-flex h-10 w-10 items-center justify-center rounded-2xl", toneClass(n.tone))}>
                      <n.Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold tracking-[-0.01em] text-black">{n.title}</div>
                      <div className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">{n.subtitle}</div>
                    </div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-black/15" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(700px_380px_at_20%_15%,rgba(227,6,0,0.10),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(700px_380px_at_80%_85%,rgba(243,197,26,0.12),transparent_60%)]" />
              <div className="relative z-10 mx-auto aspect-square w-full max-w-[520px]">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {nodes.map((n) => (
                    <line
                      key={`line-${n.title}`}
                      x1="50"
                      y1="50"
                      x2={n.x}
                      y2={n.y}
                      stroke="rgba(11,13,16,0.18)"
                      strokeWidth="0.6"
                      strokeDasharray="2 2"
                    />
                  ))}
                </svg>

                <motion.div
                  className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-black/10 bg-white px-6 py-7 text-center shadow-[0_25px_70px_rgba(11,13,16,0.12)]"
                  animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                  transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div>
                    <div className="text-xs font-medium uppercase tracking-[0.22em] text-black/55">PEP</div>
                    <div className="mt-2 font-[var(--font-display)] text-2xl leading-[1.02] tracking-[-0.02em] text-black">
                      Digital Ecosystem
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-black/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e10600]" />
                      One narrative, many formats
                    </div>
                  </div>
                </motion.div>

                {nodes.map((n, idx) => (
                  <motion.div
                    key={n.title}
                    className="absolute"
                    style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)" }}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.65, delay: 0.05 * idx, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div
                      animate={reduceMotion ? undefined : { y: [0, idx % 2 === 0 ? -8 : 8, 0] }}
                      transition={reduceMotion ? undefined : { duration: 5 + idx, repeat: Infinity, ease: "easeInOut" }}
                      className="group w-[170px] rounded-3xl border border-black/10 bg-white/90 p-4 shadow-[0_20px_60px_rgba(11,13,16,0.12)]"
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn("inline-flex h-10 w-10 items-center justify-center rounded-2xl", toneClass(n.tone))}>
                          <n.Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold tracking-[-0.01em] text-black">{n.title}</div>
                          <div className="truncate text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                            {n.subtitle}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 h-[2px] w-full rounded-full bg-black/5">
                        <div className={cn("h-[2px] rounded-full", n.tone === "red" ? "bg-[#e10600]" : n.tone === "yellow" ? "bg-[#f3c51a]" : "bg-[#0b0d10]")} style={{ width: "68%" }} />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
