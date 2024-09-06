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
              <h1 className='text-[#253359] text-xl md:text-4xl 2xl:text-5xl font-bold playfair-display-font text-center md:text-left'>Empowering Businesses Through Digital Transformation
              and Global Talent</h1>
            </Slide>
            
            <Slide direction='left' duration={1500} delay={-800} >
              <p className='text-[#253359] md:max-w-lg 2xl:max-w-xl text-sm md:text-base  2xl:text-xl font-normal text-center md:text-left'>On a mission to help businesses thrive by automating processes, connecting them with skilled overseas talent, and creating tailored marketing strategies.</p>
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