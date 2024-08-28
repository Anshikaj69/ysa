import React, { useState, useEffect } from 'react'
import { Navbar } from '../layout'

import data from '../../utils/data.json'
import Container from '../layout/Container';
import { Fade, Slide } from 'react-awesome-reveal';
import { Skeleton } from '@mui/material';

const Hero = ({ sectionName }) => {

  const [sectionData, setSectionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    if (data[sectionName]) {
      setSectionData(data[sectionName]);
    } else {
      console.error('Section not found');
    }
  }, [sectionName]);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  
  const handleImageLoad = () => {
    setIsLoading(false); 
  };


  if (!sectionData) return <div>Loading...</div>;

  const { heroSection } = sectionData
 
  return (
    <div className='md:px-10 px-3 pt-6 2xl:mt-16 md:mt-14'>
      <Container>
        <div className='flex flex-col md:flex-row md:py-20 pb-9 pt-20 w-full justify-between gap-5 md:gap-0'>
          <div className='flex flex-col md:gap-8 gap-3 2xl:w-[52%] md:w-[55%] xl:w-[50%]  self-center 2xl:max-w-2xl max-w-3xl'>
            <Slide direction='left' duration={1500} delay={-800}>
              <h1 className='text-[#253359] 2xl:text-5xl md:text-4xl text-xl text-center md:text-left font-bold playfair-display-font leading-tight text-wrap'
                dangerouslySetInnerHTML={{ __html: heroSection.title }}>
              </h1>
            </Slide>
            <Slide direction='left' duration={1500} delay={-800}>
              <p className='text-[#253359] xl:text-lg md:text-base text-sm text-center md:text-left font-normal 2xl:max-w-xl max-w-2xl '>{heroSection.description}</p>
            </Slide>
          </div>
          <div className='img-container 2xl:w-[46%] md:w-[45%]  xl:w-[50%] flex items-center'>
          {isLoading && (
              <Skeleton variant="rounded" width={2048} height={268} sx={{ bgcolor: 'grey.200' }}/>
        )}
            <Fade>
              <img src='/alibaba.svg' className='w-fit h-fit' onLoad={handleImageLoad} ></img>
            </Fade>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero