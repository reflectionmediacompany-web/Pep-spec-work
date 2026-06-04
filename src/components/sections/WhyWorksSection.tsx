import Reveal from "@/components/motion/Reveal";
import SectionShell from "@/components/ui/SectionShell";

const reasons = [
  { title: "Human insight", detail: "Built around real preparation rituals—not generic brand claims." },
  { title: "Emotional storytelling", detail: "Cinematic moments elevate value into pride and possibility." },
  { title: "Community participation", detail: "UGC turns the idea into culture, not a campaign headline." },
  { title: "Scalable content", detail: "A format system that can evolve across seasons and life moments." },
  { title: "Business impact", detail: "A narrative designed to move both hearts and metrics." },
];

export default function WhyWorksSection() {
  return (
    <SectionShell id="why" eyebrow="Why This Works" title="Strategy that feels like truth.">
      <div className="grid gap-5 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-base leading-relaxed text-black/75 sm:text-lg">
              The work avoids “discount brand” tropes by focusing on what affordability enables: moments people care about.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-9 rounded-3xl border border-black/10 bg-white/70 p-6 backdrop-blur">
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-black/55">Guiding line</div>
              <div className="mt-3 font-[var(--font-display)] text-3xl leading-[1.02] tracking-[-0.03em] text-black">
                Price becomes a proof of care.
              </div>
              <div className="mt-5 text-sm leading-relaxed text-black/65">
                Every channel execution reinforces the same emotional tension: “I want to show up for the moment” vs “I need it to be
                possible.”
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, idx) => (
              <Reveal key={r.title} delay={0.04 * idx}>
                <div className="rounded-3xl border border-black/10 bg-white/70 p-6 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-medium uppercase tracking-[0.22em] text-black/55">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-lg font-semibold tracking-[-0.02em] text-black">{r.title}</div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-[#e10600]" />
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-black/65">{r.detail}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

