import About from "./components/About"
import Contact from "./components/Contact"
import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Footer from "./components/Footer"

function App() {
  return (
    <div >
      <Navbar />
      <MainContent />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
