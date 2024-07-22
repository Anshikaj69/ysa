import React from 'react'

import { Link } from "react-router-dom";
import Container from './Container';

const Navbar = () => {
  return (
    <>
  
      {/* Navbar */}
      <Container>
      
      <div className='flex justify-between md:px-10 2xl:px-0 '>
        
      
        <div className='box-border'>
          <Link to='/'><img src='/logo.svg' alt='YSA LOGO' className='flex items-center md:h-[90%] md:w-[90%]'></img></Link>
        </div>
        <div className='flex gap-12 '>
          <nav className='flex gap-5 items-center'>
            <a href='/#industries' className='text-[#253359] font-semibold text-xs xl:text-sm  2xl:text-base'>Industries</a>
            <a href='/#individuals' className='text-[#253359] font-semibold text-xs xl:text-sm  2xl:text-base'>Individual Roles</a>
            <a href='/#marketing' className='text-[#253359] font-semibold text-xs xl:text-sm  2xl:text-base'>Marketing Service</a>
            <a href='/#custom' className='text-[#253359] font-semibold text-xs xl:text-sm  2xl:text-base'>Custom Service</a>
            <a className='text-[#253359] font-semibold text-xs xl:text-sm  2xl:text-base'>About Us</a>
            <a href='/#resources' className='text-[#253359] font-semibold text-xs xl:text-sm  2xl:text-base'>Resources</a>
            <a className='text-[#253359] font-semibold text-xs xl:text-sm  2xl:text-base'>Pricing</a>

          </nav>
          <div>
            <Link to='/marketplace'>
            <button className='hover:bg-[#e0efe3] text-white rounded-3xl py-2.5 px-5 text-xs xl:text-sm 2xl:text-base btn btn1'>Book a Call</button>
            </Link>
          </div>
        </div>
       
      </div>
      </Container>
    </>
  )
}

export default Navbar