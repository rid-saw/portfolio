import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'RAG Research Assistant',
      description: 'Built end-to-end RAG pipeline for querying academic papers with precise source citations, demonstrating practical LLM application. Implemented hybrid retrieval architecture combining semantic vector search and BM25 keyword matching.',
      tech: ['Python', 'LangChain', 'ChromaDB', 'Gemini', 'Sentence Transformers', 'Gradio'],
      highlights: [
        'Fine-tuned sentence transformer embeddings achieving 11% MRR improvement',
        'Designed complete pipeline from document ingestion and chunking to vector storage',
        'LLM-powered response generation with accurate source citations',
      ],
      gradient: 'from-blue-500 to-purple-500',
      github: 'https://github.com/rid-saw/RAG-research-assistant',
      demo: 'https://huggingface.co/spaces/rid-saw/rag-research-assistant',
    },
    {
      title: 'Multi-Agent AI System',
      description: 'Architected agentic AI system with orchestrator delegating tasks to specialist agents (Researcher, Data Analyst, Coder). Built task automation orchestration integrating web search API, database queries, and sandboxed code execution.',
      tech: ['Python', 'LangGraph', 'LangChain', 'Gemini 2.0', 'Langfuse', 'FastAPI', 'Gradio'],
      highlights: [
        'Production-grade observability with Langfuse for tracing complex multi-agent decision chains',
        'Created dual interfaces (REST API + Gradio UI) for seamless integration',
        'Implemented autonomous task delegation and workflow orchestration',
      ],
      gradient: 'from-cyan-500 to-blue-500',
      github: 'https://github.com/rid-saw/multi-agent-ai-tool.git',
    },
    {
      title: 'SMEasy - AI Payment Gateway',
      description: 'AI-powered payment gateway developed at FoundersHack hackathon. Team of 5 reached finals via People\'s Choice award. Implemented ML algorithms to analyze financial data and automate personalized interest rate determination.',
      tech: ['Python', 'Scikit-learn', 'Machine Learning', 'Financial ML'],
      highlights: [
        'Reached hackathon finals via People\'s Choice award',
        'Automated personalized interest rate determination using ML',
        'Rapid prototyping in cross-functional team environment',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Driver Drowsiness Detection',
      description: 'Developed real-time AI system achieving 97% accuracy in drowsiness detection using computer vision. Built complete inference pipeline processing live video feeds for end-to-end solution delivery.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning', 'Computer Vision'],
      highlights: [
        'Achieved 97% detection accuracy using deep learning',
        'Real-time video processing pipeline',
        'Production-ready inference system',
      ],
      gradient: 'from-pink-500 to-red-500',
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            FEATURED PROJECTS
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mb-12" />

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-[#151515] border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 
                         transition-all group"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <FaGithub size={24} />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                          title="Demo"
                        >
                          <FaExternalLinkAlt size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wider">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-cyan-500 mr-2">▹</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs border border-cyan-500/30 
                                 font-medium uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gradient bar */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
