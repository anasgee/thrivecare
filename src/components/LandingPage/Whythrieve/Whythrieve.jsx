import React from 'react'
import { FaCertificate } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";



const Whythrieve = () => {

    const data = [
        {
            icon:< MdOutlineSecurity/>,
            title:"Private & Confidential",
            desc:"Feel Comfortably knowing that your information is kept private and secure."
        },
        {
            icon:< FaCertificate/>,
            title:"Liscensed Clinicians",
            desc:"Our clinicians are licensed and trained to provide the best care possible.",
        },
        {
            icon:< MdOutlinePersonalInjury/>,
            title:"Tailored Care",
            desc:"We provide personalized care that is tailored to your unique needs.",
        },
        {
            icon:< BsFillCheckCircleFill/>,
            title:"Ongoing Growth",
            desc:"Our clinicians are dedicated to ongoing growth and development.",
        },
        {
            icon:< GiHealthNormal/>,
            title:"Collaborative Care",
            desc:"We work collaboratively with you to provide the best care possible.",
        },
        {
            icon:< GiHealthNormal/>,
            title:"Peace of Mind",
            desc:"We help you find peace in what is beyond your control.",
        }
    ]

  return (
    <div className='p-10'>
        <div>
            <h1 className='font-bold text-center text-2xl lg:text-5xl '>Why Thrieve <span className='text-primary'>Psychological Services?</span></h1>
            <p className='text-sm max-w-3xl text-center mx-auto mt-4'>At Thrive Psychological Services, our clinicians are dedicated to ongoing growth, providing collaborative and tailored care to meet your needs. We're committed to helping you navigate towards health, make positive changes, and find peace in what's beyond your control.</p>


            <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center gap-10 mt-10'>
                {data.map((item,index)=>{
                return <div key={index}>
                        <div className='bg-white p-10 shadow-lg flex flex-col items-center justify-center gap-4'>
                          
                            <div>
                               <p className='text-2xl text-primary' > {item.icon}</p>
                                </div> 
                            <h1 className='text-primary font-bold'>{item.title} </h1>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
        
    </div>
  )
}

export default Whythrieve