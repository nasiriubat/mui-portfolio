import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      {/* <Contact /> */}

    </>
  )
}

export default App
