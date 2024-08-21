import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Container from './Container';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Container>
        <div className='flex justify-between md:px-10 2xl:px-0 '>
          <div className='box-border'>
            <Link to='/'><img src='/logo.svg' alt='YSA LOGO' className='flex items-center md:h-[90%] md:w-[90%]'></img></Link>
          </div>
          <div className='flex gap-12 items-center'>
            <nav className='flex gap-5 items-center text-[#253359] 2xl:text-sm md:text-xs'>
              <Link to='/#industries' className=' font-semibold'>Industries</Link>              
              <span onClick={() => handleLinkClick('/individual-roles')} className='cursor-pointer font-semibold'>Individual Roles</span>
              <span onClick={() => handleLinkClick('/marketplace')} className='cursor-pointer font-semibold'>Marketing Service</span>
              <Link to='/#custom' className=' font-semibold   '>Custom Service</Link>
              <Link to='/marketplace#aboutus' className=' font-semibold   '>About Us</Link>
              <Link to='/#resources' className=' font-semibold   '>Resources</Link>
              <Link to='/marketplace#pricing' className=' font-semibold   '>Pricing</Link>
            </nav>
            <div>
              <span onClick={() => handleLinkClick('/marketplace#step1')}>
                <button className='hover:bg-[#e0efe3] bg-[#253359] font-normal rounded-3xl py-2 px-3 text-xs text-white 2xl:text-sm btn btn1'>Book a Call</button>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
