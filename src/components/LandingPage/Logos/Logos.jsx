import React from 'react'


const Logos = () => {
  const logos = [
    { src: '/logo/1.png', alt: 'Logo 1' },
    { src: '/logo/2.png', alt: 'Logo 2' },
    { src: '/logo/3.png', alt: 'Logo 3' },
    { src: '/logo/4.png', alt: 'Logo 4' },
    { src: '/logo/5.png', alt: 'Logo 5' },
    { src: '/logo/6.png', alt: 'Logo 6' }
  ]
  
  return (
    <div className='w-full relative z-50 mx-auto '>
        <img className='w-full -mt-24 lg:-mt-[200px] z-50' src="/images/hero_img.png" alt="Hero"  />

      <div className='grid grid-cols-3 lg:grid-cols-6 p-10 ' >
    {
      logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className='w-1/2 mx-auto my-4'
        />
      ))
    }
      </div>
    </div>

  )
}

export default Logos
