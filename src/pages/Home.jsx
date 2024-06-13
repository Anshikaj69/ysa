import React ,  { Suspense, lazy }from 'react'
import {Hero,  Testimonials} from '../components/homepage'
import { Contact } from '../components/layout'

const Solutions = lazy(() => import('../components/homepage/Solutions'));
const Different = lazy(() => import('../components/homepage/Different'));

const Home = () => {

  return (
    <div className=''>
      <Contact/>
      <Hero/>
      <Suspense fallback={<div>Loading Solutions...</div>}>
        <Solutions />
      </Suspense>
      <Suspense fallback={<div>Loading Different...</div>}>
        <Different />
      </Suspense>
      <Testimonials/>
    </div>
  )
}

export default Home