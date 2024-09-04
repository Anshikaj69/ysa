import React from 'react'
import Container from '../layout/Container'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import { Play } from 'lucide-react'

const Packages = () => {

  const plansData = [
    {
      title: 'Package',
      description: 'Unleash the Power of Your Business with Package Plan.',
      monthly: '$4500',
      yearly: '',
      explaination: [
        'select a marketing plan (sliver, gold, platinum) which includes any three full time agents of your choice',
        'save on  overhead by chosing a package',
        'create a structure that works with your company needs'
      ],
      iconurl: '/sparkle-icon.svg?url',
      url: '/marketplace'
    },
    {
      title: 'Individual',
      description: 'Unleash the Power of Your Business with Individual Plan.',
      monthly: '$6500',
      yearly: '',
      explaination: [
        'Choose from a wide range of individual agents to fit your specific needs',
        'Flexibility at its best—select only the agents you require, whenever you need them',
        'Pay only for the agents you need, with no extra overhead costs'
      ],
      iconurl: '/target-icon.svg?url',
      url: '/individual-roles'
    },
    {
      title: 'Custom',
      description: 'Take Your Business to the Next Level with Custom Plan.',
      monthly: '$8500',
      yearly: '',
      explaination: [
        'Fully customize your plan by selecting agents and services that that suit your needs',
        'Adjust the number of agents and hours as your business grows—no one-size-fits-all',
        'Design a workflow that is perfectly tailored to your operational needs'
      ],
      iconurl: '/gem-icon.svg?url',
      url: '/custom-services'
    }
  ]

  return (
    <div className='py-16 bg-gradient-to-b from-[#f4f6ff] to-[#ffffff] outfit'
    // style={{
    //   backgroundImage: `url(${'/circular-pattern.svg?url'})`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center top',
    //   backgroundRepeat: 'no-repeat'
    // }}  
    >
      <Container>
        <div className="flex flex-col w-full justify-center items-center gap-3">
          <h2 className='font-medium text-4xl'>Find Your Perfect Plan</h2>
          <h4 className='text-gray-600 max-w-xl text-center'>Discover the ideal plan to fuel your business growth. Our pricing options are carefully crafted to cater to businesses.</h4>
        </div>
        <div className="grid grid-cols-3 gap-4 md:mx-20 mt-10">
          {plansData.map((plan) => (
            <div className={`flex flex-col gap-3 col-span-1 border border-[#E7EBFF] rounded-lg shadow-xl shadow-[#BCCAFF21] p-5
              ${plan.title === 'Custom' ? "bg-pattern" : "bg-white"}`}
              key={plan.title}>
              <div className="flex">
                <img src={plan.iconurl} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className='text-2xl font-medium'>{plan.title}</h3>
                <h4 className={` ${plan.title === 'Custom' ? "text-black" : "text-gray-600"} text-sm font-light w-xs`}>{plan.description}</h4>
              </div>
              <h4 className='text-2xl font-medium flex gap-2 items-center border-b pb-3 mb-2'>{plan.monthly} <span className='text-gray-700 text-sm font-light'>per month</span></h4>
              <div className="flex aspect-[16/9]   border-white rounded-lg overflow-hidden relative">
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
                    <img src='/check-mark.svg' className='mt-2' />
                    <p className='text-gray-600 text-sm'>{content}</p>
                  </div>
                ))}
              </div>
              <Link to={plan.url}>
                <button className='w-full border border-black rounded-lg py-2 transition-colors hover:text-[#6d94ff] hover:border-[#6d94ff]'>Get Started</button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Packages