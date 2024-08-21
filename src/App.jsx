import { useState } from 'react'
import {Home, IndividualRoles, Marketplace} from './pages'

import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className='poppins'>
    <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/marketplace' element={<Marketplace/>} />
         <Route path='/individual-roles' element={<IndividualRoles/>} />
       </Routes>
    </div>
  )
}

export default App
