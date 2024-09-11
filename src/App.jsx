import {Home, IndividualRoles, Marketplace, Roles, Resources, Careers, CustomService, AboutUs} from './pages'

import { Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';

function App() {

  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#253359',
      },
    }}
  >  
    <div className='poppins'>
    <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/sectors/:sector' element={<Marketplace/>} />
         <Route path='/individual-roles' element={<IndividualRoles/>} />
         <Route path='/individual-roles/:role' element={<Roles/>} />
         <Route path='/resources' element={<Resources/>} />
         <Route path='/careers' element={<Careers/>} />
         <Route path='/custom-services' element={<CustomService/>} />
         <Route path='/about-us' element={<AboutUs/>} />
       </Routes>
    </div>
    </ConfigProvider>
  )
}

export default App
