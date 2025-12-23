import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
