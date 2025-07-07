import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../LandingPage/HeroSection/HeroSection'
import Logos from '../LandingPage/Logos/Logos'
import Therapiest from '../LandingPage/Therapiest/Therapiest'
import Whythrieve from '../LandingPage/Whythrieve/Whythrieve'

const HomepageClientSide = () => {
  return (
    <div className='bg-navbar min-h-screen'>
        <Navbar/>    
        <HeroSection/>
        <Logos/>
        <Therapiest/>
        <Whythrieve/>
    </div>
  )
}

export default HomepageClientSide