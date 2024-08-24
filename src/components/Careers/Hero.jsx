import React from 'react'
import Container from '../layout/Container'

const Hero = () => {
    return (
        <div className=' md:mt-12 xl:mt-14 pt-10 mt-14 '>
            <div className="relative md:aspect-[4/1] aspect-[4/1] bg-cover bg-center h-64 w-full"
                style={{ backgroundImage: `url(${'https://recruiterboxwp.wpengine.com/wp-content/uploads/2017/02/hero-bg-workplace-upgrades-1024x360.jpg'})` }}>
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 backdrop-brightness-50 backdrop-blur-sm">
                    <div className="flex flex-col gap-3 text-white">
                    <p className='font-semibold text-2xl md:text-4xl sm:text-2xl sm:max-w-3xl max-w-xs'>Join Our Team of Virtual Assistants</p>
                    <p className='font-medium text-base md:text-lg sm:text-base sm:max-w-3xl max-w-xs'>A wide range of industries where you can make an impact</p>
                    </div>
                </div>
            </div>

            <Container>
                <div className="flex flex-col px-10">
                <p className='text-gray-800 py-8  text-center'>Are you passionate about providing exceptional service? Do you have expertise in a specific industry or skill set? Join our dynamic team of virtual assistants and help businesses across a wide range of industries thrive. At Your Support Agent, we connect talented professionals like you with companies in need of specialized support.</p>
                </div>
            </Container>
        </div>
    )
}

export default Hero