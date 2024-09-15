import React from 'react'
import Container from '../layout/Container'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import { Play } from 'lucide-react'

const Packages = () => {

  const plansData = [
    {
      title: 'Professional Agents',
      description: 'Unleash the Power of Your Business with Package Plan.',
      monthly: '$4500',
      yearly: '',
      explaination: [
        'Select a package plan or Choose from a wide range of individual agents',
        'Individual Plans (160 hours) <br/> Full-Time: $9.50/hour — $1,520  <br/> Part-Time: $9.50/hour — $760',
        'Package Plans<br/> 3+ agents- $9.00/ $1,440 <br/> 10+ agents-$8.50/ $1,360',
      ],
      iconurl: '/sparkle-icon.svg?url',
      url: '/marketplace'
    },
    {
      title: 'Marketing & Sales',
      description: 'Unleash the Power of Your Business with Individual Plan.',
      monthly: '$6500',
      yearly: '',
      explaination: [
        'Select a marketing plan or Choose from a wide range of marketing agents',
        'Individual Plans (160 hours) <br/> Full-Time: $9.50/hour — $1,520  <br/> Part-Time: $9.50/hour — $760',
        'Package Plans<br/> 3+ agents- $9.00/ $1,440 <br/> 10+ agents-$8.50/ $1,360',
      ],
      iconurl: '/target-icon.svg?url',
      url: '/individual-roles'
    },
    {
      title: 'Additional Services',
      description: 'Take Your Business to the Next Level with Custom Plan.',
      monthly: '$8500',
      yearly: '',
      explaination: [
        'Fully customize your plan by selecting agents and services that that suit your needs',
        '$100/hr.',
        'Lead genration & Sales <br/> Web Dev & app Dev,<br/> Blockchain, 3D videos,<br/> Trading bot, Marketing, Automation'
      ],
      iconurl: '/gem-icon.svg?url',
      url: '/custom-services'
    }
  ]

  return (
    <div className='py-8 md:py-16 bg-gradient-to-b from-[#f4f6ff] to-[#ffffff] poppins px-4 md:px-0'>
      <Container>
        <div className="flex flex-col w-full justify-center items-center gap-1.5 md:gap-3">
          <h2 className='font-semibold text-xl md:text-4xl text-[#253359] playfair-display-font'>Find Your Perfect Plan</h2>
          <h4 className='text-gray-600 max-w-xl text-center text-xs md:text-base'>Discover the ideal plan to fuel your business growth. Our pricing options are carefully crafted to cater to businesses.</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-20 mt-10">
          {plansData.map((plan) => (
            <div className={`flex flex-col gap-1 md:gap-3 col-span-1 border border-[#E7EBFF] rounded-lg shadow-xl shadow-[#BCCAFF21] p-5 bg-no-repeat hover:bg-pattern transition-colors ease-in bg-cover bg-white`}
              key={plan.title}>
              <div className="flex ">
                <img src={plan.iconurl} className='w-[10%] md:w-fit'/>
              </div>
              <div className="flex flex-col">
                <h3 className='md:text-2xl font-medium text-xl'>{plan.title}</h3>
                <h4 className={` hover:text-black text-xs md:text-sm font-light w-xs`}>{plan.description}</h4>
              </div>
              <h4 className='text-lg md:text-2xl font-normal flex gap-1 md:gap-2 items-center border-b md:pb-3 pb-2 mb-2'>{plan.monthly} <span className='text-gray-700 text-sm font-light'>per month</span></h4>
              <div className="flex aspect-[21/9] md:aspect-[16/9]   border-white rounded-lg overflow-hidden relative">
                <img src='https://media.istockphoto.com/id/1423369897/photo/call-center-worker.jpg?s=612x612&w=0&k=20&c=KaxWNnsroknjxkXjfJijLhmdomOGFt4T-RwUF0qK3hc='
                  className=' backdrop-brightness-75 w-full object-cover object-center'
                />
                <button
                  className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] flex items-center justify-center bg-[#ffffffd6] backdrop-blur-xl shadow-md rounded-full absolute md:top-[35%] md:right-[45%] top-[33%] right-[44%]"
                >
                  <Tooltip title="Play" placement="bottom">
                    <Play color="#253359" className="md:h-[18px] h-[28px]" fill="#253359" />
                  </Tooltip>
                </button>
              </div>
              <div className="flex flex-col gap-4 py-2 ">
                {plan.explaination.map((content) => (
                  <div className="flex gap-4 items-start">
                    <img src='/check-mark.svg' className='mt-2 w-[5%] md:w-fit' />
                    <p className='text-gray-600 text-xs md:text-sm'   dangerouslySetInnerHTML={{ __html: content }}></p>
                  </div>
                ))}
              </div>
              <Link to={plan.url}>
                <button className='w-full border border-black rounded-lg md:py-2 py-1 transition-colors hover:text-[#2e4a96] hover:border-[#2e4a96]'>Get Started</button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Packages