import React from 'react'
import Container from './Container'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl  2xl:pb-2 md:pb-2'>
     <div className='bg-[#253359]  px-10 pb-2 pt-2 2xl:mb-2 md:mb-2'>
      <Container>
        {/* contact */}
        <div className='flex justify-between '>
          <h6 className='text-white text-xs 2xl:text-sm self-center cursor-pointer'>support@yoursupportagent.com</h6>
          <button className='bg-white hover:bg-[#253359] border text-[#253359] hover:text-[#fff] 2xl:font-semibold font-medium text-xs 2xl:text-sm 2xl:py-1 2xl:px-3 md:px-1.5 py-1 mr-2 rounded'>CALL NOW</button>
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