import ScrollProgress from "@/components/motion/ScrollProgress";
import BigIdeaSection from "@/components/sections/BigIdeaSection";
import ChallengeSection from "@/components/sections/ChallengeSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import FinalSection from "@/components/sections/FinalSection";
import HeroSection from "@/components/sections/HeroSection";
import InsightSection from "@/components/sections/InsightSection";
import JourneySection from "@/components/sections/JourneySection";
import MetricsSection from "@/components/sections/MetricsSection";
import StrategySection from "@/components/sections/StrategySection";
import WhyWorksSection from "@/components/sections/WhyWorksSection";

export default function Home() {
  return (
    <div className="relative">
      <ScrollProgress />
      <main>
        <HeroSection />
        <ChallengeSection />
        <InsightSection />
        <BigIdeaSection />
        <StrategySection />
        <JourneySection />
        <EcosystemSection />
        <MetricsSection />
        <WhyWorksSection />
        <FinalSection />
      </main>
    </div>
  );
}
