import { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from './components/sections/HeroSection'
import ChallengeSection from './components/sections/ChallengeSection'
import InsightSection from './components/sections/InsightSection'
import BigIdeaSection from './components/sections/BigIdeaSection'
import StrategySection from './components/sections/StrategySection'
import JourneySection from './components/sections/JourneySection'
import EcosystemSection from './components/sections/EcosystemSection'
import MetricsSection from './components/sections/MetricsSection'
import WhyWorksSection from './components/sections/WhyWorksSection'
import FinalSection from './components/sections/FinalSection'
import './App.css'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  const { scrollYProgress } = useScroll()
  const fade = useTransform(scrollYProgress, [0, 0.1], [0.8, 1])

  return (
    <motion.div className="bg-white text-black overflow-hidden" style={{ opacity: fade }}>
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
    </motion.div>
  )
}

export default App
