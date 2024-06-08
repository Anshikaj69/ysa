import React from 'react'
import {Hero, Solutions, Testimonials} from '../components/homepage'
import { Contact } from '../components/layout'


const Home = () => {

  return (
    <div className=''>
      <Contact/>
      <Hero/>
      <Solutions/>
      <Testimonials/>
    </div>
  )
}

export default Home