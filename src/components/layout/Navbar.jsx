import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Container from './Container';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <Container>
        <div className='flex justify-between items-center px-2 md:px-10 2xl:px-0 w-full'>
          <div className='box-border'>
            <Link to='/'><img src='/logo.svg' alt='YSA LOGO' className='flex items-center h-[60%] w-[60%] py-2 md:py-0 md:h-[90%] md:w-[90%]'></img></Link>
          </div>
          <div className='gap-12 items-center hidden md:flex'>
            <nav className='flex gap-5 items-center text-[#253359] 2xl:text-sm md:text-xs'>
              <Link to='/#industries' className=' font-semibold'>Industries</Link>              
              <span onClick={() => handleLinkClick('/individual-roles')} className='cursor-pointer font-semibold'>Individual Roles</span>
              <span onClick={() => handleLinkClick('/marketplace')} className='cursor-pointer font-semibold'>Marketing Service</span>
              <Link to='/#custom' className=' font-semibold   '>Custom Service</Link>
              <Link to='/careers' className=' font-semibold '>Careers</Link>
              <Link to='/resources' className=' font-semibold   '>Resources</Link>
              <Link to='/marketplace#pricing' className=' font-semibold   '>Pricing</Link>
            </nav>
            <div>
              <span onClick={() => handleLinkClick('/marketplace#step1')}>
                <button className='hover:bg-[#e0efe3] bg-[#253359] font-normal rounded-3xl py-2 px-3 text-xs text-white 2xl:text-sm btn btn1'>Book a Call</button>
              </span>
            </div>
          </div>
          <div className="flex md:hidden font-semibold space-x-8 md:text-sm text-xs">
            {/* mobile menu */}
            <button onClick={handleNavToggle}>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Panel */}
      <div
        className={`absolute bg-[#181818] inset-0 z-40 w-screen h-screen flex flex-col p-2 transition-transform duration-500 transform ${isNavOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex w-full h-24 px-5 text-white items-center justify-between">
          <Link to="/" className="text-2xl font-normal pr-1">
            Browse
          </Link>
          <button onClick={handleNavToggle} className="text-3xl">
            {isNavOpen ? "✕" : "☰"}
          </button>
        </div>
        <nav className="flex flex-col items-center justify-start space-y-5 pt-20 text-white ">
          <Link to='/#industries' onClick={() => handleLinkClick('/#industries')} className='font-semibold'>Industries</Link>
          <span onClick={() => handleLinkClick('/individual-roles')} className='cursor-pointer font-semibold'>Individual Roles</span>
          <span onClick={() => handleLinkClick('/marketplace')} className='cursor-pointer font-semibold'>Marketing Service</span>
          <Link to='/#custom' onClick={() => handleLinkClick('/#custom')} className='font-semibold'>Custom Service</Link>
          <Link to='/resources' onClick={() => handleLinkClick('/resources')} className='font-semibold'>Resources</Link>
          <Link to='/careers' className=' font-semibold '>Careers</Link>
          <Link to='/marketplace#pricing' className=' font-semibold   '>Pricing</Link>
          </nav>
      </div>
    </>
  );
};

export default Navbar;