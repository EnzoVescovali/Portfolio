import { lazy } from "react"
import "./styles/reset.css"
import Navbar from "./components/navbar/navbar"
const Hero = lazy(() => import("./sections/hero/hero"))
const Projects = lazy(() => import("./sections/projects/projects"))
const Contact = lazy(() => import("./sections/contact/contact"))
const Footer = lazy(() => import("./components/footer/footer"))
const Toaster = lazy(() => import("./components/toaster/toaster"))

const App = () => {
  return (
    <>
      <Toaster/>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App