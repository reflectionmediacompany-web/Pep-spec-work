import { motion } from 'framer-motion'

const ecosystem = [
  { label: 'TikTok', accent: 'bg-gradient-to-br from-[#ea2d1c] to-[#ffb84d]' },
  { label: 'Instagram', accent: 'bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]' },
  { label: 'Facebook', accent: 'bg-gradient-to-br from-[#1877f2] to-[#6f9ffb]' },
  { label: 'YouTube Shorts', accent: 'bg-gradient-to-br from-[#ff0000] to-[#cc0000]' },
  { label: 'WhatsApp', accent: 'bg-gradient-to-br from-[#25d366] to-[#128c7e]' },
]

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="section-padding bg-[#0b0d10] text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="section-tag text-[#f3c51a]">Digital Ecosystem</span>
          <h2 className="display-medium">A connected ecosystem built for modern South African shoppers.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {ecosystem.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="ecosystem-item rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className={`${item.accent} ecosystem-icon mx-auto mb-6`}>
                <span className="text-2xl font-bold">{item.label.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="mt-3 text-sm leading-7 text-[#d9d9d9]">A premium channel for movement, culture and retail conversation.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
