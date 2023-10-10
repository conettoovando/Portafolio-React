import './App.css'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import SobreMi from './Components/SobreMi'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import {projects as projectsData} from './mocks/projects.json'

function App() {
  return (
    <>
      <Navbar />
      <section id="inicio"><Slider /></section>
      <section id="sobremi"><SobreMi /></section>
      <section id="proyectos"><Projects projects={projectsData}/></section>
      <section id="contacto"><Contact /></section>
    </>
  )
}

export default App
