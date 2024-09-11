import React from 'react'
import Container from '../layout/Container'
import { Check } from 'lucide-react'

const OurMission = () => {
    const items = [
        'Tailored Process',
        'Extensive Expertise',
        'Commitment to your Success',
        'Dedicated Agents',
        'Business Strategy',
        'Seamless Integration'
    ]
    return (
        <div className='py-10 px-4 md:px-10 bg-[#CBD8D3]'>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-[8fr,8fr] w-full rounded-xl px-3 md:px-10 gap-5 md:gap-0">
                    <div className="flex flex-col justify-evenly  items-start gap-4 md:gap-0">
                        <div className="flex flex-col gap-1.5 md:gap-3 text-[#253359]">
                            <h5 className='text-base md:text-lg font-bold'>Our Mission.</h5>
                            <h4 className='text-3xl md:text-5xl font-semibold playfair-display-font mb-2'>Upscale Your Business with Your Support Agent.</h4>
                            <p className='text-sm md:text-base'>Outsourcing Solutions That Connect You with Elite Talent, Enhance Seamless Delegation, and Empower Your Business Growth! <br /><br /> We aim to ensure seamless workflows, personalized solutions, and exceptional results </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                        {items.map((text) => (
                    <div className="flex gap-2 items-center ">
                      <div className="flex my-1 rounded-full p-0.5 h-fit w-fit bg-[#253359]">
                     <Check className='text-white w-[10px] h-[10px] md:w-[15px] md:h-[15px]' strokeWidth={2} />
                      </div>
                      <p className='text-xs md:text-sm text-[#253359]'>{text}</p>
                    </div>
                  ))}
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src='/our-mission.svg'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OurMission