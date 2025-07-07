import React from 'react'

const Therapiest = () => {
  return (
    <div className='bg-light-primary w-full text-center py-20 rounded-t-[100px] lg:rounded-t-[300px] p-10'>
        <h1 className='font-bold md:text-2xl lg:text-3xl text-xl'>
            Unique therapists, <span className='text-primary'>personalized</span> care.
        </h1>
        <p  className='lg:w-2/4 text-gray-500 text-sm mx-auto'>
            Unlock personalized healing with therapists as unique as you are. Explore tailored support for your individual journey to well-being.
        </p>
        <div className='lg:w-3/4 mx-auto w-full mt-20'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
               <div>
                 <img src="/images/therapiest1.png" className='' alt="" />
               </div>
                <div className='text-start '>
                    <h2 className='font-bold text-2xl lg:text-3xl mb-4'>
                        Choose a Therapiest as <span className='text-primary'>unique</span> as you are
                    </h2>
                    <p className='text-sm'>Choose a therapist as unique as you are for a personalized and transformative journey. Tailored support crafted just for you, unlocking the path to well-being.</p>
                </div>
            </div>
             <div className='flex flex-col lg:flex-row items-center justify-between gap-10 mt-10'>
              
                <div className='text-start flex-1 order-2 lg:order-1'>
                    <h2 className='font-bold text-2xl lg:text-3xl mb-4'>
                       Schedule a <span className='text-primary'>convenient</span> time that works for you
                    </h2>
                    <p className='text-sm'>Discover seamless scheduling tailored to your needs. Choose a time that suits you best, ensuring effortless and convenient appointments for personalized care.</p>
                </div>
               
                <div className=" w-80 h-64 z-0 order-1 lg:order-2 bg-cyan-100 rounded-[50%_40%_50%_50%/60%_40%_60%_40%]">
                 <img src="/images/therapiest2.png" className='z-50' alt="" /></div>
                 

           

            </div>
             <div className='flex flex-col lg:flex-row items-center justify-between gap-10 mt-10'>
                                  <div className=" w-72 h-64 bg-cyan-100 rounded-[50%_40%_50%_50%/60%_40%_60%_40%]"><img src="/images/therapiest3.png" className='z-50' alt="" />
                                  </div>

                <div className='text-start flex-1 mt-4'>
                    <h2 className='font-bold text-2xl lg:text-3xl mb-4'>
                        Connect <span className='text-primary'>virtually</span> and begin your journey to healing
                    </h2>
                    <p className='text-sm'>Initiate your journey to healing through seamless virtual connections. Explore the path to well-being with the convenience of online sessions, fostering a personalized and supportive experience.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Therapiest