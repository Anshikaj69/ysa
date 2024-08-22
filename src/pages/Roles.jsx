import React from 'react'
import { Contact,Footer } from '../components/layout'
import { Hero, Perks } from '../components/roles'

import { useSnapshot } from 'valtio'
import { useParams } from 'react-router-dom';
import state from '../store'

const Roles = () => {
    const { role } = useParams();
    const snap = useSnapshot(state)
    state.role = role

    return (
        <div>
            <Contact />
            <Hero RoleName={snap.role} />
            <Perks RoleName={snap.role} />
            <Footer />
        </div>
    )
}

export default Roles