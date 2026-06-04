import { motion } from 'framer-motion'

export default function ChallengeSection() {
  return (
    <section id="challenge" className="section-padding bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2"
        >
          <p className="section-tag">The Challenge</p>
          <h2 className="display-medium max-w-xl">PEP is known for affordability. The creative challenge is giving price feeling a new emotional value.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#4d4d4d]">
            Many consumers see PEP as an affordable retailer. The opportunity is to shift that perception from cheapness to preparation, from transaction to meaningful moments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:w-1/2"
        >
          <div className="card border-black/10 bg-black/5">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#e10600]">Why this matters</span>
              <p className="text-lg font-semibold text-[#111]">The brand lives in moments before the moment—school prep, family celebrations and everyday pride.</p>
              <p className="text-sm leading-7 text-[#4d4d4d]">
                The strategy creates feelings around readiness, optimism and community, using retail as the stage for emotional storytelling.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
