import { BriefcaseBusinessIcon, PhoneCallIcon, UsersIcon } from 'lucide-react'
import React from 'react'

const ProcessCard = () => {
  return (
    <div className='flex flex-col gap-3 poppins'>
        <h1 className='text-black text-lg font-bold'>Resolve Your Growth Pains</h1>
        <div className='bg-white border-2 border-[#4d4dffc6] flex gap-3 px-3 py-3 rounded-lg justify-start items-center w-full  '>
            <BriefcaseBusinessIcon className='text-[#4D4DFF] h-7 w-7'/>
            <div className="flex flex-col">
              <p className='text-black font-semibold text-sm'>Marketing Plan + 3 Agents</p>
              <p className='text-gray text-xs '>Starting at $4500</p>
              </div>
            </div>

            <div className='bg-white border-2 border-[#9000ffc9]  flex gap-3 px-3 py-3 rounded-lg justify-start items-center w-full '>
            <UsersIcon className='text-[#8F00FF] h-7 w-7'/>
            <div className="flex flex-col">
              <p className='text-black font-semibold text-sm capitalize'>Pick as Many Agents</p>
              <p className='text-gray text-xs '>Part Time/ Full Time $9.50/hr</p>
              </div>
            </div>

            <div className='bg-white border-2 border-[#ff00ffbc] flex gap-3 px-3 py-3 rounded-lg justify-start items-center w-full '>
            <PhoneCallIcon className='text-[#FF00FF] h-7 w-7'/>
            <div className="flex flex-col">
              <p className='text-black font-semibold text-sm capitalize'>Book a Call</p>
              <p className='text-gray text-xs '>Schedule Your Success Today!</p>
              </div>
            </div>

    </div>
  )
}

export default ProcessCard