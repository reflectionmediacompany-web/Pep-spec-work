import { motion } from 'framer-motion'

export default function FinalSection() {
  return (
    <section id="final" className="section-padding bg-[#0b0d10] text-white">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag text-[#f3c51a]">Final Slide</span>
          <h2 className="display-medium text-white">PEP helps South Africans create moments that matter.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#d9d9d9]">
            Created as speculative work for Promise Agency, this campaign turns retail into a stage for preparation, connection and pride.
          </p>
          <div className="mt-10 inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
            Spec Work for Promise Agency
          </div>
        </motion.div>
      </div>
    </section>
  )
}
