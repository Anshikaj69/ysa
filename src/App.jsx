import {Home, IndividualRoles, Marketplace, Roles, Resources, Careers} from './pages'

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='poppins'>
    <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/marketplace' element={<Marketplace/>} />
         <Route path='/individual-roles' element={<IndividualRoles/>} />
         <Route path='/individual-roles/:role' element={<Roles/>} />
         <Route path='/resources' element={<Resources/>} />
         <Route path='/careers' element={<Careers/>} />
       </Routes>
    </div>
  )
}

export default App
