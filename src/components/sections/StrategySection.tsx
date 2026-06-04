import { motion, useReducedMotion } from "framer-motion";
import { Film, Hash, MessageCircle, Users, Handshake } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionShell from "@/components/ui/SectionShell";
import { cn } from "@/lib/utils";
import { textToImageUrl } from "@/utils/images";

type Pillar = {
  title: string;
  label: string;
  description: string;
  Icon: typeof Film;
  image: string;
};

export default function StrategySection() {
  const reduceMotion = useReducedMotion();

  const pillars: Pillar[] = [
    {
      title: "Real Stories Content Series",
      label: "Pillar 01",
      description: "Short, cinematic stories of real preparation moments—authentic, human, and proudly local.",
      Icon: Film,
      image: textToImageUrl(
        "premium documentary portrait photography, South African family getting ready for a celebration, warm light, subtle red accents, film grain, no text, no logos, ultra realistic",
        "portrait_4_3",
      ),
    },
    {
      title: "#MyPEPMoment Challenge",
      label: "Pillar 02",
      description: "A participatory social format inviting people to share their ‘before the moment’ rituals.",
      Icon: Hash,
      image: textToImageUrl(
        "high-end smartphone video still aesthetic, young South African creator filming an outfit reveal in a bedroom mirror, modern lighting, red and black accents, no text, no logos, ultra realistic",
        "portrait_4_3",
      ),
    },
    {
      title: "Creator Partnerships",
      label: "Pillar 03",
      description: "Trusted voices turn preparation into culture—formats built for TikTok, Reels, and Shorts.",
      Icon: Users,
      image: textToImageUrl(
        "cinematic street-style portrait, South African fashion creator holding affordable retail items, premium editorial look, soft grain, no text, no logos, ultra realistic",
        "portrait_4_3",
      ),
    },
    {
      title: "WhatsApp Community Hub",
      label: "Pillar 04",
      description: "A utility-first channel for drop alerts, community tips, and practical prep lists.",
      Icon: MessageCircle,
      image: textToImageUrl(
        "premium close-up product photography of a smartphone in hand with messaging app open, minimal UI glow, warm shadows, tactile realism, no readable text, no logos, ultra realistic",
        "portrait_4_3",
      ),
    },
    {
      title: "Community Impact Content",
      label: "Pillar 05",
      description: "Stories that prove impact—spotlighting upliftment, access, and community-led moments.",
      Icon: Handshake,
      image: textToImageUrl(
        "documentary photography, community gathering in South Africa, helping hands, warm late afternoon light, premium editorial composition, film grain, no text, no logos, ultra realistic",
        "portrait_4_3",
      ),
    },
  ];

  return (
    <SectionShell id="strategy" eyebrow="Strategy" title="Five pillars built for participation—and proof.">
      <div className="grid gap-5 md:grid-cols-2">
        {pillars.map((p, idx) => (
          <Reveal key={p.title} delay={0.03 * idx}>
            <motion.article
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={reduceMotion ? undefined : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 backdrop-blur"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(500px_220px_at_20%_20%,rgba(227,6,0,0.10),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(600px_260px_at_80%_30%,rgba(243,197,26,0.10),transparent_60%)]" />
              </div>

              <div className="relative z-10 flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-black/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e10600]" />
                      {p.label}
                    </div>
                    <div className="hidden text-[11px] font-medium uppercase tracking-[0.22em] text-black/45 sm:block">
                      Always-on + campaign peaks
                    </div>
                  </div>

                  <h3 className="mt-4 max-w-[34ch] text-xl font-semibold tracking-[-0.02em] text-black sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-black/65 sm:text-base">{p.description}</p>
                </div>

                <div className="relative hidden shrink-0 sm:block">
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-2xl bg-[#f3c51a]/25 blur-xl" />
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-black/10 bg-white">
                    <img src={p.image} alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-7 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-[#e10600]/15 blur-xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
                    <div
                      className={cn(
                        "relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border",
                        "border-black/10 bg-white text-[#0b0d10]",
                      )}
                    >
                      <p.Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-xs font-medium uppercase tracking-[0.22em] text-black/55">Hover for depth</div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-black/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f3c51a]" />
                  Supporting Visuals
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

