import { BarChart3, Footprints, LineChart, MessageSquareQuote, UsersRound } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionShell from "@/components/ui/SectionShell";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { cn } from "@/lib/utils";

type Metric = {
  title: string;
  value: number;
  format: (v: number) => string;
  Icon: typeof BarChart3;
  accent: "red" | "yellow";
};

function metricAccent(accent: Metric["accent"]) {
  return accent === "red" ? "bg-[#e10600]" : "bg-[#f3c51a]";
}

export default function MetricsSection() {
  const metrics: Metric[] = [
    { title: "Reach", value: 18000000, format: (v) => `${Math.round(v / 1000000)}M`, Icon: UsersRound, accent: "red" },
    { title: "Engagement", value: 62, format: (v) => `${v / 10}%`, Icon: BarChart3, accent: "yellow" },
    { title: "User Generated Content", value: 120000, format: (v) => `${Math.round(v / 1000)}k`, Icon: MessageSquareQuote, accent: "red" },
    { title: "Store Visits", value: 9, format: (v) => `+${v}%`, Icon: Footprints, accent: "yellow" },
    { title: "Sales Growth", value: 41, format: (v) => `+${v / 10}%`, Icon: LineChart, accent: "red" },
  ];

  return (
    <SectionShell id="metrics" variant="dark" eyebrow="Success Metrics" title="Designed to perform—measured to prove.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m, idx) => (
          <Reveal key={m.title} delay={0.03 * idx}>
            <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(520px_220px_at_20%_20%,rgba(227,6,0,0.14),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(540px_240px_at_80%_85%,rgba(243,197,26,0.12),transparent_60%)]" />
              </div>

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/65">{m.title}</div>
                  <div className="mt-4 font-[var(--font-display)] text-5xl leading-[0.9] tracking-[-0.04em] text-white">
                    <AnimatedNumber value={m.value} format={m.format} />
                  </div>
                </div>
                <div className="relative">
                  <div className={cn("absolute inset-0 rounded-2xl blur-xl opacity-60", m.accent === "red" ? "bg-[#e10600]/40" : "bg-[#f3c51a]/40")} />
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white">
                    <m.Icon className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8 h-[2px] w-full rounded-full bg-white/10">
                <div className={cn("h-[2px] rounded-full", metricAccent(m.accent))} style={{ width: `${72 - idx * 6}%` }} />
              </div>

              <div className="relative z-10 mt-6 text-sm leading-relaxed text-white/70">
                {m.title === "Reach"
                  ? "High-reach storytelling that feels premium, not promotional."
                  : m.title === "Engagement"
                    ? "Formats engineered for comments, shares, and saves."
                    : m.title === "User Generated Content"
                      ? "A challenge built for volume and emotional authenticity."
                      : m.title === "Store Visits"
                        ? "Digital momentum translated into real-world footfall."
                        : "Stronger brand preference drives measurable uplift."}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

