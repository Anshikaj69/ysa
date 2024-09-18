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
        <div className='md:px-10 px-3 pt-6  md:mt-10'>
            <Container>
                <div className='flex flex-col md:flex-row md:pt-20 pb-4 pt-20 w-full justify-center items-center md:gap-10 gap-5'>
                    <div className='flex flex-col md:gap-7 gap-3 2xl:w-[52%] md:w-[55%] xl:w-[50%]  self-center justify-center xl:max-w-2xl max-w-3xl'>
                        <Slide direction='left' duration={1500} delay={-800}>
                            <h1 className='text-[#253359] md:text-4xl text-xl text-center md:text-left font-bold playfair-display-font leading-tight text-wrap'>
                            Powerful <em>Marketing & Sales</em> Solutions for Business Growth
                            </h1>
                        </Slide>
                        <Slide direction='left' duration={1500} delay={-800}>
                            <p className='text-[#253359] md:text-base text-sm text-center md:text-left font-normal 2xl:max-w-xl max-w-2xl '>
                            At Your Support Agent, we know that marketing and sales are the lifeblood of any business. Our team of experts is here to help you reach your target audience, generate quality leads, and boost your sales with a combination of cutting-edge marketing strategies and proven sales techniques.<br/> <br/> Whether you're a startup looking to scale or an established business aiming for higher revenue, we've got the solutions you need to succeed.                            </p>
                        </Slide>
                    </div>
                    <div className='img-container 2xl:w-[46%] md:w-[45%]  xl:w-[50%] flex items-center'>
                        {isLoading && (
                            <Skeleton variant="rounded" width={2048} height={268} sx={{ bgcolor: 'grey.200' }} />
                        )}
                        <Fade>
                            <img src='https://pamdidner.com/wp-content/uploads/2018/08/62091997_s.jpg'
                             className='w-fit h-fit rounded' onLoad={handleImageLoad} ></img>
                        </Fade>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero