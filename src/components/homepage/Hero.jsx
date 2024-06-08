import React from 'react'
import {Navbar} from '../layout'
import hero from '/home.svg'

const Hero = () => {
  return (
    <div className='px-40 pt-6 bg-[#F4F3F1] pb-24' 
    style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Navbar></Navbar>

      <div className='flex justify-between gap-10 py-24 w-full items-start  '>
        <div className=' flex flex-col gap-10 pt-16'>
          <h1 className='text-[#253359] text-5xl font-bold playfair-display-font'>Enhance Efficiency. <br></br> Upscale Your Business.</h1>
          <p className='text-[#253359] max-w-lg text-xl font-normal'>Outsourcing Solutions That Connect You with Elite Talent, Enhance Seamless Delegation, and Empower Your Business Growth!</p>
        </div>
        <div>
          <img src='/heroImg.svg' alt='Hero image'></img>
        </div>
      </div>
    </div>
  )
}

export default Hero