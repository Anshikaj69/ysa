import React ,  { Suspense, lazy , useEffect}from 'react'
import {Hero,  Testimonials} from '../components/homepage'
import { Contact, Footer } from '../components/layout'
import { CircularProgress } from '@mui/material';

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
      <Suspense fallback={<div className='flex w-full h-[30vh] items-center justify-center'><CircularProgress color="secondary" /></div>}>
        <Solutions />
      </Suspense>
      <Suspense fallback={<div className='flex w-full h-[30vh] items-center justify-center'><CircularProgress color="secondary" /></div>}>
        <Different />
      </Suspense>
      <Testimonials/>
      <Footer />
    </div>
  )
}

export default Home