import { motion } from 'framer-motion'

export default function BigIdeaSection() {
  return (
    <section id="bigidea" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">The Big Idea</span>
            <h2 className="display-medium max-w-3xl">More Than Just a Price Tag</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#4d4d4d]">
              A campaign concept that reclaims the price tag as a symbol of preparation, possibility and pride—turning everyday retail journeys into emotional rituals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[32px] border border-[#e5e5e5] bg-[#faf5f0] p-8 shadow-[0_30px_80px_rgba(227,6,0,0.08)]"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#e10600]">Campaign Concept</p>
            <h3 className="mt-4 text-2xl font-semibold text-[#111]">Turn price into proof of care.</h3>
            <p className="mt-4 text-base leading-8 text-[#4d4d4d]">
              We celebrate the moments people prepare for and show that PEP is the partner in that preparation. The price tag becomes evidence of intention, not just cost.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
