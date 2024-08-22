import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { Mail, PhoneCall } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-[#0e1324] py-20 px-10'>
        <Container>
            <div className="flex justify-between text-white items-start">
                <div className="flex flex-col">
                <p className='text-2xl font-bold'>YSA</p>
                <p className='text-gray-500 text-wrap max-w-md'>Elite offshore talent to support your business needs. Your Support Agent is here to help you scale your business faster and more affordably.</p>
                </div>
                
                <div className="flex flex-col text-gray-400">
                    <p className='text-white'>Useful Links</p>
                    <Link >Home</Link>
                    <Link >MarketPlace</Link>
                    <Link >Individual Roles</Link>
                </div>

                <div className="flex flex-col text-gray-400">
                    <p className='text-white'>Links</p>
                    <Link >Resources</Link>
                    <Link >About Us</Link>
                    <Link >Pricing</Link>
                </div>

                <div className="flex flex-col text-gray-400 ">
                    <p className='text-white mb-2'>Contact Us</p>
                    <p className='flex gap-2 items-center'> <PhoneCall size={15} color='white'/> +0 12 457 4578</p>
                    <p className='flex gap-2 items-center'> <Mail size={15} color='white'/> support@yoursupportagent.com</p>
                </div>
            </div>
            <div className="flex justify-between items-center text-gray-200 mt-10 text-sm">
            <div className="flex gap-2">
                <p>HQ |</p>
                <p>119 Houston, Texas 39503 |</p>
                <p>Chandigarh</p>
                </div>
                <p>© YourSupportAgent 2024 All rights reserved</p>
            </div>
        </Container>
    </div>
  )
}

export default Footer