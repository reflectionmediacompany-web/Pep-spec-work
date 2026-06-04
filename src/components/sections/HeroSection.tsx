import { motion } from 'framer-motion'

const navItems = [
  { label: 'Challenge', href: '#challenge' },
  { label: 'Insight', href: '#insight' },
  { label: 'Big Idea', href: '#bigidea' },
  { label: 'Strategy', href: '#strategy' },
  { label: 'Metrics', href: '#metrics' },
]

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen bg-gradient-to-b from-white via-[#fff8f3] to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-80 h-80 rounded-full bg-red-200/20 blur-3xl" />
        <div className="absolute right-0 top-24 w-72 h-72 rounded-full bg-yellow-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-8 lg:py-12">
        <header className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#bb0b00]">Promise Agency Spec Work</p>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#e5e5e0] bg-white/80 px-4 py-2 text-sm font-semibold text-[#333] backdrop-blur">
              Cannes Lions-worthy creative direction
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#272727]">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#e10600]">
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="relative z-10 mt-16 flex flex-1 flex-col justify-center gap-12 lg:mt-24 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="section-tag"
            >
              PEP – More Than Just a Price Tag
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="display-large max-w-3xl"
            >
              A Digital Communications Strategy created for Promise Agency.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="max-w-xl text-base leading-8 text-[#4d4d4d]"
            >
              A premium campaign narrative built for South African retail, blending cinematic shopping atmospheres, emotional family rituals, and modern motion-led storytelling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            >
              <a href="#challenge" className="cta-button">
                See the strategy
              </a>
            </motion.div>
          </div>

          <div className="relative grid gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hero-card"
            >
              <div className="hero-card-label">Cinematic Retail Atmosphere</div>
              <div className="hero-card-image bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.12),_transparent_40%),rgba(11,13,16,0.03)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hero-card"
            >
              <div className="hero-card-label">Emotional Family Moments</div>
              <div className="hero-card-image bg-[radial-gradient(circle_at_center,_rgba(227,6,0,0.14),_transparent_50%),rgba(243,197,26,0.05)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hero-card sm:col-span-2"
            >
              <div className="hero-card-label">Modern Motion Effects</div>
              <div className="hero-card-image bg-[radial-gradient(circle_at_left,_rgba(227,6,0,0.18),_transparent_40%),rgba(11,13,16,0.05)]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
