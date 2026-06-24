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
      description: 'End-to-end agentic RAG system for querying academic papers with grounded, source-cited answers. Upload PDFs or paste DOIs (resolved via arXiv + Unpaywall) into named libraries; hybrid retrieval and reranking with answers streamed over Server-Sent Events with visible pipeline stages.',
      tech: ['Python', 'FastAPI', 'React + TypeScript', 'ChromaDB', 'BGE + CrossEncoder', 'Mistral', 'MCP SDK', 'Docker'],
      highlights: [
        'Hybrid retrieval (60% BGE semantic + 40% BM25) with BGE CrossEncoder reranking, streamed over SSE',
        'Corrective RAG (CRAG): an LLM grader gates generation or falls back to Tavily web search on user consent, with a refusal token catching over-confident answers',
        'MCP server (official Python SDK) exposes four tools so Claude Desktop and other MCP clients query the same pipeline over stdio',
        'Provider-agnostic LLM client (one env var swaps Mistral / OpenAI / Groq / OpenRouter / Gemini); multi-stage Docker build deployed to Hugging Face Spaces',
      ],
      gradient: 'from-blue-500 to-purple-500',
      github: 'https://github.com/rid-saw/RAG-research-assistant',
      demo: 'https://huggingface.co/spaces/rid-saw/rag-research-assistant',
    },
    {
      title: 'Mnemo',
      description: 'Full-stack notes-to-study-tools web app. FastAPI backend ingests .md/.txt notes and prompts an LLM to generate flashcard decks, scenario-based MCQ quizzes, and navigable domain ontologies — all grounded in the source material — served to a React + Vite frontend with in-browser study UIs.',
      tech: ['Python', 'FastAPI', 'React', 'Vite', 'Jinja2', 'Gemini', 'Anthropic', 'OpenAI', 'Claude Artifacts'],
      highlights: [
        'Provider-agnostic generation layer with swappable Gemini / Anthropic / OpenAI backends behind a single AIClient interface and a Maker template-method hierarchy; same logic powers a CLI entrypoint',
        'Ontology maker runs a multi-step outline-then-parallel-fill pipeline using a thread pool',
        'Each artifact exports to a standalone, self-contained HTML file via a Jinja2 template (zero runtime, opens offline)',
        "Shipped a single-file Claude Artifact version (window.claude.complete() in a sandboxed iframe) published to Anthropic's public artifact marketplace",
      ],
      gradient: 'from-cyan-500 to-blue-500',
      github: 'https://github.com/rid-saw/mnemo',
    },
    {
      title: 'Driver Drowsiness Detection',
      description: 'Real-time computer vision system that detects driver drowsiness from live video. CNN-based facial landmark analysis combined with eye-aspect-ratio calculations, deployed as an end-to-end inference pipeline.',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Computer Vision'],
      highlights: [
        'Achieved 97% classification accuracy using transfer learning and fine-tuning with limited training data',
        'Live-video inference pipeline from capture to real-time driver alerts',
        'CNN-based facial landmark analysis with eye-aspect-ratio detection',
      ],
      gradient: 'from-pink-500 to-red-500',
    },
    {
      title: 'SMEasy',
      description: "AI Engineer in a 5-person cross-functional team at FoundersHack (Monash, RMIT, UniMelb). Built ML models to analyse financial data and determine personalised SME loan interest rates. Reached finals via People's Choice award.",
      tech: ['Python', 'Scikit-learn', 'Financial ML'],
      highlights: [
        'Built ML algorithms for personalised SME loan interest rate determination',
        'Prototyped and shipped a working demo in a 5-person cross-functional team',
        "Reached FoundersHack finals via People's Choice award (Aug 2024)",
      ],
      gradient: 'from-purple-500 to-pink-500',
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
