import React from 'react'

import { useSnapshot } from 'valtio'
import state from '../../store'

import { useNavigate } from 'react-router-dom'
import Container from '../layout/Container'

import './homepage.css'

const Solutions = () => {

  const solutionList = ['MarketPlace', 'E-Commerce & Retail', 'Back Office Processing', 'Marketing Agency', 'Social Media', 'Blockchain', 'Financial Services & FinTech',
    'Accounting Firm', 'Real Estate', 'Hospitality', 'Legal', 'Healthcare & HealthTech', 'Health Plans', 'Insurance', 'Energy & Utilities', 'Education & Training',
    'Transportation & Logistics', 'Automotive', 'Interior Design/ Architecture', 'Fencing & Roofing', 'HVAC', 'Plumbing', 'C-store/ Gas Station', 'Pool Cleaning', 'Small Business']

  const snap = useSnapshot(state)
  const navigate = useNavigate()

  const changeService = (item) => {
    state.service = item
    navigate('/marketplace')
  }

  return (
    <>
      {/* sulutions */}
      <div className='bg-[#F4F3F1] px-10 py-20' id='industries'>
        <Container>
          <h1 className='text-[#253359] 2xl:text-5xl text-4xl font-bold playfair-display-font text-center'>Our Range of Outsourcing Solutions</h1>
          <div className='flex flex-wrap w-[100%] gap-6 justify-center my-16'>
            {solutionList.map(item => (
              <div key={item} className='bloack bg-white 2xl:px-[1.5rem] 2xl:pb-8 2xl:pt-11 py-9 px-4 flex flex-col justify-between items-center  w-[17%] 2xl:w-[18%] gap-4 rounded-xl
             shadow-md  cursor-pointer transition-all ease-in-out delay-150  hover:scale-[1.1] hover:bg-[#ffb84e10] hover:border hover:border-[#CBAF85]'
                onClick={() => changeService(item)}>
                <h2 className='uppercase text-center text-xs xl:text-base text-wrap text-[#253359] font-semibold'>{item}</h2>
                <button
                  onClick={() => changeService(item)}
                  className='bg-[#253359] rounded-3xl py-1 px-3 text-white text-[10px] xl:text-xs hover:bg-[#CBAF85]'>{`TRY NOW >`}</button>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* YSA Process */}

      <div className='bg-[#CBD8D3] px-10 py-16 '>
        <Container >
          <div className="gap-12 flex flex-col ">
            <h1 className='text-[#253359] text-4xl 2xl:text-5xl font-bold playfair-display-font text-center'>The YSA Process</h1>
            <div className='flex  w-[100%] gap-[3.3%] justify-center'>
              <div className='bg-white rounded-3xl flex flex-col gap-1 items-center justify-start  2xl:p-8 p-6 xl:p-9 xl:w-[29%] w-[30%] 2xl:w-[31%]'>
                <h3 className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl 2xl:text-lg text-sm'>STEP 1</h3>
                <h1 className='2xl:text-2xl text-xl text-[#253359] text-center font-medium mt-4 text-wrap'>Select a <br></br> Marketing Plan</h1>
                <p className='text-[#253359] 2xl:text-lg text-sm  text-center font-normal mt-2'>Choose the marketing plan that aligns with your requirements. We can also create a tailored marketing plan for your customized needs.
                </p>
              </div>

              <div className='bg-white rounded-3xl flex flex-col gap-1 items-center justify-start 2xl:p-7 p-5 xl:px-9 xl:py-9 xl:w-[29%] w-[30%] 2xl:w-[31%]'>
                <h3 className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl 2xl:text-lg text-sm'>STEP 2</h3>
                <h1 className='2xl:text-2xl text-xl text-[#253359] text-center font-medium mt-4'>Choose 3 Service Agents</h1>
                <h6 className='text-[#253359] 2xl:text-lg text-sm text-center font-medium'>And Get a Success Manager Complimentary</h6>
                <p className='text-[#253359] 2xl:text-lg text-sm text-center font-normal mt-2'>{`The basic plan allows you to choose any 3 service agents for your business, depending on your requirements. Or add on extra agents (extra cost applied)`}
                </p>
              </div>

              <div className='bg-white rounded-3xl flex flex-col gap-1 items-center justify-start xl:p-9 xl:w-[29%]  2xl:p-8 p-6 w-[30%] 2xl:w-[31%]'>
                <h3 className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl 2xl:text-lg text-sm'>STEP 3</h3>
                <h1 className='2xl:text-2xl text-xl text-[#253359] text-center font-medium mt-4'>Schedule a Call on the Calendar</h1>
                <p className='text-[#253359] 2xl:text-lg text-sm text-center font-normal mt-2'>Indulge in a detailed discussion about your expectations and needs, so that we can cater to them quickly and perfectly!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* individual agents */}

      <div className=' px-10 py-20 w-full' id='individuals'>
        <Container>
          <div className="flex justify-center w-full ">
            <div className='flex flex-col gap-8 w-[53%] 2xl:pt-5 pr-16'>
              <h1 className='text-[#253359] text-4xl 2xl:text-5xl font-bold playfair-display-font'>Individual <span className='italic'>Agents</span></h1>
              <p className='text-[#253359] text-base 2xl:text-xl xl:text-lg font-normal'>Looking to hire an all-rounder expert rather than a complete team? <br /><br />No worries, we've got your back! Your requirements are paramount to us, and through our platform, you can hire experts for individual roles on a freelance, part-time, or full-time basis.<br /><br /> We help businesses like yours connect with individual agents
                to complete their staff shortages and demands in a cost-effective manner. Connect with our experts to understand how our personalized partnership works.
              </p>
              <div>
                <button className=' text-white rounded-3xl py-2 2xl:py-2.5 px-5 text-sm 2xl:text-base hover:bg-[#fff] btn btn1'>Book a Call</button>
              </div>
            </div>
            <div className='2xl:w-[44%] w-[40%]'>
              <img src='/agents.svg' alt='agents'></img>
            </div>
          </div>
        </Container>
      </div>

      {/* marketing plans */}

      <div className='px-10 py-20 w-full' id='marketing'>
        <Container>
          <div className="flex justify-center w-full">
            <div className='2xl:w-[44%] w-[40%]  self-center'>
              <img src='/marketing-plans.svg' alt='agents'></img>
            </div>

            <div className='flex flex-col gap-8 w-[53%] 2xl:pt-5 pl-16 self-start'>
              <h1 className='text-[#253359] text-4xl 2xl:text-5xl  font-bold playfair-display-font'>Customized  <span className='italic'>Marketing Plans</span></h1>
              <p className='text-[#253359] text-base 2xl:text-xl xl:text-lg font-normal '>{`To ensure your individual business goals are fulfilled, we offer tailored marketing packages as well. Our Customized Marketing Packages are designed to maximize your outreach and impact, ensuring that your business stands out in today's competitive landscape. Whether you're looking to boost brand awareness, drive sales, or engage with your target audience, our team of experts will work closely with you to develop a strategy that delivers results.`}<br /><br />
                {`In addition to traditional marketing tactics, we also offer User Generated Content (UGC) packages to harness the power of user-generated content to enhance your brand's credibility, foster community engagement, and drive conversions.`}
              </p>
              <div>
                <button className='hover:bg-[#fff] btn btn1 text-white rounded-3xl py-2 2xl:py-2.5 px-5 text-sm 2xl:text-base'>Book a Call</button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* custom services */}

      <div className='px-10 py-20 w-full' id='custom'>
        <Container>
          <div className="flex justify-center w-full">
            <div className='flex flex-col gap-8 w-[53%] pt-5 pr-16'>
              <h1 className='text-[#253359] text-4xl 2xl:text-5xl font-bold playfair-display-font'>Custom <span className='italic'>Services</span></h1>
              <p className='text-[#253359] text-base 2xl:text-xl xl:text-lg font-normal'>Our custom projects are created in domains like 3D sites, Blockchain, Web Development, Software Development, and other services. We recognize that every business is different, which is why we take the time to understand your specific goals, challenges, and industry dynamics before crafting a marketing solution aligning with your staffing needs.
              </p>
              <div>
                <button className='hover:bg-[#fff] btn btn1 text-white rounded-3xl py-2 2xl:py-2.5 px-5 text-sm 2xl:text-base'>Book a Call</button>
              </div>
            </div>
            <div className='2xl:w-[44%] w-[40%]'>
              <img src='/custom-services.svg' alt='agents'></img>
            </div>
          </div>
        </Container>
      </div>


    </>
  )
}

export default Solutions