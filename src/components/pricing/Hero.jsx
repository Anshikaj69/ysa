import React from 'react'
import Container from '../layout/Container'

const Hero = () => {
  return (
    <div className="flex flex-col 2xl:mt-24 md:mt-20 mt-16 py-10 gap-10 md:px-10 px-5 poppins bg-gradient-to-b from-[#dfe3fa] to-[#ffffff]">
      <Container>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className='text-4xl font-bold text-center text-[#253359]'>Flexible Plans & Pricing for Outsourcing Agents</h1>
        <p className='text-center text-gray-700 text-sm max-w-3xl'>We offer flexible pricing options designed to fit your business needs, whether you're looking for individual agents or a full team. Choose the right plan for your business and get started today.</p>
      </div>
      </Container>
    </div>
  )
}

export default Hero