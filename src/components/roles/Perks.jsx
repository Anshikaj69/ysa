import React, { useState, useEffect } from 'react'
import roleData from '../../utils/roleData.json'
import Container from '../layout/Container';

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

  const { perks , roles, whyus} = sectionData

let count=0
let count1 = 0
let count2 =0

  return (
    <div className=' px-10 pb-10 pt-14'>
      <Container>
        <div className="flex flex-col gap-6 mb-10">

          <div className='flex flex-col justify-center'>
            <h1 className=' md:text-lg xl:text-xl font-bold playfair-display-font'>01. {perks.title}</h1>
          </div>
          <div className="flex flex-col mx-3 gap-4 font-mono">
            {perks.list.map((perk) => {
              count+=1;
              return (
                <h3 className='flex gap-1 font-semibold md:text-xs xl:text-sm text-nowrap items-start leading-5'>{count}. {perk.title}:<span className='font-normal text-black text-wrap'>{perk.description}</span></h3>
              )
            })}
          </div>
          </div>
          {/* services */}

          <div className="flex flex-col gap-5 mb-11">
          <div className='flex flex-col gap-3 justify-center '>
            <h1 className=' md:text-lg xl:text-xl font-bold playfair-display-font'>02. {roles.title}</h1>
            <p className='md:text-xs xl:text-sm font-mono'>{roles.description}</p>
          </div>
          <div className="flex flex-col mx-3 gap-5 font-mono">
            {roles.list.map((role) => {
              count1+=1;
              return (
                <h3 className='flex gap-1 font-semibold md:text-xs xl:text-sm text-nowrap max-w-[95%]'>{count1}. {role.title}:<span className='font-normal text-black text-wrap'>{role.description}</span></h3>
              )
            })}
          
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className='flex flex-col justify-center '>
            <h1 className=' md:text-lg xl:text-xl font-bold playfair-display-font'>03. {whyus.title}</h1>
          </div>
          <div className="flex flex-col mx-3 gap-5 font-mono">
            {whyus.advantages.map((advantage) => {
              count2+=1;
              return (
                <h3 className='flex gap-1 font-semibold md:text-xs xl:text-sm text-nowrap max-w-[95%]'>{count2}. {advantage.title}:<span className='font-normal text-black text-wrap'>{advantage.description}</span></h3>
              )
            })}
          
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Perks