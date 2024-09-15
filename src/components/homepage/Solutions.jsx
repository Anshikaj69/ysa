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
import { ChevronDownIcon, ChevronRightIcon, SquareArrowOutUpRightIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const Solutions = () => {

  const [activeTab, setActiveTab] = React.useState("sectors");
  const [openSubSector, setOpenSubSector] = React.useState(null);

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
          <Tabs value={activeTab} className='poppins' sx={{ fontFamily: 'Poppins, sans-serif' }}    >
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
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  <div className={`grid ${desc.length < 6 ? 'md:grid-cols-2 md:px-32' : 'md:grid-cols-4 '} grid-cols-2 gap-6 py-5 md:py-8 md:px-10 items-center justify-center`}>
                    {desc.map(item =>
                      <SolutionItemWithSubSectors
                        key={item.title}
                        item={item}
                        openSubSector={openSubSector}
                        setOpenSubSector={setOpenSubSector}
                      />
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

const SolutionItemWithSubSectors = ({ item, openSubSector, setOpenSubSector }) => {
  const isOpen = openSubSector === item.title;

  const toggleSubSectors = () => {
    setOpenSubSector(isOpen ? null : item.title);
  };

  return item.subSectors && item.subSectors.length > 0 ? (
    <div className="w-full">
      <div
        onClick={toggleSubSectors}
        className="relative flex flex-col gap-2 md:gap-4 col-span-1 text-black hover:text-[#31319a] border border-[#31319a] rounded-md items-center justify-center py-4 md:py-8 px-1 cursor-pointer hover:shadow-[#31319a] hover:shadow transition">
        <div className='md:scale-[1.35] p-2 bg-[#F4F6FF] rounded text-[#31319a]'>{item.icon}</div>
        <div className="flex gap- items-center justify-center">
        <p className=' font-medium text-center text-xs md:text-xs lg:text-xs 2xl:text-base poppins'>{item.title}</p>
        {item.subSectors && (
          <ChevronDownIcon size={18} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
        )}
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.ul
            className="absolute left-0 right-0 top-full mt-2 z-10 bg-white shadow-lg rounded-md py-2"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {item.subSectors.map(subSector => (
                <Link key={subSector.title} to={subSector.link} >
                  <li className="text-xs md:text-sm font-medium text-gray-600 hover:text-[#31319a] transition-colors mb-1 flex gap-2 items-center">
                    {subSector.title} <SquareArrowOutUpRightIcon size={12} />
                  </li>
                </Link>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  ) : (
    <Link to={item.link}><div key={item.title} className="flex flex-col gap-2 md:gap-4 col-span-1 text-black hover:text-[#31319a] border border-[#31319a] rounded-md items-center justify-center py-4 md:py-8 px-2 cursor-pointer hover:shadow-[#31319a] hover:shadow transition">
      <div className='md:scale-[1.35] p-2 bg-[#F4F6FF] rounded text-[#31319a]'>{item.icon}</div>
      <p className=' font-medium text-center text-xs md:text-xs lg:text-xs 2xl:text-base poppins'>{item.title}</p>
    </div>
    </Link>
  );
};


export default Solutions