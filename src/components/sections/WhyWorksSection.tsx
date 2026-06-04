import { motion } from 'framer-motion'

const reasons = [
  'Human insight that shifts PEP from price to pride.',
  'Emotional storytelling that makes retail feel cinematic.',
  'Community participation that turns shoppers into champions.',
  'Scalable content across short-form and conversational channels.',
  'A strategy that balances cultural resonance with measurable growth.',
]

export default function WhyWorksSection() {
  return (
    <section id="why" className="section-padding bg-[#faf5f0]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="section-tag">Why This Works</span>
          <h2 className="display-medium">A campaign grounded in insight, emotion and impact.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="card"
            >
              <div className="text-sm uppercase tracking-[0.25em] text-[#e10600]">Reason {index + 1}</div>
              <p className="mt-4 text-lg font-semibold text-[#111]">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
