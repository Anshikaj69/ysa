import React from 'react'
import Container from './Container'

const Contact = () => {
  return (
    <div className='bg-[#253359]  px-10 py-2'>
      <Container>
        {/* contact */}
        <div className='flex justify-between '>
          <h6 className='text-white text-xs xl:text-sm self-center cursor-pointer'>support@yoursupportagent.com</h6>
          <button className='bg-white hover:bg-[#253359] border text-[#253359] hover:text-[#fff] lg:font-semibold text-xs xl:text-sm py-1 px-3 mr-2 rounded'>CALL NOW</button>
        </div>
      </Container>
    </div>
  )
}

export default Contact