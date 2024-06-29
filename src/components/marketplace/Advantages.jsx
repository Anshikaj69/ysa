import React, { useState, useEffect } from 'react'
import data from '../../utils/data.json'

const Advantages = ({ sectionName }) => {

  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    if (data[sectionName]) {
      setSectionData(data[sectionName]);
    } else {
      console.error('Section not found');
    }
  }, [sectionName]);

  if (!sectionData) return <div>Loading...</div>;

  const { whyus, services } = sectionData

  return (
    <div className='flex flex-col gap-10 px-40 py-20 '>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <h1 className='text-[#253359] text-5xl font-bold playfair-display-font text-wrap text-center'
          dangerouslySetInnerHTML={{ __html: whyus.title }}
        ></h1>
        {whyus.about &&
          <p className='text-[#253359] text-lg font-normal text-center px-5'>{whyus.about}</p>
        }
      </div>

      <div className='flex flex-wrap gap-[3.3%] w-[95%] justify-center self-center'>
        <div className={`flex flex-wrap justify-evenly ${whyus.advantages.length === 4 ? 'gap-8 w-[70%] justify-evenly' : 'gap-4'}`}>
          {whyus.advantages.map((item, index) => (
            <div
              key={index}
              className={`border border-[#D4DFED] shadow-lg shadow-[#D4DFED] py-10 px-6 flex flex-col gap-4 items-center rounded-xl my-4
        ${whyus.advantages.length === 4 ? 'w-[45%]' : 'w-[31%]'}`}
            >
              <img src="/tick.svg" alt='tick' className='w-fit h-fit'></img>
              <h4 className='text-[#253359] text-lg font-semibold text-center'>{item.title}</h4>
              <p className='text-[#253359] text-sm font-medium text-center pt-1'>{item.description}</p>
            </div>
          ))}
        </div>

      </div>


      {/* services */}

      {services && (
        <div className='flex flex-col gap-16 py-20'>
            <h1 className='text-[#253359] text-5xl font-bold playfair-display-font text-wrap text-center'
          dangerouslySetInnerHTML={{ __html: services.title }}
        ></h1>
            <div className='flex flex-col w-full gap-5 '>
              {services.list.map((item)=>(
                <div className='bg-[#F4F3F1] flex w-full gap-5 py-8 px-10 rounded-xl justify-between'>
                   <h4 className='text-[#253359] text-lg font-semibold text-left text-wrap w-[10%]'>{item.title}</h4>
                   <p className='text-[#253359] text-md font-medium text-left pt-1 text-wrap w-[70%]'>{item.description}</p>
                   <p className='text-[#BA7C44] font-medium self-center mr-2 cursor-pointer'>Read More</p>
                </div>
              ))}
            </div>
        </div>
      )}


    </div>
  )
}

export default Advantages