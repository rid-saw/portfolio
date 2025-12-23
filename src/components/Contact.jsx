import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'riddhi.sawant444@gmail.com',
      link: 'mailto:riddhi.sawant444@gmail.com',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Melbourne, Victoria, AU',
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      link: 'https://github.com/rid-saw',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/riddhisaw',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            LET'S CONNECT
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mb-8 mx-auto" />
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm actively seeking opportunities in AI/ML engineering. 
            Let's discuss how I can contribute to your team!
          </p>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.link || undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-[#151515] border border-cyan-500/20 p-6 hover:border-cyan-500/50 
                          transition-all group ${info.link ? 'cursor-pointer' : 'cursor-default'}`}
                whileHover={info.link ? { y: -5 } : {}}
              >
                <info.icon className="text-cyan-400 text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                  {info.label}
                </h3>
                <p className="text-white font-medium">{info.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 mb-12"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#151515] border border-cyan-500/20 p-4 hover:border-cyan-500/50 
                         text-gray-400 hover:text-cyan-400 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center mt-20 pt-8 border-t border-cyan-500/20"
      >
        <p className="text-gray-500 text-sm">
          © 2024 Riddhi Sawant. Built with React, Tailwind CSS & Framer Motion.
        </p>
      </motion.div>
    </section>
  )
}

export default Contact
