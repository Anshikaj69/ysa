import React, {useState, useEffect} from 'react'
import {Navbar} from '../layout'

import data from '../../utils/data.json'

const Hero = ({sectionName}) => {

  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    if (data[sectionName]) {
      setSectionData(data[sectionName]);
    } else {
      console.error('Section not found');
    }
  }, [sectionName]);

  if (!sectionData) return <div>Loading...</div>;

  const {heroSection} = sectionData
  return (
    <div className='px-40 pt-6 '>  
    <Navbar />
    <div className='flex  py-20 w-full justify-between'>
        <div className='flex flex-col gap-8 w-[52%] self-center max-w-2xl'>
            <h1 className='text-[#253359] text-5xl font-bold playfair-display-font leading-tight text-wrap'>{heroSection.title}</h1>
            <p className='text-[#253359] text-lg font-normal max-w-xl'>{heroSection.description}</p>
        </div>
        <div className='img-container w-[46%] flex items-center'>
            <img src='/alibaba.svg' className='w-fit h-fit'></img>
        </div>
    </div>
    </div>
  )
}

export default Hero