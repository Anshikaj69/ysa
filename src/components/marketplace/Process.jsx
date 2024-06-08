import React from 'react'

const Process = () => {
  return (
    <div className='flex flex-col px-40 py-8 gap-8 items-center'>
      <h1 className='text-[#253359] text-5xl font-bold playfair-display-font text-center'>Our Process</h1>

      <div className='flex w-[95%] gap-[3%]'>

      <div className='bg-[#F4F3F1] flex flex-col gap-7  py-10 rounded-2xl justify-center items-center w-[31%]'>
        <img src='/step1.svg'/>
       <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl text-sm w-fit'>STEP 1</p>
       <p className='text-[#253359] text-center font-semibold text-lg'>Select a <br/>Marketing Plan</p>
      </div>

      <div className='bg-[#CBD8D3] flex flex-col gap-7  py-10 rounded-2xl justify-center items-center w-[31%]'>
        <img src='/step2.svg'/>
       <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl text-sm w-fit'>STEP 2</p>
       <p className='text-[#253359] text-center font-semibold text-lg'>Choose your<br/> Agents</p>
      </div>

      <div className='bg-[#D4DFED] flex flex-col gap-7 py-10 rounded-2xl justify-center items-center w-[31%]'>
        <img src='/step3.svg'/>
       <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl text-sm w-fit'>STEP 3</p>
       <p className='text-[#253359] text-center font-semibold text-lg'>Schedule a Call on <br/> the Calendar</p>
      </div>
      </div>
    </div>
  )
}

export default Process