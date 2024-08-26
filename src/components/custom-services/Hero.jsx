import React, { useState, useEffect } from 'react'
import Container from '../layout/Container';
import { Fade, Slide } from 'react-awesome-reveal';
import { Skeleton } from '@mui/material';

const Hero = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className='md:px-10 px-3 pt-6 2xl:mt-20 md:mt-10'>
            <Container>
                <div className='flex flex-col md:flex-row md:py-20 pb-9 pt-20 w-full justify-center items-center md:gap-10 gap-5'>
                    <div className='flex flex-col md:gap-8 gap-3 2xl:w-[52%] md:w-[55%] xl:w-[50%]  self-center justify-center xl:max-w-2xl max-w-3xl'>
                        <Slide direction='left' duration={1500} delay={-800}>
                            <h1 className='text-[#253359] 2xl:text-5xl md:text-4xl text-xl text-center md:text-left font-bold playfair-display-font leading-tight text-wrap'>
                            Tailored Solutions for Your <em>Unique</em> Business Needs
                            </h1>
                        </Slide>
                        <Slide direction='left' duration={1500} delay={-800}>
                            <p className='text-[#253359] xl:text-lg md:text-base text-sm text-center md:text-left font-normal 2xl:max-w-xl max-w-2xl '>
                            At Your Support Agent, we believe that every business is unique, and so are its challenges and opportunities. That’s why we offer custom services designed to meet your specific goals and industry dynamics. Whether you need a cutting-edge blockchain solution, a dynamic 3D site, or custom software development, we have the expertise to bring your vision to life.
                            </p>
                        </Slide>
                    </div>
                    <div className='img-container 2xl:w-[46%] md:w-[45%]  xl:w-[50%] flex items-center'>
                        {isLoading && (
                            <Skeleton variant="rounded" width={2048} height={268} sx={{ bgcolor: 'grey.200' }} />
                        )}
                        <Fade>
                            <img src='https://futuresoftindia.com/assets/images/Custom-Development-highress.png'
                             className='w-fit h-fit' onLoad={handleImageLoad} ></img>
                        </Fade>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero