import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

function Abouts() {
  return (
 <div>
    <Navbar/>
    <div className="min-h-screen">
    <About/>
    </div>
    <Footer/>
 </div>
  )
}

export default Abouts