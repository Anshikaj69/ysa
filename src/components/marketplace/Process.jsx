import React from 'react'

import Container from '../layout/Container';
import { Fade, Slide } from 'react-awesome-reveal';


const Process = () => {
  return (
    <div className='px-10 pt-8 pb-20'>
      <Container>
        <div className="flex flex-col  gap-8 items-center">

          <Slide direction='up' delay={-300}>
            <h1 className='text-[#253359] 2xl:text-5xl md:text-4xl font-bold playfair-display-font text-center'>Our Process</h1>
          </Slide>
          <div className='flex w-[95%] gap-[3%] items-center justify-center'>

            <div className='bg-[#CBD8D3] flex flex-col gap-7  2xl:py-10 md:py-7 xl:py-8 rounded-2xl justify-center items-center 2xl:w-[31%] md:w-[29%]'>
              <img src='/step1.svg' />
              <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl text-sm w-fit'>STEP 1</p>
              <p className='text-[#253359] text-center font-semibold text-lg'>Select a <br />Marketing Plan</p>
            </div>

            <div className='bg-[#F4F3F1] flex flex-col gap-7  2xl:py-10 md:py-7 xl:py-8 rounded-2xl justify-center items-center 2xl:w-[31%] md:w-[29%]'>
              <img src='/step2.svg' />
              <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl text-sm w-fit'>STEP 2</p>
              <p className='text-[#253359] text-center font-semibold text-lg'>Choose your<br /> Agents</p>
            </div>

            <div className='bg-[#D4DFED] flex flex-col gap-7 2xl:py-10 md:py-7 xl:py-8 rounded-2xl justify-center items-center 2xl:w-[31%] md:w-[29%]'>
              <img src='/step3.svg' />
              <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl text-sm w-fit'>STEP 3</p>
              <p className='text-[#253359] text-center font-semibold text-lg'>Schedule a Call on <br /> the Calendar</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Process