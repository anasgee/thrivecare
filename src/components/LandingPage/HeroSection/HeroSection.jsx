import React from 'react'
import Logos from '../Logos/Logos'

const HeroSection = () => {
  return (
<div>
   <div className="relative w-full overflow-hidden bg-navbar mb-10">
  <video 
    className="w-full h-auto rounded-b-[100px] lg:rounded-b-[200px] " 
    src="/hero.mp4" 
    autoPlay 
    muted 
    loop 
  />
  <div className="absolute inset-0 flex flex-col bg-black/30 items-center justify-center rounded-b-[200px] text-white z-10">
    <h1 className="text-xl md:text-6xl font-bold mb-4">Welcome to ThriveCare</h1>
    <p className="text-sm md:text-xl mb-8 text-center max-w-2xl">
      Your partner in mental health and wellness, providing compassionate care and support.
    </p>
    <button className="bg-primary text-sm lg:text-base cursor-pointer text-white px-3 py-2 lg:px-6 lg:py-3 rounded-full hover:bg-green-700 transition duration-300">
      Get Started
    </button>
    </div>
</div>
</div>

  )
}

export default HeroSection