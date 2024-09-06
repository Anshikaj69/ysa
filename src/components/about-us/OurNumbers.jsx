import React from 'react'
import Container from '../layout/Container'

const OurNumbers = () => {
  return (
    <div className='pb-14 pt-24 px-4 md:px-10'>
        <Container>
            <div className="grid grid-cols-3 justify-between items-center gap-10">
                <div className="flex flex-col col-span-1 text-[#253359] items-center justify-center gap-2 text-center">
                    <h3 className='text-3xl font-bold playfair-display-font'>200+</h3>
                    <h4 className='text-lg font-semibold'>We are a Family</h4>
                    <p className='text-black'>Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced.</p>
                </div>
                <div className="flex flex-col col-span-1 text-[#253359] items-center justify-center gap-2 text-center">
                    <h3 className='text-3xl font-bold playfair-display-font'>99%</h3>
                    <h4 className='text-lg font-semibold'>Graphic Design</h4>
                    <p className='text-black'>Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.</p>
                </div>
                <div className="flex flex-col col-span-1 text-[#253359] items-center justify-center gap-2 text-center">
                    <h3 className='text-3xl font-bold playfair-display-font'>1.5M+</h3>
                    <h4 className='text-lg font-semibold'>Digital Marketing</h4>
                    <p className='text-black'>Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh.</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default OurNumbers