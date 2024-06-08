import { useState } from 'react'
import {Home, Marketplace} from './pages'

import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className='poppins'>
    <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/marketplace' element={<Marketplace/>} />
       </Routes>
    </div>
  )
}

export default App
