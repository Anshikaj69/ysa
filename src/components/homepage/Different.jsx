import React from 'react'

import bg1 from '/different.svg'
import bg2 from '/unleashed.svg'
import Container from '../layout/Container'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'

const Different = () => {
  return (
    <div>
      {/* what makes us different */}
      <div className='md:px-10 px-5 md:pb-32 md:pt-52 pt-36 pb-8  '
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}      >
        <Container>
          <div className="flex flex-col md:gap-16 gap-8">

            <h1 className='text-[#253359] 2xl:text-5xl md:text-4xl text-xl font-bold playfair-display-font text-center'>What Makes Us Different?</h1>
            <div className='flex flex-col md:flex-row w-[100%] md:gap-[3.5%] gap-5  justify-center items-center md:items-stretch'>

              <div className='flex flex-col bg-gradient-to-b from-[#253359] to-[#25335900] p-2 rounded-3xl 2xl:w-[31%] w-[70%] md:w-[29%] items-center  shadow-xl'>
                <h1 className=' text-[#253359] md:py-2 md:px-4 px-3 py-1 bg-white my-3 md:mt-10 md:mb-8 mx-4 rounded-3xl font-bold w-fit text-center 2xl:text-lg md:text-base text-sm'>YourSupportAgent</h1>
                <div className='flex flex-col items-center justify-center w-full h-full rounded-2xl bg-white text-xs md:text-sm xl:text-base'>
                  <h4 className='text-[#253359] text-center  p-3 md:p-8 w-full '>$3,500 - $7,500</h4>
                  <h4 className='text-[#253359] text-center bg-[#F3F2F2] p-3 md:p-8 w-full '>Marketing Included</h4>
                  <h4 className='text-[#253359] text-center  p-3 md:p-8 w-full'>Dedicated Account Manager</h4>
                  <h4 className='text-[#253359] text-center bg-[#F3F2F2] p-3 md:p-8 w-full text-wrap px-10'>Dedicated Agents To One Client</h4>
                  <h4 className='text-[#253359] text-center  p-3 md:p-8 w-full'>Easily Able to Pivot by Adding and Replacing Agents </h4>
                  <h4 className='text-[#253359] text-center bg-[#F3F2F2] p-3 md:p-8 w-full h-[100%] rounded-b-2xl'>Work From Our Office Space <br /></h4>
                </div>
              </div>

              <div className='flex flex-col bg-gradient-to-b from-[#D2D2D2] to-[#ffffff00] p-2 rounded-3xl 2xl:w-[31%] w-[70%] md:w-[29%] items-center border-4 border-white shadow-xl'>
                <h1 className=' text-[#253359] md:py-2 md:px-4 px-3 py-1 bg-white my-3 md:mt-10 md:mb-8 mx-4 rounded-3xl font-bold w-fit text-center 2xl:text-lg md:text-base text-sm'>Competitor</h1>
                <div className=' text-[#253359] flex flex-col items-center justify-center w-full h-full rounded-2xl bg-white text-xs md:text-sm xl:text-base'>
                  <h4 className='text-center  p-3 md:p-8 w-full'>$4,999 -  $8,999</h4>
                  <h4 className='text-center bg-[#F3F2F2] p-3 md:p-8 w-full '>N/A</h4>
                  <h4 className='text-center  p-3 md:p-8 w-full'>Dedicated Account Manager</h4>
                  <h4 className='text-center bg-[#F3F2F2] p-3 md:p-8 w-full '>Agents May have Multiple Clients</h4>
                  <h4 className='text-center  p-3 md:p-8 w-full'>Stuck With Agents Till The End Of Contract </h4>
                  <h4 className='text-center bg-[#F3F2F2] p-3 md:p-8 w-full '>Maybe Remote or In Various Locations</h4>
                </div>
              </div>

              <div className='flex flex-col bg-gradient-to-b from-[#D2D2D2] to-[#ffffff00] p-2 rounded-3xl 2xl:w-[31%] w-[70%] md:w-[29%] items-center  border-4 border-white shadow-xl'>
                <h1 className='text-[#253359] md:py-2 md:px-4 px-3 py-1 bg-white my-3 md:mt-10 md:mb-8 mx-4 rounded-3xl font-bold w-fit text-center 2xl:text-lg md:text-base text-sm'>Freelancer</h1>
                <div className='text-[#253359] flex flex-col items-center justify-center w-full h-full rounded-2xl bg-white text-xs md:text-sm xl:text-base'>
                  <h4 className='text-center  p-3 md:p-8 w-full'>$1,500 - $6,000</h4>
                  <h4 className='text-center bg-[#F3F2F2] p-3 md:p-8 w-full '>N/A</h4>
                  <h4 className='text-center  p-3 md:p-8 w-full'>N/A</h4>
                  <h4 className='text-center bg-[#F3F2F2] p-3 md:p-8 w-full '>5-15 Other Clients & No Team Effort</h4>
                  <h4 className='text-center  p-3 md:p-8 w-full'>Wasting Time & Money Trying To Find The Perfect Fit </h4>
                  <h4 className='text-center bg-[#F3F2F2] p-3 md:p-8 w-full '>Remote In Various Locations & Time Zones</h4>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* efficiency unleashed */}
      <div className='px-3 md:px-10 md:pt-14 pt-8 md:pb-40 pb-20 '
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Container>
          <div className="flex flex-col md:gap-5 gap-3 items-center ">
            <Slide direction='up' duration={1500} delay={-300}>
              <h1 className='text-[#253359] 2xl:text-5xl text-xl md:text-4xl font-bold playfair-display-font text-center'>Efficiency Unleashed, Growth Amplified, Scale Perfected!</h1>
            </Slide>
            <Slide direction='up' duration={1500} delay={-300}>
              <p className='text-[#253359] 2xl:text-xl text-sm md:text-lg font-normal text-center 2xl:max-w-4xl max-w-3xl'>At Your Support Agent, we specialize in providing top-notch outsourcing solutions tailored to meet your business needs. Our team of dedicated professionals is committed to delivering excellence in every aspect of our services.
              </p>
            </Slide>
            <Fade className='2xl:h-fit 2xl:w-fit w-[80%] xl:w-[70%] pt-5'>
              <img src='/group.svg' alt='group' loading='lazy' ></img>
            </Fade>
          </div>
        </Container>
      </div>

      {/* why choose us */}
      <div className='px-10 md:py-20 py-10'>
        <Container>
          <div className="flex flex-col md:gap-10 gap-6">
            <Fade>
              <h1 className='text-[#253359] 2xl:text-4xl text-xl md:text-3xl font-bold playfair-display-font text-center'>Why Choose Us As Your Service Agent!</h1>
            </Fade>
            <div className='flex md:flex-row flex-col justify-center w-full h-full md:gap-[1.7%] gap-5'>
              <Zoom delay={-300} className='bg-[#EFF5F2] border border-[#CBD8D3] rounded-2xl md:w-[24%] shadow-xl shadow-[#EFF5F2]'>
                <div className='flex flex-col gap-2 md:gap-4 md:px-5 md:py-9 p-4 w-full h-full'>
                  <h3 className='text-[#253359] font-semibold text-sm md:text-base 2xl:text-lg uppercase'>Expertise</h3>
                  <p className='text-[#253359] 2xl:text-base md:text-sm text-xs '>With years of experience in the industry, we have the knowledge and skills to deliver exceptional results</p>
                </div>
              </Zoom>

              <Zoom delay={-300} className='bg-[#EFF5F2] border border-[#CBD8D3] rounded-2xl md:w-[24%] shadow-xl shadow-[#EFF5F2]'>
                <div className='flex flex-col gap-2 md:gap-4 md:px-5 md:py-9 p-4 w-full h-full'>
                  <h3 className='text-[#253359] font-semibold text-sm md:text-base 2xl:text-lg uppercase'>Customized Solutions</h3>
                  <p className='text-[#253359] 2xl:text-base md:text-sm text-xs '>We understand that every business is unique. That's why we work closely with our clients to develop customized solutions that address their specific needs and goals.</p>
                </div>
              </Zoom>

              <Zoom delay={-300} className='bg-[#EFF5F2] border border-[#CBD8D3] rounded-2xl md:w-[24%] shadow-xl shadow-[#EFF5F2]'>
                <div className='flex flex-col gap-2 md:gap-4 md:px-5 md:py-9 p-4 w-full h-full'>
                  <h3 className='text-[#253359] font-semibold text-sm md:text-base 2xl:text-lg uppercase'>Reliability</h3>
                  <p className='text-[#253359] 2xl:text-base md:text-sm text-xs '>You can count on us to deliver reliable and consistent service, allowing you to focus on growing your business with peace of mind.
                  </p>
                </div>
              </Zoom>

              <Zoom delay={-300} className='bg-[#EFF5F2] border border-[#CBD8D3] rounded-2xl md:w-[24%] shadow-xl shadow-[#EFF5F2]'>
                <div className='flex flex-col gap-2 md:gap-4 md:px-5 md:py-9 p-4 w-full h-full'>
                  <h3 className='text-[#253359] font-semibold text-sm md:text-base 2xl:text-lg uppercase'>Cost-Effectiveness</h3>
                  <p className='text-[#253359] 2xl:text-base md:text-sm text-xs '> Outsourcing to Your Support Agent is not only convenient but also cost-effective. Save time and resources by leveraging our expertise and infrastructure.
                  </p>
                </div>
              </Zoom>
            </div>
          </div>
        </Container>
      </div>

      {/* Free Up resources */}
      <div className='px-4 md:px-10 md:py-20 py-8 bg-[#F4F0EA]' id='resources'>
        <Container>
          <div className="gap-10 md:gap-32 flex flex-col ">

            <div className='flex flex-col md:flex-row gap-10 w-full' >
              <div className='flex flex-col md:w-[57%] md:gap-10 gap-4' >
                <Slide duration={1500} delay={-800}>
                  <h1 className='text-[#253359] 2xl:text-4xl xl:text-3xl md:text-2xl text-lg font-bold playfair-display-font md:text-nowrap'>Free Up Resources, Accelerate Growth,<br /> and Solve for Scale.</h1>
                </Slide>
                <Slide duration={1500} delay={-800}>
                  <p className='text-[#253359] 2xl:text-xl xl:text-lg md:text-base text-xs font-normal'>At SupportAgent, we combine cutting-edge technology with value-centricity to foster high-performing, reliable teams that turn growing pains into efficient pathways to profitability.<br /><br />
                    Our customized, agile, AI-enabled solutions don't just deliver cost savings — they also help you achieve key business outcomes.<br /><br />
                    We work closely with you to continually adjust strategies, realize efficiencies, and drive scale according to your unique needs. Plus, flexibility is baked in from day one, so you're never locked into rigid, long-term contracts.<br /><br />
                    Now that's outsourcing worth talking about.
                  </p>
                </Slide>
              </div>
              <Slide direction='left' duration={2000} delay={-500} className="imgcontainer items-end md:w-[38%] hidden md:flex">
                <img src='/freeup.svg' alt='img' loading='lazy' ></img>
              </Slide>
            </div>

            <div className='flex gap-4 md:gap-10 w-full' >

              <Slide direction='up' duration={2000} delay={-900} className="imgcontainer items-end w-[38%] hidden md:flex">
                <img src='/dontgrow.svg' alt='img' loading='lazy'></img>
              </Slide>

              <div className='flex flex-col md:w-[57%] gap-4 md:gap-10' >
                <Slide direction='up' duration={1000} delay={0}>
                  <h1 className='text-[#253359] 2xl:text-4xl xl:text-3xl md:text-2xl text-lg font-bold playfair-display-font md:text-nowrap'>Don't Grow it Alone!</h1>
                </Slide>
                <Slide direction='up' duration={2000} delay={-800}>
                <p className='text-[#253359] 2xl:text-xl xl:text-lg md:text-base text-xs font-normal max-w-xl xl:max-w-full'>Don't let headcount become a headache. We'll connect you with talent that meets your needs.<br /><br />
                  Your dedicated new team members will become experts in your world — your customers, your tech, your data, your systems — so they can expand on what you've built.
                </p>
                </Slide>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </div>
  )
}

export default Different