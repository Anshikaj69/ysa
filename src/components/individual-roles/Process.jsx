import React from 'react'

import Container from '../layout/Container';
import {  Slide } from 'react-awesome-reveal';


const Process = () => {
  return (
    <div className=' md:mt-20 pt-10 mt-14 xl:mx-20 md:mx-10 mx-4 mb-6 md:mb-14'>
      <Container>
        <div className="flex flex-col gap-4 md:gap-8 items-center">

          <Slide direction='up' delay={-300}>
            <h1 className='text-[#253359]  md:text-4xl text-xl font-bold playfair-display-font text-center'>The YSA Process</h1>
          </Slide>
          <div className='flex flex-col md:flex-row w-[95%] md:gap-[3%] gap-4 items-center justify-center'>

            <div className='bg-[#F4F3F1] flex md:gap-7 gap-3  2xl:py-10 md:py-7 xl:py-8 p-3 rounded-2xl justify-center items-center '>
              <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl text-xs md:text-sm w-fit'>STEP 1</p>
              <p className='text-[#253359] text-center font-semibold text-sm md:text-lg'>Choose individual<br /> Agents</p>
              <img src='/step2.svg' className='h-10 md:h-14'/>
            </div>

            <div className='bg-[#D4DFED] flex md:gap-7 gap-3 2xl:py-10 md:py-7 xl:py-8  p-3 rounded-2xl justify-center items-center  '>
              <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl text-xs md:text-sm w-fit'>STEP 2</p>
              <p className='text-[#253359] text-center font-semibold text-sm md:text-lg'>Schedule a Call on <br /> the Calendar</p>
              <img src='/step3.svg' className='h-10 md:h-14'/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Process