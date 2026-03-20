import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import { menuData } from './data/menu'
import BackToTopComponent from './components/BackToTopComponent'

const App = () => {
  return (
    // <div className="min-h-screen h-auto bg-fixed bg-cover bg-center bg-[url('/img/background.png')]">
    <div className="fixed inset-0 -z-10">
      <img 
        src="/img/background.png"
        className="w-full h-full object-cover"
      />
    {/* </div> */}

      <Navbar items={menuData}/>
      <Hero />
      <About />
      <Skills />

      <BackToTopComponent />

    </div>
  )
}

export default App
