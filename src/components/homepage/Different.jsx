import React from 'react'

import bg1 from '/different.svg'
import bg2 from '/unleashed.svg'
import Container from '../layout/Container'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'
import { Award, Check, FileX, HandCoins, NotepadText, Users } from 'lucide-react'

const Different = () => {

  const data = [
    {
      title: 'Your Support Agent',
      cost: '$3,500 -  $7,500',
      explaination: [
        'Marketing Included',
        'Dedicated Account Manager',
        'Dedicated Agents To One Client',
        'Easily Able to Pivot by Adding and Replacing Agents',
        'Work From Our Office Space',
      ],
      iconurl: '/union-icon.svg?url',
    },
    {
      title: 'Competitor',
      cost: '$4,999 - $8,999',
      explaination: [
        'N/A',
        'Dedicated Account Manager',
        'Agents May have Multiple Clients',
        'Stuck With Agents Till The End Of Contract',
        'Maybe Remote or In Various Locations',
      ],
      iconurl: '/star-icon.svg?url',
    },
    {
      title: 'Freelancer',
      cost: '$4,500- $8,500',
      explaination: [
        'N/A',
        'N/A',
        '5-15 Other Clients & No Team Effort',
        'Wasting Time & Money Trying To Find The Perfect Fit',
        'Remote In Various Locations & Time Zones'
      ],
      iconurl: '/freelancer-icon.svg?url',
    }
  ]

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
            <div className='grid md:grid-cols-3 grid-cols-1 w-[100%] gap-5 justify-center items-center md:items-stretch'>
              {data.map((item) => (
                <div className="grid-cols-1 flex flex-col p-6 bg-white hover:bg-[#677AAE] transition-colors rounded text-black hover:text-white group">
                  <div className="flex flex-col gap-2 border-b pb-2 group-hover:border-none">
                  <div className="flex items-center justify-center rounded-full pr-3 pl-3 pt-3 pb-2 w-fit bg-gradient-to-b from-[#A5D6FD] to-[#253359] group-hover:from-[#ffffff34] group-hover:to-[#ffffff34] group-hover:border-2 group-hover:border-[#e3e2e2ae] group-hover:backdrop-blur-lg transition-all">
                    <img src={item.iconurl} />
                  </div>
                  <h3 className="group-hover:text-white text-xl font-medium">{item.title}</h3>
                  <p className="group-hover:text-white">{item.cost}</p>
                  </div>
                  <div className="flex flex-col py-5 px-6 gap-2">
                  {item.explaination.map((text) => (
                    <div className="flex gap-3 items-center ">
                      <div className="flex bg-[#A5D6FD] group-hover:bg-white my-1 rounded-full p-0.5 h-fit w-fit">
                     <Check className='text-white group-hover:text-[#A5D6FD]' strokeWidth={2} size={15}/>
                      </div>
                      <p className='text-sm'>{text}</p>
                    </div>
                  ))}
                  </div>
                </div>
              ))}
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
              <div className="flex flex-col xl:gap-2 md:gap-1">
              <h1 className='text-[#253359] 2xl:text-4xl text-xl md:text-3xl font-bold playfair-display-font text-center'>Why Choose Us As Your Service Agent!</h1>
              <p className='text-[#253359] text-xs md:text-sm text-center'>Your Vision, Our Dedication—A Partnership for Success.<br />Let's Build a Better Future, Together.</p>
              </div>
            </Fade>
            <div className='flex md:flex-row flex-col justify-center w-full h-full md:gap-[1.7%] gap-5'>
              
              <Zoom delay={-300} className='bg-[#EFF5F2] border border-[#CBD8D3] rounded-2xl md:w-[24%] shadow-xl shadow-[#EFF5F2]'>
                <div className='flex flex-col gap-2 items-center justify-between w-ful h-full'>
                  <h3 className='flex gap-2 items-center text-[#252B42] font-bold text-sm md:text-base  uppercase  md:px-5 md:py-5 p-4'><span className='bg-white rounded-full p-2 md:p-4 text-[#253359]'><Users /></span> Expertise</h3>
                  <div className="flex bg-white rounded-2xl md:gap-4 md:px-5  p-4 w-full h-full">
                  <p className='text-[#253359] 2xl:text-base md:text-sm text-xs '>With years of experience in the industry, we have the knowledge and skills to deliver exceptional results</p>
                  </div>
                </div>
              </Zoom>

              <Zoom delay={-300} className='bg-[#EFF5F2] border border-[#CBD8D3] rounded-2xl md:w-[24%] shadow-xl shadow-[#EFF5F2]'>
                <div className='flex flex-col gap-2 items-center justify-between w-ful h-full'>
                  <h3 className='flex gap-2 items-center text-[#252B42] font-bold text-sm md:text-base  uppercase  md:px-5 md:py-5 p-4'><span className='bg-white rounded-full p-2 md:p-4 text-[#253359]'><Award /></span> Customized Solutions</h3>
                  <div className="flex bg-white rounded-2xl md:gap-4 md:px-5  p-4 w-full h-full">
                  <p className='text-[#253359] 2xl:text-base md:text-sm text-xs '>We understand that every business is unique. That's why we work closely with our clients to develop customized solutions that address their specific needs and goals.</p>
                  </div>
                </div>
              </Zoom>

              <Zoom delay={-300} className='bg-[#EFF5F2] border border-[#CBD8D3] rounded-2xl md:w-[24%] shadow-xl shadow-[#EFF5F2]'>
                <div className='flex flex-col gap-2 items-center justify-between w-ful h-full'>
                  <h3 className='flex gap-2 items-center text-[#252B42] font-bold text-sm md:text-base  uppercase  md:px-5 md:py-5 p-4'><span className='bg-white rounded-full p-2 md:p-4 text-[#253359]'><HandCoins /></span> Financial Services </h3>
                  <div className="flex bg-white rounded-2xl md:gap-4 md:px-5  p-4 w-full h-full">
                  <p className='text-[#253359] 2xl:text-base md:text-sm text-xs '>You can count on us to deliver reliable and consistent service, allowing you to focus on growing your business with peace of mind.</p>
                  </div>
                </div>
              </Zoom>

              <Zoom delay={-300} className='bg-[#EFF5F2] border border-[#CBD8D3] rounded-2xl md:w-[24%] shadow-xl shadow-[#EFF5F2]'>
                <div className='flex flex-col gap-2 items-center justify-between w-ful h-full'>
                  <h3 className='flex gap-2 items-center text-[#252B42] font-bold text-sm md:text-base  uppercase  md:px-5 md:py-5 p-4'><span className='bg-white rounded-full p-2 md:p-4 text-[#253359]'><NotepadText /></span> Cost-Effectiveness </h3>
                  <div className="flex bg-white rounded-2xl md:gap-4 md:px-5  p-4 w-full h-full">
                  <p className='text-[#253359] 2xl:text-base md:text-sm text-xs '>Outsourcing to Your Support Agent is not only convenient but also cost-effective. Save time and resources by leveraging our expertise and infrastructure.</p>
                  </div>
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