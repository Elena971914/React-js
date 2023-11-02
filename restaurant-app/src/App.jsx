import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './components/About'
import BackToTop from './components/BackToTop'
import Daily from './components/Daily'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Spinner from './components/Spinner'

function App() {
  return(
    <div className="container-xxl bg-white p-0">
      {/* <Spinner /> */}
      <Navbar />
      <About />
      <Service />
      <Menu />
      <Daily />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
