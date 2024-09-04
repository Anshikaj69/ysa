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
      <div className='bg-white px-4 py-8 md:px-10 md:py-20' id='industries' ref={industryRef}>
        <Container>
        <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-100 bg-transparent p-0"
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
            className={activeTab === value ? "text-[#253359] font-bold scale-[1.1]" : "font-semibold"}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({value, desc }) => (
          <TabPanel key={value} value={value}>
            <div className={`grid ${desc.length < 6 ? 'grid-cols-2 md:px-32' : 'grid-cols-4 '} gap-6 py-8 md:px-10 items-center justify-center`}>
            {desc.map(item => 
              <Link to={item.link}><div key={item.title} className="flex flex-col gap-4 col-span-1 text-black hover:text-indigo-700 border border-indigo-900 rounded-md items-center justify-center py-8 px-2 cursor-pointer hover:shadow-indigo-300 hover:shadow transition">
                <div className='scale-[1.35] p-2 bg-indigo-50 rounded text-indigo-700'>{item.icon}</div>
                <p className=' font-semibold'>{item.title}</p>
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