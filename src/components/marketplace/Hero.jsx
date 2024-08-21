import React, { useState, useEffect } from 'react'
import { Navbar } from '../layout'

import data from '../../utils/data.json'
import Container from '../layout/Container';
import { Fade, Slide } from 'react-awesome-reveal';

const Hero = ({ sectionName }) => {

  const [sectionData, setSectionData] = useState(null);

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

  if (!sectionData) return <div>Loading...</div>;

  const { heroSection } = sectionData
 
  return (
    <div className='px-10 pt-6 2xl:mt-28 md:mt-16'>
      <Container>
        <div className='flex  py-20 w-full justify-between'>
          <div className='flex flex-col gap-8 2xl:w-[52%] md:w-[55%] xl:w-[50%]  self-center 2xl:max-w-2xl max-w-3xl'>
            <Slide direction='left' duration={1500} delay={-800}>
              <h1 className='text-[#253359] 2xl:text-5xl text-4xl font-bold playfair-display-font leading-tight text-wrap'
                dangerouslySetInnerHTML={{ __html: heroSection.title }}>
              </h1>
            </Slide>
            <Slide direction='left' duration={1500} delay={-800}>
              <p className='text-[#253359] xl:text-lg font-normal 2xl:max-w-xl max-w-2xl '>{heroSection.description}</p>
            </Slide>
          </div>
          <div className='img-container 2xl:w-[46%] md:w-[45%]  xl:w-[50%] flex items-center'>
            <Fade>
              <img src='/alibaba.svg' className='w-fit h-fit'></img>
            </Fade>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero