import React, { useState, useEffect } from 'react'
import data from '../../utils/data.json'
import Container from '../layout/Container';
import { useNavigate } from 'react-router-dom';
import state from '../../store';
import { useSnapshot } from 'valtio';

const Advantages = ({ sectionName }) => {

  const [sectionData, setSectionData] = useState(null);
  const snap = useSnapshot(state)
  const navigate = useNavigate()

  useEffect(() => {
    if (data[sectionName]) {
      setSectionData(data[sectionName]);
    } else {
      console.error('Section not found');
    }
  }, [sectionName]);

  if (!sectionData) return <div>Loading...</div>;

  const { whyus, services } = sectionData

  const changeService = (item) => {
    state.role = item
    navigate(`/individual-roles/${item}`)
  }

  return (
    <div className=' px-10 py-20 '>
      <Container>
        <div className="flex flex-col gap-10">


          <div className='flex flex-col gap-5 items-center justify-center'>
            <h1 className='text-[#253359] 2xl:text-5xl md:text-4xl font-bold playfair-display-font text-wrap text-center'
              dangerouslySetInnerHTML={{ __html: whyus.title }}
            ></h1>
            {whyus.about &&
              <p className='text-[#253359] 2xl:text-lg md:text-base font-normal text-center 2xl:px-5 md:px-10'>{whyus.about}</p>
            }
          </div>

          <div className='flex flex-wrap gap-[3.3%] 2xl:w-[95%] md:w-[90%] justify-center self-center'>
            <div className={`flex flex-wrap justify-evenly ${whyus.advantages.length === 4 ? 'gap-8 w-[70%] justify-evenly' : 'gap-4'}`}>
              {whyus.advantages.map((item, index) => (
                <div
                  key={index}
                  className={`border border-[#D4DFED] shadow-lg shadow-[#D4DFED] py-10 px-6 flex flex-col gap-4 items-center rounded-xl my-4
        ${whyus.advantages.length === 4 ? 'w-[45%]' : 'w-[31%]'}`}
                >
                  <img src="/tick.svg" alt='tick' className='w-fit h-fit'></img>
                  <h4 className='text-[#253359] 2xl:text-lg md:text-base font-semibold text-center'>{item.title}</h4>
                  <p className='text-[#253359] 2xl:text-sm md:text-xs font-medium text-center pt-1'>{item.description}</p>
                </div>
              ))}
            </div>

          </div>


          {/* services */}

          {services && (
            <div className='flex flex-col gap-16 py-20 w-full justify-center items-center'>
              <h1 className='text-[#253359] 2xl:text-5xl md:text-4xl font-bold playfair-display-font text-wrap text-center'
                dangerouslySetInnerHTML={{ __html: services.title }}
              ></h1>
              <div className='flex flex-col 2xl:w-full md:w-[90%] gap-5 '>
                {services.list.map((item) => (
                  <div className='bg-[#F4F3F1] flex w-full  gap-5 py-8 px-10 rounded-xl justify-between' key={item.title}>
                    <h4 className='text-[#253359] 2xl:text-lg md:text-sm font-semibold text-left text-wrap w-[10%]'>{item.title}</h4>
                    <p className='text-[#253359] 2xl:text-base md:text-xs font-medium text-left pt-1 text-wrap w-[70%]'>{item.description}</p>
                    
                    <p className='text-[#BA7C44] 2xl:text-base md:text-xs font-medium self-center mr-2 cursor-pointer'
                    onClick={()=> changeService(item.title)}
                    >Read More</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </Container>
    </div>
  )
}

export default Advantages