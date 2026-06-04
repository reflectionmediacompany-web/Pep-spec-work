import { motion } from 'framer-motion'

export default function InsightSection() {
  return (
    <section id="insight" className="section-padding bg-[#0b0d10] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 text-center lg:text-left">
        <span className="section-tag text-[#f3c51a]">The Insight</span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="display-large max-w-4xl leading-tight text-white"
        >
          PEP is not where people simply buy products. It is where people prepare for life's important moments.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-2xl text-base leading-8 text-[#dcdcdc] lg:mx-0"
        >
          This insight turns retail from commodity to ceremony—making every visit part of a larger story, and transforming price tags into proof that preparation matters.
        </motion.p>
      </div>
    </section>
  )
}
