import React from 'react'
import { Navbar } from '../layout'
import hero from '/home.svg'
import Container from '../layout/Container'
import { Fade, Slide } from 'react-awesome-reveal'
import Video from './Video'

const Hero = () => {
  return (
    <div className='px-10 pt-7 md:mt-[94px] 2xl:mt-[100px] bg-[#F4F3F1] pb-24'
      style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Container>
        <div className='flex justify-between gap-5 xl:gap-10 2xl:gap-8 pt-10 pb-36 2xl:pt-10 2xl:pb-30 w-full items-start  '>
          <div className=' flex flex-col gap-10 2xl:pt-16 md:pt-20 w-[50%]'>

            <Slide direction='left' duration={1500} delay={-800} >
              <h1 className='text-[#253359] text-5xl 2xl:text-6xl font-bold playfair-display-font'>Enhance Efficiency. <br></br> Upscale Your Business.</h1>
            </Slide>
            
            <Slide direction='left' duration={1500} delay={-800} >
              <p className='text-[#253359] max-w-lg 2xl:max-w-xl text-lg xl:text-xl 2xl:text-2xl font-normal'>Outsourcing Solutions That Connect You with Elite Talent, Enhance Seamless Delegation, and Empower Your Business Growth!</p>
            </Slide>
          </div>
          <div className=' w-[50%] flex justify-end items-end self-end'>
            <Fade>
              <Video />
            </Fade>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero