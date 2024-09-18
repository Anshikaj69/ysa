import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { Mail, PhoneCall } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-[#0e1324] py-20 px-10'>
        <Container>
            <div className="flex md:flex-row flex-col gap-5 md:gap-0 justify-between text-white items-start">
               
                <div className="flex flex-col">
                <p className='text-xl md:text-2xl font-bold'>YSA</p>
                <p className='text-gray-500 text-wrap text-xs md:text-base'>Elite offshore talent to support your business needs. Your Support Agent is here to help you scale your business faster and more affordably.</p>
                </div>
                
                <div className="flex gap-10 md:gap-0 md:justify-evenly w-full text-sm md:text-base">
                <div className="flex flex-col text-gray-400">
                    <p className='text-white'>Useful Links</p>
                    <Link to='/'>Home</Link>
                    <Link to='/#outsourcing-agents'>Sectors</Link>
                    <Link to='/individual-roles'>Roles</Link>
                </div>
                

                <div className="flex flex-col text-gray-400">
                    <p className='text-white'>Links</p>
                    <Link to='/resources'>Resources</Link>
                    <Link to='/about-us'>About Us</Link>
                    <Link to='/pricing'>Pricing</Link>
                </div>
                </div>

                <div className="flex flex-col text-gray-400 text-sm md:text-base">
                    <p className='text-white mb-2'>Contact Us</p>
                    <p className='flex gap-2 items-center'> <PhoneCall size={15} color='white'/> +0 12 457 4578</p>
                    <p className='flex gap-2 items-center'> <Mail size={15} color='white'/> support@yoursupportagent.com</p>
                </div>
            </div>
            <div className="flex md:flex-row flex-col gap-4 md:gap-0 justify-between md:items-center text-gray-200 mt-10 text-xs md:text-sm">
            <div className="flex md:flex-row flex-col md:gap-2">
                <p>HQ |</p>
                <p>119 Houston, Texas 39503 |</p>
                <p>Chandigarh</p>
                </div>
                <p className='text-center mt-4 md:mt-0'>© YourSupportAgent 2024 All rights reserved</p>
            </div>
        </Container>
    </div>
  )
}

export default Footer