import React from 'react'
import Container from '../layout/Container'
import { Star } from 'lucide-react'

const Hero = () => {
    return (
        <div className='px-4 md:px-10 mt-[98px] md:mt-[110px] 2xl:mt-[120px] bg-white'>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-[6fr,8fr] bg-[#253359] w-full rounded-xl md:p-10 py-10 px-4 text-white gap-5 md:gap-0">
                    <div className="flex flex-col justify-evenly items-start gap-2 md:gap-0">
                        <div className="flex flex-col gap-1 md:gap-3">
                        <h5 className='text-sm md:text-base'>Elite offshore talent to support your business needs</h5>
                        <h4 className=' text-4xl md:text-5xl font-semibold playfair-display-font mb-2'>What makes us different ?</h4>
                        <p className='text-sm md:text-base'>Your Support Agent is here to you scale your business faster and more affordably with our individual or team plan for only one low price of $2999</p>
                        </div>
                        <div className="hidden md:flex gap-3 justify-center items-center">
                            <div className="flex">
                                <img src='/profile.svg' />
                            </div>
                            <div className="flex flex-col">
                                <p className='text-xs md:text-base'>Rated 4.9/5 stars</p>
                                <div className="flex gap-0.5">
                                    <Star fill='white' />
                                    <Star fill='white' />
                                    <Star fill='white' />
                                    <Star fill='white' />
                                    <Star fill='white' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col relative w-full items-center justify-center">
                        <div className="flex">
                            <img src='/why-us-hero-blur.svg' className='relative' />
                        </div>
                        <div className="flex">
                            <img src='/why-us-hero.svg' className='absolute top-[10%] md:top-[15%] left-[7%] md:left-[35%]' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero