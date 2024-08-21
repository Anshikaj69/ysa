import React , {useEffect} from 'react'
import { Hero, Process, Step1, Step2, Step3, Advantages, About } from '../components/marketplace'
import { Contact } from '../components/layout'

import { useSnapshot } from 'valtio'
import state from '../store'

const Marketplace = () => {

  const snap= useSnapshot(state)

  return (
    <>
    <Contact/>
    <Hero sectionName={snap.service}/>
    <Process/>
    <Step1/>
    <Step2/>
    <Step3/>
    <Advantages sectionName={snap.service}/>
    <About sectionName={snap.service}/>
    </>
  )
}

export default Marketplace