import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      role: 'Mechatronics Engineer',
      company: 'Future Farms',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Oct 2022 – Nov 2023',
      type: 'AgTech Startup',
      responsibilities: [
        'Designed and deployed end-to-end automation systems for a 0.5-acre vertical farm, integrating sensors, control logic, and monitoring dashboards',
        'Built real-time monitoring dashboards using Grafana, enabling remote access and data-driven decision making across the organisation',
        'Developed REST APIs and web interfaces for farm control systems, driving adoption of new technology across operations teams',
        'Programmed workflow automation using NodeRED, ESP32, and Raspberry Pi to orchestrate sensors, lighting, and irrigation systems',
        'Delivered solutions in a lean 3-person engineering team, adapting quickly to changing priorities while keeping projects on track',
        'Improved system reliability by 30% through systematic testing and iterative refinement',
      ],
      color: 'cyan',
    },
    {
      role: 'Radio Frequency Engineer (Intern)',
      company: 'N-wave Technologies',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Nov 2021 – Feb 2022',
      type: 'Telecommunications',
      responsibilities: [
        'Analysed network coverage data and generated visualisation plots using Python, enabling data-driven network optimisation',
        'Collaborated with cross-functional engineering teams to identify improvement opportunities and drive efficiency gains',
        'Adapted quickly to new tools and methodologies in a fast-paced telecommunications environment',
      ],
      color: 'blue',
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            EXPERIENCE
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mb-12" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-8 border-l-2 border-cyan-500/30"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] bg-cyan-500 rounded-full border-4 border-[#0a0a0a]" />

                {/* Content */}
                <div className="bg-[#151515] border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-all">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-cyan-400">
                        <span className="font-semibold">{exp.company}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400 text-sm">{exp.type}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
                    </div>
                    <span className="text-cyan-400 font-medium text-sm px-3 py-1 bg-cyan-500/10 border border-cyan-500/30">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start leading-relaxed">
                        <span className="text-cyan-500 mr-3 mt-1.5 flex-shrink-0">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
