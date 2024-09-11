import React, { useEffect } from 'react'
import { Hero, Process, Step1, Step2, Step3, Advantages, About } from '../components/marketplace'
import { Contact, Footer } from '../components/layout'

import { useSnapshot } from 'valtio'
import state from '../store'
import { useParams } from 'react-router-dom'

const Marketplace = () => {

  const snap = useSnapshot(state)
  const { sector } = useParams()
  state.service = sector
  return (
    <>
      <Contact />
      <Hero sectionName={snap.service} />
      {snap.service !== 'Marketing' &&
        <>
          <Process />
          <Step1 />
          <Step2 />
          <Step3 />
        </>
      }
      <Advantages sectionName={snap.service} />
      <About sectionName={snap.service} />
      <Footer />
    </>
  )
}

export default Marketplace