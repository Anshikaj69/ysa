import React ,{useState, useEffect} from 'react'

import bg from '/about.svg'

import data from '../../utils/data.json'


const About = ({sectionName}) => {

  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    if (data[sectionName]) {
      setSectionData(data[sectionName]);
    } else {
      console.error('Section not found');
    }
  }, [sectionName]);

  if (!sectionData) return <div>Loading...</div>;

  const {aboutUs} = sectionData

  return (
    <div className='px-40 pt-40 pb-60 flex justify-between '
    style={{
      backgroundImage: `url(${bg})`,

      backgroundRepeat: 'no-repeat'
    }}
    >
        <div className='flex justify-between items-center w-full'>
          <div className='flex flex-col gap-8 w-[55%]'>
          <h1 className='text-[#253359] text-5xl font-bold playfair-display-font text-balance'>{aboutUs.heading}</h1>
          <p className='text-[#253359] text-lg font-normal max-w-xl'>{aboutUs.content1} <br/><br/> {aboutUs.content2}</p>
          </div>
          <div className='img w-[40%] flex items-center'>
            <img src='/aboutimg.svg' alt='img'></img>
          </div>
        </div>
    </div>
  )
}

export default About