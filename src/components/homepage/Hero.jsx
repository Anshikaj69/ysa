import React from 'react'
import Container from '../layout/Container'
import { Fade, Slide } from 'react-awesome-reveal'
import Video from './Video'

const Hero = () => {
  return (
    <div className=' px-4 md:px-10 mt-[78px] md:mt-[94px] 2xl:mt-[100px] bg-[#CBD8D3]'
    >
      <Container>
        <div className='flex flex-col md:flex-row justify-between gap-5 xl:gap-10 2xl:gap-8 pt-8 pb-8 w-full items-start  '>
          <div className=' flex flex-col gap-3 md:gap-10 2xl:pt-16 md:pt-20 md:w-[50%]'>

            <Slide direction='left' duration={1500} delay={-700} >
              <h1 className='text-[#253359] text-xl md:text-4xl  font-bold playfair-display-font text-center md:text-left'>Expert Outsourcing for Seamless Business Growth <br/> — Empower Your Team with Skilled Agents Ready to Drive Results!</h1>
            </Slide>
            
            <Slide direction='left' duration={1500} delay={-800} >
              <p className='text-[#253359] md:max-w-lg 2xl:max-w-xl text-sm md:text-base  2xl:text-xl font-normal text-center md:text-left'>
              Whether you need administrative, technical, or marketing support, our dedicated agents are ready to handle the workload. Scale your business efficiently, reduce overhead costs, and focus on what matters most — we've got the rest covered.
              </p>
            </Slide>
          </div>
          <div className=' md:w-[50%] flex justify-end items-end self-end'>
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