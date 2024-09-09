import React from 'react'
import { useRef, useEffect } from 'react'

import Container from '../layout/Container'
import { useLocation } from 'react-router-dom'
import './homepage.css'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { AdditionalServicesItems, roles, sectors } from '../layout/Navbar'
import { Link } from 'react-router-dom'
import { GlobalStyles } from '@mui/material'

const Solutions = () => {

  const [activeTab, setActiveTab] = React.useState("sectors");
  const data = [
    {
      label: "SECTORS",
      value: "sectors",
      desc: sectors,
    },
    {
      label: "ROLES",
      value: "roles",
      desc: roles,
    },
    {
      label: "CUSTOM SERVICES",
      value: "custom",
      desc: AdditionalServicesItems,
    }
  ];

  const industryRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#industries') {
      industryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location]);

  return (
    <>
      {/* sulutions */}

      <div className='bg-white px-4 py-8 md:px-10 md:py-14' id='industries' ref={industryRef}>
        <Container>
          <h2 className='playfair-display-font font-bold text-lg md:text-4xl text-center text-[#253359] mb-8 md:mb-12'>Our Range of Outsourcing Solutions</h2>
        <Tabs value={activeTab} className='poppins'  sx={{ fontFamily: 'Poppins, sans-serif' }}    >
      <TabsHeader
        className="rounded-none border-b border-blue-gray-100 bg-transparent p-0 "
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-[#253359] font-bold scale-[1.1]" : " text-gray-700 font-semibold"}
          >
           <p className='text-[10px] md:text-base poppins'>{label}</p>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({value, desc }) => (
          <TabPanel key={value} value={value}>
            <div className={`grid ${desc.length < 6 ? 'md:grid-cols-2 md:px-32' : 'md:grid-cols-4 '} grid-cols-2 gap-6 py-5 md:py-8 md:px-10 items-center justify-center`}>
            {desc.map(item => 
              <Link to={item.link}><div key={item.title} className="flex flex-col gap-2 md:gap-4 col-span-1 text-black hover:text-[#31319a] border border-[#31319a] rounded-md items-center justify-center py-4 md:py-8 px-2 cursor-pointer hover:shadow-[#31319a] hover:shadow transition">
                <div className='md:scale-[1.35] p-2 bg-[#F4F6FF] rounded text-[#31319a]'>{item.icon}</div>
                <p className=' font-semibold text-center text-xs md:text-xs lg:text-xs 2xl:text-base poppins'>{item.title}</p>
              </div>
              </Link>
            )}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>

        </Container>
      </div>
    </>
  )
}

export default Solutions