import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Showcase from './components/Showcase.jsx'
import Capabilities from './components/Capabilities.jsx'
import Process from './components/Process.jsx'
import Convictions from './components/Convictions.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Capabilities />
        <Process />
        <Convictions />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
