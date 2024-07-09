import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Hero from './Component/Hero/Hero'
import CardSection from './Component/CardSection/CardSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CardSection/>
      <CardSection/>
      <Footer/>
    </div>
  )
}

export default App
