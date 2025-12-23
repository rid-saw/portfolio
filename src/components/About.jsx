import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-[#0f0f0f] relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            ABOUT ME
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-cyan-500 mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Recent <span className="text-cyan-400 font-semibold">Master of Artificial Intelligence</span> graduate 
                from Monash University with strong foundations in ML, DL and NLP concepts, RAG pipelines and agentic AI systems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm passionate about transforming how organizations work through intelligent automation. My experience 
                spans from building <span className="text-cyan-400 font-semibold">multi-agent AI systems</span> to 
                deploying real-world automation in AgTech.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Self-driven learner with a portfolio of personal AI projects demonstrating practical application of 
                LLM technologies. Eager to apply these skills in a business context.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="border-l-2 border-cyan-500 pl-6">
                <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                
                <div className="mb-6">
                  <h4 className="text-cyan-400 font-semibold text-lg">Master of Artificial Intelligence</h4>
                  <p className="text-gray-400">Monash University</p>
                  <p className="text-gray-500 text-sm">Feb 2024 – Dec 2025 | GPA: 3.375/4.0</p>
                  <p className="text-gray-300 mt-2 text-sm">
                    Coursework: Machine Learning, Deep Learning, NLP, Multi-Agent Systems
                  </p>
                  <p className="text-gray-300 mt-1 text-sm">
                    <span className="text-cyan-400">Thesis (HD):</span> Created novel human-object interaction 
                    dataset for robust computer vision
                  </p>
                </div>

                <div>
                  <h4 className="text-cyan-400 font-semibold text-lg">Bachelor of Mechatronics Engineering (Honours)</h4>
                  <p className="text-gray-400">Monash University</p>
                  <p className="text-gray-500 text-sm">July 2018 – July 2022</p>
                  <p className="text-gray-300 mt-2 text-sm">
                    Coursework: Computer Vision, Robotics, Sensors & Artificial Perception, Control Systems
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-cyan-500 pl-6">
                <h3 className="text-2xl font-bold text-white mb-2">Location</h3>
                <p className="text-gray-300">Melbourne, Victoria, Australia</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
