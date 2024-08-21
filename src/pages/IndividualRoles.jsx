import React from 'react'
import { Contact } from '../components/layout'
import {Navbar} from '../components/layout'

import { useSnapshot } from 'valtio'
import state from '../store'
import { Hero, Perks } from '../components/individual-roles'

const IndividualRoles = () => {
  const snap = useSnapshot(state)
  return (
    <>
    <Contact />
    <Navbar />
    <Hero RoleName={snap.role}/>
    <Perks RoleName={snap.role}/>
    </>
  )
}

export default IndividualRoles