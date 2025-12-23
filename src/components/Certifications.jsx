import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCertificate, FaAward, FaClock, FaCloud, FaCubes } from 'react-icons/fa'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      title: 'Azure AI Associate',
      provider: 'Microsoft',
      status: 'In Progress',
      date: 'Dec 2025 - Present',
      description: 'Learning to design and implement AI solutions on Azure, including machine learning, computer vision, and natural language processing.',
      icon: FaCloud,
      color: 'from-cyan-500 to-blue-500',
      inProgress: true,
    },
    {
      title: 'Certified SolidWorks Associate',
      provider: 'Dassault Systèmes',
      status: 'Certified',
      date: 'June 2020 - Present',
      description: 'Professional certification in 3D CAD design using SolidWorks.',
      icon: FaCubes,
      color: 'from-purple-500 to-pink-500',
      inProgress: false,
    },
    // Add more certifications here as you complete them
    // Example:
    // {
    //   title: 'TensorFlow Developer Certificate',
    //   provider: 'Google',
    //   status: 'Certified',
    //   date: 'Jan 2024',
    //   description: 'Deep learning and neural networks with TensorFlow',
    //   icon: SiTensorflow,
    //   color: 'from-orange-500 to-yellow-500',
    //   inProgress: false,
    // },
  ]

  return (
    <section id="certifications" className="py-20 md:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            CERTIFICATIONS & COURSES
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#151515] border border-cyan-500/20 p-6 hover:border-cyan-500/50 
                         transition-all group relative overflow-hidden"
              >
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  {cert.inProgress ? (
                    <span className="flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-400 
                                   text-xs border border-yellow-500/30 font-medium uppercase tracking-wider">
                      <FaClock size={12} />
                      In Progress
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-400 
                                   text-xs border border-green-500/30 font-medium uppercase tracking-wider">
                      <FaAward size={12} />
                      Certified
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <cert.icon className="text-cyan-400 text-4xl group-hover:scale-110 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Provider */}
                <div className="flex items-center gap-2 mb-3">
                  <FaCertificate className="text-cyan-500 text-sm" />
                  <span className="text-gray-400 font-medium">{cert.provider}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-500 text-sm">{cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Progress bar for in-progress courses */}
                {cert.inProgress && (
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">Progress</span>
                      <span className="text-xs text-cyan-400 font-medium">Ongoing</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${cert.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: '60%' } : {}}
                        transition={{ delay: 0.5, duration: 1 }}
                      />
                    </div>
                  </div>
                )}

                {/* Gradient bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} 
                               opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
