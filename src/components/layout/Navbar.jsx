import React from 'react'

import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
  
      {/* Navbar */}
      <div className=' flex justify-between  '>
        <div>
          <img src='/logo.svg' alt='YSA LOGO' className='flex gap-5 items-center'></img>
        </div>
        <div className='flex gap-12 '>
          <nav className='flex gap-5 items-center'>
            <a href='/#industries' className='text-[#253359] font-semibold text-md'>Industries</a>
            <a href='/#individuals' className='text-[#253359] font-semibold text-md'>Individual Roles</a>
            <a href='/#marketing' className='text-[#253359] font-semibold text-md'>Marketing Service</a>
            <a href='/#custom' className='text-[#253359] font-semibold text-md'>Custom Service</a>
            <Link className='text-[#253359] font-semibold text-md'>About US</Link>
            <a href='/#resources' className='text-[#253359] font-semibold text-md'>Resources</a>
            <Link className='text-[#253359] font-semibold text-md'>Pricing</Link>

          </nav>
          <div>
            <Link to='/marketplace'>
            <button className='bg-[#253359] text-white rounded-3xl py-2.5 px-5 text-md'>Book a Call</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar