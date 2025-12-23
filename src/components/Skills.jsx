import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb,
  SiPytorch, SiTensorflow, SiScikitlearn, SiDocker, SiGit
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'AI/ML & LLMs',
      skills: [
        'LangChain',
        'LangGraph',
        'RAG Pipelines',
        'Prompt Engineering',
        'Multi-Agent Systems',
        'Agentic AI',
        'PyTorch',
        'TensorFlow',
        'Scikit-learn',
        'Hugging Face',
      ],
    },
    {
      title: 'Programming',
      skills: [
        'Python (Advanced)',
        'JavaScript',
        'Java',
        'C++',
        'SQL',
      ],
    },
    {
      title: 'Data & APIs',
      skills: [
        'FastAPI',
        'REST APIs',
        'MongoDB',
        'ChromaDB',
        'Pandas',
        'NumPy',
      ],
    },
    {
      title: 'Automation & Tools',
      skills: [
        'NodeRED',
        'IoT Automation',
        'Git',
        'Docker',
        'JIRA',
        'Gradio',
        'Langfuse',
      ],
    },
    {
      title: 'NLP & Embeddings',
      skills: [
        'Sentence Transformers',
        'Text Processing',
        'Embedding Fine-tuning',
        'Semantic Search',
        'BM25',
      ],
    },
    {
      title: 'Web Development',
      skills: [
        'React',
        'Node.js',
        'Express',
        'Tailwind CSS',
        'Vite',
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            TECHNICAL SKILLS
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="bg-[#151515] border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-all group"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4 group-hover:glow-text transition-all">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-cyan-500/10 text-gray-300 text-sm border border-cyan-500/30 
                               hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech stack icons */}
          <motion.div
            className="mt-16 flex justify-center flex-wrap gap-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            {[SiPython, SiPytorch, SiTensorflow, SiReact, SiNodedotjs, SiMongodb, SiDocker, SiGit].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-600 hover:text-cyan-400 transition-colors"
              >
                <Icon size={40} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
