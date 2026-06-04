import { Film, Hash, Users, MessageCircle, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Real Stories Content Series',
    description: 'Cinematic episodes that show preparation rituals before life’s key moments.',
    icon: Film,
  },
  {
    title: '#MyPEPMoment Challenge',
    description: 'A social movement inviting consumers to share their most meaningful prep moments.',
    icon: Hash,
  },
  {
    title: 'Creator Partnerships',
    description: 'Local voices and talent telling authentic stories across retail environments.',
    icon: Users,
  },
  {
    title: 'WhatsApp Community Hub',
    description: 'A conversation platform that connects customers with tips, offers and local inspiration.',
    icon: MessageCircle,
  },
  {
    title: 'Community Impact Content',
    description: 'Stories of neighbourhood support, shared pride and collective preparation.',
    icon: Sparkles,
  },
]

export default function StrategySection() {
  return (
    <section id="strategy" className="section-padding bg-[#f9f4f0]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="section-tag">Strategy Section</span>
          <h2 className="display-medium">Five pillars built for participation and proof.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -8 }}
                viewport={{ once: true, amount: 0.2 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="pillar-card"
              >
                <div className="pillar-icon text-[#e10600]">
                  <Icon size={36} />
                </div>
                <h3 className="text-xl font-semibold text-[#111]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4d4d4d]">{pillar.description}</p>
                <div className="mt-6 h-48 rounded-3xl bg-gradient-to-br from-[#fff0ee] via-[#fff7ec] to-[#fffefc] p-4 text-sm text-[#8a8a8a]">
                  <div className="h-full rounded-3xl border border-[#f0e0d8] bg-white/90 p-6 shadow-[0_20px_60px_rgba(227,6,0,0.06)]">
                    Supporting visuals for {pillar.title.toLowerCase()}.
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
