import React from 'react'
import { useRef, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import state from '../../store'

import { useNavigate } from 'react-router-dom'
import Container from '../layout/Container'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

import './homepage.css'
import { Fade, Slide } from 'react-awesome-reveal'
import { Box, Boxes, Clock, CodeSquare, HandCoins, Handshake, Megaphone, Settings, Shrub, Target, Unplug, UserCheck2 } from 'lucide-react'

const Solutions = () => {

  const solutionList = ['MarketPlace', 'Social Media', 'Financial Services', 'Accounting Firm', 'Real Estate',
    'E-Commerce & Retail', 'Back Office Processing', 'Airbnb' , 'Energy & Utilities', 'Hospitality',
      'Marketing Agency', 'Legal', 'Healthcare', 'Automotive', 'C-store/ Gas Station', 
      'Transportation & Logistics', 'Insurance', 'Health Plans', 'Interior Design/ Architecture', 'Education & Training',
      'Plumbing',  'Fencing & Roofing', 'HVAC',  'Pool Cleaning', 'Small Business']

  const snap = useSnapshot(state)
  const navigate = useNavigate()

  const changeService = (item) => {
    state.service = item
    navigate('/marketplace')
    window.scrollTo(0, 0); 
  }

  const industryRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#industries') {
      industryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location]);

  return (
    <>
      {/* sulutions */}
      <div className='bg-[#F4F3F1] px-4 py-8 md:px-10 md:py-16' id='industries' ref={industryRef}>
        <Container>
          <Fade>
            <h1 className='text-[#253359] text-xl 2xl:text-5xl md:text-4xl font-bold playfair-display-font text-center'>Our Range of Outsourcing Solutions</h1>
          </Fade>
          <div className='flex flex-wrap w-[100%] gap-3 md:gap-6 justify-center my-5 md:my-16'>
            {solutionList.map(item => (
              <div key={item} className='bloack bg-white 2xl:px-[1.5rem] 2xl:pb-8 2xl:pt-11 md:py-9 md:px-4 py-5 px-4 flex flex-col justify-between items-center w-[45%] md:w-[17%] 2xl:w-[18%] gap-2 md:gap-4 rounded-xl
             shadow-md  cursor-pointer transition-all ease-in-out delay-150  hover:scale-[1.05] hover:bg-[#ffb84e10] hover:border hover:border-[#CBAF85]'
                onClick={() => changeService(item)}>
                <h2 className='uppercase text-center text-xs xl:text-base text-wrap px-4 text-[#253359] font-semibold'>{item}</h2>
                <button
                  onClick={() => changeService(item)}
                  className='bg-[#253359] rounded-3xl py-1 px-3 text-white text-[9px] md:text-[10px] xl:text-xs hover:bg-[#CBAF85]'>{`TRY NOW >`}</button>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* YSA Process */}

      <div className='bg-[#CBD8D3] px-4 md:px-10 md:py-16 py-8'>
        <Container >
          <div className="md:gap-12 gap-5 flex flex-col ">
            <Fade>
              <h1 className='text-[#253359] text-2xl md:text-4xl 2xl:text-5xl font-bold playfair-display-font text-center'>The YSA Process</h1>
            </Fade>
            <div className='flex flex-col md:flex-row w-[100%] md:gap-[3.3%] gap-5 justify-center items-center md:items-stretch'>

              <Slide className='bg-white rounded-3xl flex flex-col md:gap-1 items-center justify-start  2xl:p-8 md:p-6 p-5 xl:p-9 w-[90%] xl:w-[29%] md:w-[30%] 2xl:w-[31%]'>
                <Fade>
                  <h3 className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl 2xl:text-lg md:text-sm text-xs'>STEP 1</h3>
                  <h1 className='2xl:text-2xl md:text-xl text-[#253359] text-center font-medium md:mt-4 pt-2 text-wrap'>Select a <br></br> Marketing Plan</h1>
                  <p className='text-[#253359] 2xl:text-lg md:text-sm text-xs text-center font-normal mt-2'>Choose the marketing plan that aligns with your requirements. We can also create a tailored marketing plan for your customized needs.
                  </p>
                </Fade>
              </Slide>

              <Fade className='bg-white rounded-3xl flex flex-col md:gap-1 items-center justify-start 2xl:p-7 p-5 xl:px-9 xl:py-9 w-[90%] xl:w-[29%] md:w-[30%] 2xl:w-[31%]'>
                <Fade>
                  <h3 className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl 2xl:text-lg md:text-sm text-xs'>STEP 2</h3>
                  <h1 className='2xl:text-2xl md:text-xl text-[#253359] text-center font-medium md:mt-4 mt-2'>Choose 3 Service Agents</h1>
                  <h6 className='text-[#253359] 2xl:text-lg md:text-sm text-xs text-center font-medium'>And Get a Success Manager Complimentary</h6>
                  <p className='text-[#253359] 2xl:text-lg md:text-sm text-xs text-center font-normal mt-2'>{`The basic plan allows you to choose any 3 service agents for your business, depending on your requirements. Or add on extra agents (extra cost applied)`}
                  </p>
                </Fade>
              </Fade>

              <Slide direction='right' className='bg-white rounded-3xl flex flex-col md:gap-1 items-center justify-start xl:p-9 w-[90%] xl:w-[29%] 2xl:p-8 p-6 md:w-[30%] 2xl:w-[31%]'>
                <Fade>
                  <h3 className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl 2xl:text-lg md:text-sm text-xs'>STEP 3</h3>
                  <h1 className='2xl:text-2xl md:text-xl text-[#253359] text-center font-medium md:mt-4 mt-2'>Schedule a Call on the Calendar</h1>
                  <p className='text-[#253359] 2xl:text-lg md:text-sm text-xs text-center font-normal mt-2'>Indulge in a detailed discussion about your expectations and needs, so that we can cater to them quickly and perfectly!
                  </p>
                </Fade>
              </Slide>

            </div>
          </div>
        </Container>
      </div>

      {/* individual agents */}

      <div className='px-6 md:px-10 pt-8 md:pt-20 w-full' >
        <Container>
          <div className="flex justify-center w-full ">
            <div className='flex flex-col gap-8 md:w-[53%] 2xl:pt-5 md:pr-16'>
              <Slide duration={1500} delay={-800}>
                <h1 className='text-[#253359] text-2xl md:text-4xl 2xl:text-5xl font-bold playfair-display-font '>Individual <span className='italic'>Agents</span></h1>
              </Slide>

              <Slide duration={1500} delay={-800}>
                <div className='text-[#253359] text-base 2xl:text-xl xl:text-lg font-normal grid grid-cols-2 gap-5 md:gap-9 2xl:mt-10 xl:mt-7 md:mt-4'>
                  <div className="flex flex-col gap-2 max-w-xs">
                    <Clock className='md:h-[26px] md:w-[26px] h-5' color='#56483a' />
                    <h2 className='font-bold text-sm md:text-base 2xl:text-lg '>Full-time/Part-time</h2>
                    <p className='2xl:text-base md:text-sm text-xs font-medium md:font-normal'>Hire experts on a freelance, part-time, or full-time basis.</p>
                  </div>

                  <div className="flex flex-col gap-2 max-w-xs">
                    <HandCoins className='md:h-[26px] md:w-[26px] h-5' color='#56483a' />
                    <h2 className='font-bold text-sm md:text-base 2xl:text-lg'>Cost-Effective</h2>
                    <p className='2xl:text-base md:text-sm text-xs'>Address staff shortages and demands efficiently.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 max-w-xs">
                    <Unplug className='md:h-[26px] md:w-[26px] h-5' color='#56483a' />
                    <h2 className='font-bold text-sm md:text-base 2xl:text-lg '>Seamless Integration</h2>
                    <p className='2xl:text-base md:text-sm text-xs'>Experts function like your regular team members.</p>
                  </div>

                  <div className="flex flex-col gap-2 max-w-xs">
                    <Handshake className='md:h-[26px] md:w-[26px] h-5' color='#56483a' />
                    <h2 className='font-bold text-sm md:text-base 2xl:text-lg'>Personalized Partnership</h2>
                    <p className='2xl:text-base md:text-sm text-xs'>Tailored support for your unique needs.</p>
                  </div>
                </div>
              </Slide>

              <Slide duration={1500} delay={-800}>
                <Link to='/marketplace#step1'>
                  <button className='hover:bg-[#fff] btn btn1 text-white rounded-3xl py-2 2xl:py-2.5 px-5 text-sm 2xl:text-base'>Book a Call</button>
                </Link>
              </Slide>
            </div>
            <Fade className='2xl:w-[44%] w-[40%] hidden md:block'>
              <img src='/agents.svg' alt='agents' loading='lazy'></img>
            </Fade>
          </div>
        </Container>
      </div>

      {/* marketing plans */}

      <div className='px-6 md:px-10 md:py-10 w-full' id='marketing'>
        <Container>
          <div className="flex justify-center w-full">
            <Fade className='2xl:w-[44%] w-[40%]  self-center hidden md:block'>
              <img src='/marketing-plans.svg' alt='agents' loading='lazy'></img>
            </Fade>

            <div className='flex flex-col gap-8 md:w-[53%] 2xl:pt-5 md:pl-16 self-start'>
              <Slide direction='right' duration={1500} delay={-800}>
                <h1 className='text-[#253359] text-xl md:text-4xl 2xl:text-5xl  font-bold playfair-display-font'>Customized  <span className='italic'>Marketing Plans</span></h1>
              </Slide>

              <Slide direction='right' duration={1500} delay={-800}>
                <div className='text-[#253359] font-normal grid grid-cols-2 gap-5 md:gap-9 2xl:mt-10 xl:mt-7 md:mt-4'>
                  <div className="flex flex-col gap-2 max-w-xs">
                    <Settings className='md:h-[26px] md:w-[26px] h-5' color='#56483a' />
                    <h2 className='font-bold text-sm md:text-base 2xl:text-lg '>Tailored Solutions</h2>
                    <p className='2xl:text-base md:text-sm text-xs'>Maximize outreach and impact with bespoke packages.</p>
                  </div>

                  <div className="flex flex-col gap-2 max-w-xs">
                    <Megaphone className='md:h-[26px] md:w-[26px] h-5' color='#56483a' />
                    <h2 className='font-bold text-sm md:text-base 2xl:text-lg '>Boost Brand Awareness</h2>
                    <p className='2xl:text-base md:text-sm text-xs'>Strategies to make your business stand out.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 max-w-xs">
                    <Shrub className='md:h-[26px] md:w-[26px] h-5' color='#56483a' />
                    <h2 className='font-bold text-sm md:text-base 2xl:text-lg'>Drive Sales</h2>
                    <p className='2xl:text-base md:text-sm text-xs'>Engage your target audience and increase conversions.</p>
                  </div>

                  <div className="flex flex-col gap-2 max-w-xs">
                    <UserCheck2 className='md:h-[26px] md:w-[26px] h-5' color='#56483a' />
                    <h2 className='font-bold text-sm md:text-base 2xl:text-lg '>{`User Generated Content (UGC)`}</h2>
                    <p className='2xl:text-base md:text-sm text-xs'>Enhance credibility and foster community engagement.</p>
                  </div>
                </div>
              </Slide>

              <Slide direction='right' duration={1500} delay={-800}>
                <Link to='/marketplace#step1'>
                  <button className='hover:bg-[#fff] btn btn1 text-white rounded-3xl py-2 2xl:py-2.5 px-5 text-sm 2xl:text-base'>Book a Call</button>
                </Link>
              </Slide>
            </div>
          </div>
        </Container>
      </div>

      {/* custom services */}

      <div className='px-6 md:px-10 md:py-10 w-full' id='custom'>
        <Container>
          <div className="flex justify-center w-full">
            <div className='flex flex-col gap-8 md:w-[53%] md:pt-5 md:pr-16'>
              <Slide duration={1500} delay={-800}>
                <h1 className='text-[#253359] text-2xl md:text-4xl 2xl:text-5xl font-bold playfair-display-font'>Custom <span className='italic'>Services</span></h1>
              </Slide>

              <Slide duration={1500} delay={-800}>
                <div className='text-[#253359] font-normal grid grid-cols-2 gap-6 md:gap-9 2xl:mt-10 xl:mt-7 md:mt-4'>
                  <div className="flex flex-col gap-2 max-w-xs">
                    <Box className='md:h-[26px] md:w-[26px] h-5' color='#56483a' />
                    <h2 className='font-bold text-sm md:text-base 2xl:text-lg'>3D Sites</h2>
                    <p className='2xl:text-base md:text-sm text-xs'>Innovative and immersive web experiences.</p>
                  </div>

                  <div className="flex flex-col gap-2 max-w-xs">
                    <Boxes className='md:h-[26px] md:w-[26px] h-5' color='#56483a' />
                    <h2 className='font-bold text-sm md:text-base 2xl:text-lg'>Blockchain</h2>
                    <p className='2xl:text-base md:text-sm text-xs'>Secure and decentralized solutions.</p>
                  </div>

                  <div className="flex flex-col gap-2 max-w-xs">
                    <CodeSquare className='md:h-[26px] md:w-[26px] h-5' color='#56483a' />
                    <h2 className='font-bold text-sm md:text-base 2xl:text-lg '>Software Development</h2>
                    <p className='2xl:text-base md:text-sm text-xs'>Tailored software solutions.</p>
                  </div>

                  <div className="flex flex-col gap-2 max-w-xs">
                    <Target className='md:h-[26px] md:w-[26px] h-5' color='#56483a' />
                    <h2 className='font-bold text-sm md:text-base 2xl:text-lg'>Personalized Approach</h2>
                    <p className='2xl:text-base md:text-sm text-xs'>Understanding your unique business goals and challenges. </p>
                  </div>
                </div>
              </Slide>

              <Slide duration={1500} delay={-800}>
                <Link to='/marketplace#step1'>
                  <button className='hover:bg-[#fff] btn btn1 text-white rounded-3xl py-2 2xl:py-2.5 px-5 text-sm 2xl:text-base'>Book a Call</button>
                </Link>
              </Slide>

            </div>
            <Fade className='2xl:w-[44%] w-[40%] hidden md:block'>
              <img src='/custom-services.svg' alt='agents' loading='lazy'></img>
            </Fade>
          </div>
        </Container>
      </div>


    </>
  )
}

export default Solutions