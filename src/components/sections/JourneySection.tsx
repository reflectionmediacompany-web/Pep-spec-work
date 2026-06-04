import { motion } from 'framer-motion'

const journey = [
  { title: 'Awareness', label: 'Spark interest through content and retail energy.' },
  { title: 'Engagement', label: 'Invite people to interact with campaign moments.' },
  { title: 'Participation', label: 'Amplify user stories and the #MyPEPMoment movement.' },
  { title: 'Community', label: 'Build deeper local connection through WhatsApp and social hubs.' },
  { title: 'Purchase', label: 'Convert emotion into visits, sales and loyalty.' },
]

export default function JourneySection() {
  return (
    <section id="journey" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="section-tag">Customer Journey</span>
          <h2 className="display-medium">A flow that turns awareness into meaningful purchase moments.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-5">
          {journey.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="journey-item"
            >
              <div className="journey-circle">{index + 1}</div>
              <h3 className="text-lg font-semibold text-[#111]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#555]">{step.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
