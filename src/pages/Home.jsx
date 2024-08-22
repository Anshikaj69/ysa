import React ,  { Suspense, lazy , useEffect}from 'react'
import {Hero,  Testimonials} from '../components/homepage'
import { Contact, Footer } from '../components/layout'

const Solutions = lazy(() => import('../components/homepage/Solutions'));
const Different = lazy(() => import('../components/homepage/Different'));

const Home = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

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
      <Footer />
    </div>
  )
}

export default Home