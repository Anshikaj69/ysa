import React from 'react'

import Container from '../layout/Container';
import {  Slide } from 'react-awesome-reveal';


const Process = () => {
  return (
    <div className='md:px-10 md:pt-8 md:pb-20 px-5 pb-8'>
      <Container>
        <div className="flex flex-col md:gap-8 gap-5 items-center">

          <Slide direction='up' delay={-300}>
            <h1 className='text-[#253359] 2xl:text-5xl md:text-4xl text-xl font-bold playfair-display-font text-center'>Our Process</h1>
          </Slide>
          <div className='flex flex-col md:flex-row w-[95%] md:gap-[3%] gap-4 items-center justify-center'>

            <div className='bg-[#CBD8D3] flex flex-col md:gap-7 gap-3  2xl:py-10 md:py-7 py-4 xl:py-8 rounded-2xl justify-center items-center 2xl:w-[31%] md:w-[29%] w-full'>
              <img src='/step1.svg' className='md:h-14 h-9'/>
              <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl md:text-sm text-xs w-fit'>STEP 1</p>
              <p className='text-[#253359] text-center font-semibold md:text-lg text-base'>Select a <br />Marketing Plan</p>
            </div>

            <div className='bg-[#F4F3F1] flex flex-col md:gap-7 gap-3 2xl:py-10 md:py-7 py-4 xl:py-8 rounded-2xl justify-center items-center 2xl:w-[31%] md:w-[29%] w-full'>
              <img src='/step2.svg' className='md:h-14 h-9'/>
              <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl md:text-sm text-xs w-fit'>STEP 2</p>
              <p className='text-[#253359] text-center font-semibold md:text-lg text-base'>Choose your<br /> Agents</p>
            </div>

            <div className='bg-[#D4DFED] flex flex-col md:gap-7 gap-3 2xl:py-10 md:py-7 xl:py-8 py-4 rounded-2xl justify-center items-center 2xl:w-[31%] md:w-[29%] w-full'>
              <img src='/step3.svg' className='md:h-14 h-9'/>
              <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl md:text-sm text-xs w-fit'>STEP 3</p>
              <p className='text-[#253359] text-center font-semibold md:text-lg text-base'>Schedule a Call on <br /> the Calendar</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Process