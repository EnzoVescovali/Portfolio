import React from 'react'
import "./styles/reset.css"
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Hero from './sections/hero/hero'
import Projects from './sections/projects/projects'
import Contact from './sections/contact/contact'
import Toaster from './components/toaster/toaster'

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