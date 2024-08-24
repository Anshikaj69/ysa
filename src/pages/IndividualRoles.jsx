import React from 'react'
import { Contact,  Footer } from '../components/layout'
import { Process, Step1 ,Agents} from '../components/individual-roles'
import { Step3 } from '../components/marketplace'


const IndividualRoles = () => {
  return (
    <>
    <Contact /> 
    <Process />
    <Step1 />
    <Step3 />
    <Agents />
    <Footer />
    </>
  )
}

export default IndividualRoles