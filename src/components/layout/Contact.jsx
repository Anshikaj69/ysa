import React from 'react'
import Container from './Container'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl 2xl:pb-4 md:pb-3'>
     <div className='bg-[#253359]  px-10 pb-2 pt-2 2xl:mb-5 md:mb-3'>
      <Container>
        {/* contact */}
        <div className='flex justify-between '>
          <h6 className='text-white text-xs xl:text-sm self-center cursor-pointer'>support@yoursupportagent.com</h6>
          <button className='bg-white hover:bg-[#253359] border text-[#253359] hover:text-[#fff] lg:font-semibold text-xs xl:text-sm py-1 px-3 mr-2 rounded'>CALL NOW</button>
        </div>
      </Container>
      </div>
      <div className="backdrop-blur-xl">
      <Container>
        <Navbar />
      </Container>
      </div>
    </div>
  )
}

export default Contact