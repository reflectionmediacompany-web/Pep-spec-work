import Reveal from "@/components/motion/Reveal";
import SectionShell from "@/components/ui/SectionShell";
import { textToImageUrl } from "@/utils/images";

export default function ChallengeSection() {
  const img = textToImageUrl(
    "premium documentary photography, South African family shopping for back-to-school essentials, candid emotion, clean modern composition, subtle red accents, film grain, no text, no logos, ultra realistic",
    "landscape_4_3",
  );

  return (
    <SectionShell id="challenge" eyebrow="The Challenge" title="Affordable is known. Meaning is earned.">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-base leading-relaxed text-black/75 sm:text-lg">
              Many consumers see PEP as the go-to for value. That perception is powerful—yet it also limits the brand to a single
              dimension: price.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-5 text-base leading-relaxed text-black/70 sm:text-lg">
              The opportunity is to deepen emotional connection by reframing PEP as part of the preparation ritual behind life’s
              most important moments—from first school shoes to family celebrations.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur">
                <div className="text-xs font-medium uppercase tracking-[0.22em] text-black/60">Current Perception</div>
                <div className="mt-2 text-lg font-semibold tracking-[-0.01em] text-black">Low price. Fast purchase.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur">
                <div className="text-xs font-medium uppercase tracking-[0.22em] text-black/60">Strategic Shift</div>
                <div className="mt-2 text-lg font-semibold tracking-[-0.01em] text-black">Life moments. Shared pride.</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_30px_70px_rgba(11,13,16,0.12)]">
              <img src={img} alt="Family preparing for an important moment" className="h-[360px] w-full object-cover sm:h-[420px]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-6">
                <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/75">Reframe the story</div>
                <div className="mt-2 text-lg font-semibold tracking-[-0.01em] text-white">
                  From “best price” to “best preparation.”
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}

