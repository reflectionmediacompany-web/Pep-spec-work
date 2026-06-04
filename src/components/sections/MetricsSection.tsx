import { motion } from 'framer-motion'

const metrics = [
  { value: '120M+', label: 'Reach' },
  { value: '18.9%', label: 'Engagement' },
  { value: '250K', label: 'User Generated Content' },
  { value: '1.8M', label: 'Store Visits' },
  { value: '+24%', label: 'Sales Growth' },
]

export default function MetricsSection() {
  return (
    <section id="metrics" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="section-tag">Success Metrics</span>
          <h2 className="display-medium">Campaign KPIs that prove creative strategy drives business impact.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="metric-card"
            >
              <div className="metric-number">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
