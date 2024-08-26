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
    <div className=' md:px-10 md:py-20 px-5 py-8 '>
      <Container>
        <div className="flex flex-col gap-10">


          <div className='flex flex-col md:gap-5 gap-2 items-center justify-center'>
            <h1 className='text-[#253359] 2xl:text-5xl md:text-4xl text-lg font-bold playfair-display-font text-wrap text-center'
              dangerouslySetInnerHTML={{ __html: whyus.title }}
            ></h1>
            {whyus.about &&
              <p className='text-[#253359] 2xl:text-lg md:text-base text-sm font-normal text-center 2xl:px-5 md:px-10'>{whyus.about}</p>
            }
          </div>

          <div className='flex flex-wrap md:gap-[3.3%] 2xl:w-[95%] md:w-[90%] justify-center self-center'>
            <div className={`flex flex-wrap justify-evenly w-[90%] ${whyus.advantages.length === 4 ? 'gap-8 md:w-[70%] justify-evenly' : 'md:gap-4'}`}>
              {whyus.advantages.map((item, index) => (
                <div
                  key={index}
                  className={`border border-[#D4DFED] shadow-lg shadow-[#D4DFED] md:py-10 md:px-6 p-5 flex flex-col md:gap-4 gap-2 items-center rounded-xl md:my-4 my-2
        ${whyus.advantages.length === 4 ? 'md:w-[45%]' : 'md:w-[31%]'}`}
                >
                  <img src="/tick.svg" alt='tick' className='md:w-fit md:h-fit w-7 h-7'></img>
                  <h4 className='text-[#253359] 2xl:text-lg md:text-base text-sm font-semibold text-center'>{item.title}</h4>
                  <p className='text-[#253359] 2xl:text-sm text-xs font-medium text-center pt-1'>{item.description}</p>
                </div>
              ))}
            </div>

          </div>


          {/* services */}

          {services && (
            <div className='flex flex-col md:gap-16 gap-8 py-10 md:py-20 px-2 md:px-0 w-full justify-center items-center'>
              <h1 className='text-[#253359] 2xl:text-5xl md:text-4xl text-xl font-bold playfair-display-font text-wrap text-center'
                dangerouslySetInnerHTML={{ __html: services.title }}
              ></h1>
              <div className='flex flex-col 2xl:w-full md:w-[90%] w-full gap-5 '>
                {services.list.map((item) => (
                  <div className='bg-[#F4F3F1] flex flex-col md:flex-row w-full  md:gap-5 gap-2 md:py-8 md:px-10 p-4 rounded-xl justify-between' key={item.title}>
                    <h4 className='text-[#253359] 2xl:text-lg md:text-sm text-xs font-semibold text-left text-wrap md:w-[10%]'>{item.title}</h4>
                    <p className='text-[#253359] 2xl:text-base md:text-xs text-xs font-medium text-left pt-1 text-wrap md:w-[70%]'>{item.description}</p>
                    
                    {snap.service !== 'Marketing' && 
                    <p className='text-[#BA7C44] 2xl:text-base text-xs font-medium md:self-center mr-2 cursor-pointer'
                    onClick={()=> changeService(item.title)}
                    >Read More</p>
                    }
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