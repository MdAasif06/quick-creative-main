import React from 'react'
import Navbar from './components/Navbar'

import WhyTrustUs from './components/WhyTrustUs'
import Hero from "./components/Hero"
import Footer from './components/Footer'
import CTASection from './components/CTASection'
import ServicesTree from './components/ServicesTree'
import ProcessFlow from './components/ProcessFlow'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
       <ServicesSection/>
       <CTASection/>
      <ServicesTree/>
      <ProcessFlow/>
      <WhyTrustUs/>
      <Footer/>
    </div>
  )
}

export default App
