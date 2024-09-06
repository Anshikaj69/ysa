import {Home, IndividualRoles, Marketplace, Roles, Resources, Careers, CustomService, AboutUs} from './pages'

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
         <Route path='/custom-services' element={<CustomService/>} />
         <Route path='/about-us' element={<AboutUs/>} />
       </Routes>
    </div>
  )
}

export default App
