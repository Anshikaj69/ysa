import React, { useState, useEffect } from 'react'
import roleData from '../../utils/roleData.json'
import Container from '../layout/Container';
import { ArrowBigRight, Dot } from 'lucide-react';

const Perks = ({ RoleName }) => {
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    if (roleData[RoleName]) {
      setSectionData(roleData[RoleName]);
    } else {
      console.error('Role not found');
    }
  }, [RoleName]);

  if (!sectionData) return <div>Loading...</div>;
  const { perks, roles, whyus } = sectionData
  let count2 = 0

  return (
    <div className=' md:px-10 md:pb-10 md:pt-14 px-4 py-8'>
      <Container>

        {/* services */}
        <div className='flex flex-col md:gap-7 gap-8 pb-14  px-2 md:px-0 w-full justify-center items-center'>
          <div className="flex flex-col gap-1">
            <h1 className='text-[#253359] md:text-3xl text-xl font-bold playfair-display-font text-wrap text-center'
              dangerouslySetInnerHTML={{ __html: roles.title }}
            ></h1>
            <h5>{roles.description}</h5>
          </div>
          <div className='flex flex-col md:w-[80%] w-full gap-5 '>
            {roles.list.map((item) => (
              <div className='bg-[#d9dde7] flex flex-col md:flex-row w-full md:gap-4 gap-2 md:py-4 md:px-10 p-4 rounded-xl justify-between items-center' key={item.title}>
                <h4 className='text-black 2xl:text-base md:text-sm text-xs font-semibold text-left text-wrap md:w-[25%]'>{item.title}</h4>
                <p className='text-gray-700 2xl:text-base md:text-xs text-xs font-medium text-left pt-1 text-wrap md:w-[75%]'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* perks */}
        <div className='flex flex-col md:gap-6 gap-2 items-center justify-center'>
          <h1 className='text-[#253359]  md:text-3xl text-lg font-bold playfair-display-font text-wrap text-center'
            dangerouslySetInnerHTML={{ __html: perks.title }}
          ></h1>
          <div className='flex flex-wrap md:gap-[3.3%] 2xl:w-[95%] md:w-[90%] justify-center self-center'>
            <div className={`flex flex-wrap justify-evenly w-[90%] ${perks.list.length === 4 ? 'gap-4 md:w-[70%] justify-evenly' : 'md:gap-4'}`}>
              {perks.list.map((item, index) => (
                <div
                  key={index}
                  className={`border border-[#D4DFED] shadow-lg shadow-[#D4DFED] md:py-4 md:px-4 p-5 flex flex-col gap-2 items-center rounded-xl my-2
        ${perks.list.length === 4 ? 'md:w-[45%]' : 'md:w-[31%]'}`}
                >
                  <img src="/tick.svg" alt='tick' className='md:w-7 md:h-7 w-7 h-7'></img>
                  <h4 className='text-[#253359]  text-sm font-semibold text-center'>{item.title}</h4>
                  <p className='text-gray-800  text-xs font-medium text-center'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-10 mt-4 md:mx-20">
          <div className='flex flex-col justify-center '>
            <h1 className=' md:text-3xl  font-bold playfair-display-font text-center text-[#253359]'> {whyus.title}</h1>
          </div>
          <div className="grid grid-cols-2 mx-3 gap-5 font-mono justify-center ">
            {whyus.advantages.map((advantage) => {
              count2 += 1;
              return (
                <div className="col-span-1 flex flex-col gap-1">
                <h3 className='flex gap-1 text-xs xl:text-base font-semibold text-[#253359] '><ArrowBigRight /> {advantage.title}</h3>
              <span className='font-normal text-gray-700 flex gap-1 max-w-md'>{advantage.description}</span>
                </div>
              )
            })}

          </div>
        </div>
      </Container>
    </div>
  )
}

export default Perks