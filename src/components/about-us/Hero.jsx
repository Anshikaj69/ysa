import React from 'react'
import Container from '../layout/Container'
import { Star } from 'lucide-react'

const Hero = () => {
    return (
        <div className='px-4 md:px-10 mt-[78px] md:mt-[110px] 2xl:mt-[120px] bg-white'>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-[6fr,8fr] bg-[#253359] w-full rounded-xl p-10 text-white">
                    <div className="flex flex-col justify-evenly  items-start ">
                        <div className="flex flex-col gap-3">
                        <h5 className='text-base'>Pleasure and so read the was hope.</h5>
                        <h4 className='text-5xl font-semibold playfair-display-font mb-2'>What makes us different ?</h4>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
                        </div>
                        <div className="flex gap-3 justify-center items-center">
                            <div className="flex">
                                <img src='/profile.svg' />
                            </div>
                            <div className="flex flex-col">
                                <p>Rated 4.9/5 stars</p>
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
                            <img src='/why-us-hero.svg' className='absolute top-[20%] left-[35%]' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero