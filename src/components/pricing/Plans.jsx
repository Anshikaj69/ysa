import React from 'react'
import Container from '../layout/Container'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Check, DotIcon, SparkleIcon } from 'lucide-react';

const services = [
  "Monthly Ad Credit",
  "CRM",
  "Search Engine Optimization",
  "Social Media",
  "Landing Page",
  "Email Marketing",
  "Video Post",
  "PPC & Ad Management",
  "Ad Marketing",
  "Monthly Report"
];

const Plans = () => {
  const [activeTab, setActiveTab] = React.useState("agents");
  const data = [
    {
      label: "Professional Agents",
      value: "agents",
      desc: <Agents />,
    },
    {
      label: "Marketing & Sales",
      value: "marketing",
      desc: <Marketing />,
    },
    {
      label: "Additional Services",
      value: "additional",
      desc: <Additional />,
    }
  ];


  return (
    <div className='py-8'>
      <Container>
        <Tabs value={activeTab}>
          <TabsHeader 
           className="bg-transparent md:mx-40 border-b border-gray-300 rounded-none"
           indicatorProps={{
             className:
               "bg-[#253359] text-white shadow-none rounded ",
           }}>
            {data.map(({ label, value }) => (
              <Tab  
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`mx-3 poppins ${activeTab === value ? "text-white font-medium scale-[1.1]" : "text-[#253359] font-semibold"} `}>
                <p className='poppins'>{label}</p>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
               {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>

      </Container>
    </div>
  )
}

export default Plans


const Agents = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 poppins md:mx-10">
    <div className=" md:col-span-2 flex flex-col gap-2 justify-center items-center border-2 border-[#dde2ff] rounded md:p-8 p-2">
      <h1 className='text-center font-bold text-[#253359] text-sm '>Your Support Agent</h1>
      <p className='font-bold text-2xl text-black '>$4500/month</p>
      <p className='text-gray-600 font-medium'>Select a Package Plan or Choose from a Wide Range of Individual Agents</p>

      <div className="grid grid-cols-2 text-black mt-5">
      <div className="flex flex-col justify-start items-start border-r border-[#253359] py-2 px-8">
        <h5 className='font-medium text-[#253359] '>Individual Plans{`(160 Hours)`}</h5>
        <div className="flex flex-col gap">
          <h6 className='text-left text-black font-medium mt-2 flex items-center gap-2'> Full-Time</h6>
          <p className='text-gray-700 font-medium'> $9.50/hour — $1,520/month</p>
          </div>
          <div className="flex flex-col gap mt-4">
          <h6 className='text-left text-black font-medium  flex items-center gap-2'> Part-Time</h6>
          <p className='text-gray-700 font-medium'>$9.50/hour — $760/month</p>
          </div>        
          </div>

        <div className="flex flex-col justify-end items-end  py-2 px-8">
          <h5 className='font-medium text-[#253359] '>Package Plans</h5>
          <div className="flex flex-col gap w-full justify-end items-end">
          <h6 className=' text-black font-medium mt-2 flex items-center gap-2'>3+ Agents</h6>
          <p className='text-gray-700 font-medium'> $9.50/hour — $1,520/month</p>
          </div>
          <div className="flex flex-col gap  w-full justify-end items-end mt-4">
          <h6 className=' text-black font-medium  flex items-center gap-2'>10+ Agents</h6>
          <p className='text-gray-700 font-medium'>$9.50/hour — $760/month</p>
          </div>        
        </div>
        
      </div>
    <button></button>
    </div>

    <div className="md:col-span-1 bg-[#E8EAF6] rounded p-8 flex flex-col justify-center">
      <h4 className='text-[#253359] font-semibold'><SparkleIcon/>Includes</h4>

    <div className="flex flex-col gap-1 my-5">
      {services.map(service => (
        <div className=" flex items-center gap-2">
          <div className='bg-white p-1 rounded-full w-fit h-fit'> <Check size={16} strokeWidth={3} color='#253359'/> </div>
          <p className='text-sm font-medium text-[#253359]'>{service}</p>
        </div>

      ))}
      </div>
    </div>
  </div>
  )
}

const Marketing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 poppins md:mx-10">
    <div className="md:col-span-2 flex flex-col gap-2 justify-center items-center border-2 border-[#dde2ff] rounded md:p-8 p-2">
      <h1 className='text-center font-bold text-[#253359] text-sm '>Your Support Agent</h1>
      <p className='font-bold text-2xl text-black '>$6500/month</p>
      <p className='text-gray-600 font-medium'>Select a Marketing Plan or Choose from a Wide Range of Marketing Agents</p>

      <div className="grid grid-cols-2 text-black mt-5">
      <div className="flex flex-col justify-start items-start border-r border-[#253359] py-2 px-8">
        <h5 className='font-medium text-[#253359] '>Individual Plans{`(160 Hours)`}</h5>
        <div className="flex flex-col gap">
          <h6 className='text-left text-black font-medium mt-2 flex items-center gap-2'> Full-Time</h6>
          <p className='text-black font-medium'> $9.50/hour — $1,520/month</p>
          <p className='text-sm font-medium text-gray-700'>Get a full-time agent dedicated to your business, providing reliable, ongoing support.</p>
          </div>
          <div className="flex flex-col gap mt-4">
          <h6 className='text-left text-black font-medium  flex items-center gap-2'> Part-Time</h6>
          <p className='text-black font-medium'>$9.50/hour — $760/month</p>
          <p className='text-sm font-medium text-gray-700'>Ideal for businesses with lighter workloads, our part-time plan offers flexible support for your operations.</p>
          </div>        
          </div>

        <div className="flex flex-col justify-end items-end  py-2 px-8">
          <h5 className='font-medium text-[#253359] '>Package Plans</h5>
          <div className="flex flex-col gap w-full justify-end items-end">
          <h6 className=' text-black font-medium mt-2 flex items-center gap-2'>3+ Agents</h6>
          <p className='text-black font-medium'> $9.50/hour — $1,520/month</p>
          <p className='text-sm font-medium text-gray-700 text-end'>Get a full-time agent dedicated to your business, providing reliable, ongoing support.</p>
          </div>
          <div className="flex flex-col gap  w-full justify-end items-end mt-4">
          <h6 className=' text-black font-medium  flex items-center gap-2'>10+ Agents</h6>
          <p className='text-black font-medium'>$9.50/hour — $760/month</p>
          <p className='text-sm font-medium text-gray-700 text-end'>Ideal for businesses with lighter workloads, our part-time plan offers flexible support for your operations.</p>
          </div>        
        </div>
        
      </div>
    <button></button>
    </div>

    <div className="md:col-span-1 bg-[#E8EAF6] rounded p-8 flex flex-col justify-center">
      <h4 className='text-[#253359] font-semibold'><SparkleIcon/>Includes</h4>

    <div className="flex flex-col gap-1 my-5">
      {services.map(service => (
        <div className=" flex items-center gap-2">
          <div className='bg-white p-1 rounded-full w-fit h-fit'> <Check size={16} strokeWidth={3} color='#253359'/> </div>
          <p className='text-sm font-medium text-[#253359]'>{service}</p>
        </div>

      ))}
      </div>
    </div>
  </div>
  )
}


const additionalServices = [
  "Lead Generation & sales",
  "Web Dev & App Dev",
  "Blockchain",
  "3D Videos",
  "Trading Bot",
  "Marketing",
  "Automation"
];


const Additional = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 poppins md:mx-10 ">
    <div className="md:col-span-2 flex flex-col gap-2 justify-center items-center border-2 border-[#dde2ff] rounded md:p-8 p-2">
      <h1 className='text-center font-bold text-[#253359] text-sm '>Your Support Agent</h1>
      <p className='font-bold text-2xl text-black '>$8500/month</p>
      <p className='text-gray-600 font-medium text-center'>In need of specialized services? We offer custom consulting to help your business thrive in today's competitive landscape.</p>
      <div className="grid grid-cols-2 text-black mt-2">
        <div className="flex flex-col justify-end items-end border-r border-[#253359] py-2 px-8">
          <h5 className='font-medium text-[#253359] '>Custom Services</h5>
          <p className='text-right text-black font-medium mt-2'>$100/hr</p>
        </div>
        <div className="flex flex-col justify-start items-start py-2 px-8">
        <h5 className='font-medium text-[#253359] '>Automation Booklet</h5>
          <p className='text-left text-black font-medium mt-2'> $29.99/pc.</p>
        </div>
      </div>
    <button></button>
    </div>

    <div className="md:col-span-1 bg-[#E8EAF6] rounded p-8">
      <h4 className='text-[#253359] font-semibold'><SparkleIcon/>Our experts are available for</h4>

    <div className="flex flex-col gap-1 my-5">
      {additionalServices.map(service => (
        <div className=" flex items-center gap-2">
          <div className='bg-white p-1 rounded-full w-fit h-fit'> <Check size={16} strokeWidth={3} color='#253359'/> </div>
          <p className='text-sm font-medium text-[#253359]'>{service}</p>
        </div>

      ))}
      </div>
    </div>
  </div>
  )
}