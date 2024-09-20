import React from 'react'
import Container from '../layout/Container'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Check, DotIcon, SparkleIcon  } from 'lucide-react';

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
              className={`mx-3 poppins ${activeTab === value ? "text-white md:font-medium md:scale-[1.1]" : "text-[#535353] font-medium md:font-semibold"} `}>
                <p className='poppins text-xs md:text-base'>{label}</p>
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
    <div className=" md:col-span-2 flex flex-col md:gap-2 justify-center items-center border md:border-2 border-[#dde2ff] rounded-md md:p-8 py-5 ">
      <h1 className='text-center font-bold text-[#253359] text-[10px] md:text-sm mb-1'>Your Support Agent</h1>
      <p className='font-bold text-base md:text-2xl text-black '>$4500/month</p>
      <p className='text-gray-600 font-medium text-center text-xs md:text-base px-2'>Select a Package Plan or Choose from a Wide Range of Individual Agents</p>

      <div className="grid grid-cols-2 text-black mt-5">
      <div className="flex flex-col justify-start items-start border-r border-[#253359] py-2 px-4 md:px-8">
        <h5 className='font-semibold text-[#253359] text-sm md:text-base'>Individual Plans</h5>
        <div className="flex flex-col gap">
          <h6 className='text-left text-black text-sm md:text-base font-medium mt-2 flex items-center gap-2 '> Full-Time</h6>
          <p className='text-gray-600 font-medium text-xs md:text-base'> $9.50/hour — $1,520/month</p>
          </div>
          <div className="flex flex-col gap mt-4">
          <h6 className='text-left text-black text-sm md:text-base font-medium  flex items-center gap-2'> Part-Time</h6>
          <p className='text-gray-600 font-medium text-xs md:text-base'>$9.50/hour — $760/month</p>
          </div>        
          </div>

        <div className="flex flex-col justify-end items-end  py-2 px-4 md:px-8">
          <h5 className='font-semibold text-[#253359] text-sm md:text-base'>Package Plans</h5>
          <div className="flex flex-col gap w-full justify-end items-end">
          <h6 className=' text-black font-medium mt-2 flex items-center gap-2 text-sm md:text-base'>3+ Agents</h6>
          <p className='text-gray-600 font-medium text-xs md:text-base text-right'> $9.50/hour — $1,520/month</p>
          </div>
          <div className="flex flex-col gap  w-full justify-end items-end mt-4">
          <h6 className=' text-black font-medium  flex items-center gap-2 text-sm md:text-base'>10+ Agents</h6>
          <p className='text-gray-600 font-medium text-xs md:text-base text-right'>$9.50/hour — $760/month</p>
          </div>        
        </div>
        
      </div>
    <button></button>
    </div>

    <div className="md:col-span-1 bg-[#E8EAF6] rounded p-8 flex flex-col justify-center">
      <h4 className='text-[#253359] font-semibold text-sm md:text-base'><SparkleIcon className='h-4 md:h-7'/>Includes</h4>

    <div className="flex flex-col gap-1 my-5">
      {services.map(service => (
        <div className=" flex items-center gap-2">
          <div className='bg-white p-1 rounded-full w-fit h-fit'> <Check className='h-4 w-4 md:h-3' strokeWidth={3} color='#253359'/> </div>
          <p className='text-xs md:text-sm font-medium text-[#253359]'>{service}</p>
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
    <div className="md:col-span-2 flex flex-col md:gap-2 justify-center items-center border md:border-2 border-[#dde2ff] rounded-md md:p-8 py-5 ">
      <h1 className='text-center font-bold text-[#253359] text-[10px] md:text-sm mb-1'>Your Support Agent</h1>
      <p className='font-bold text-base md:text-2xl text-black '>$6500/month</p>
      <p className='text-gray-600 font-medium text-center text-xs md:text-base px-2'>Select a Marketing Plan or Choose from a Wide Range of Marketing Agents</p>

      <div className="grid grid-cols-2 text-black mt-5">
      <div className="flex flex-col justify-start items-start border-r border-[#253359] py-2 px-4 md:px-8">
        <h5 className='font-semibold text-[#253359] text-sm md:text-base'>Individual Plans</h5>
        <div className="flex flex-col gap">
          <h6 className='text-left text-black text-sm md:text-base font-medium mt-2 flex items-center gap-2 '> Full-Time</h6>
          <p className='text-gray-600 font-medium text-xs md:text-base'> $9.50/hour — $1,520/month</p>
          </div>
          <div className="flex flex-col gap mt-4">
          <h6 className='text-left text-black text-sm md:text-base font-medium  flex items-center gap-2'> Part-Time</h6>
          <p className='text-gray-600 font-medium text-xs md:text-base'>$9.50/hour — $760/month</p>
          </div>        
          </div>

        <div className="flex flex-col justify-end items-end  py-2 px-4 md:px-8">
          <h5 className='font-semibold text-[#253359] text-sm md:text-base'>Package Plans</h5>
          <div className="flex flex-col gap w-full justify-end items-end">
          <h6 className=' text-black font-medium mt-2 flex items-center gap-2 text-sm md:text-base'>3+ Agents</h6>
          <p className='text-gray-600 font-medium text-xs md:text-base text-right'> $9.50/hour — $1,520/month</p>
          </div>
          <div className="flex flex-col gap  w-full justify-end items-end mt-4">
          <h6 className=' text-black font-medium  flex items-center gap-2 text-sm md:text-base'>10+ Agents</h6>
          <p className='text-gray-600 font-medium text-xs md:text-base text-right'>$9.50/hour — $760/month</p>
          </div>        
        </div>
        
      </div>
    <button></button>
    </div>

    <div className="md:col-span-1 bg-[#E8EAF6] rounded p-8 flex flex-col justify-center">
      <h4 className='text-[#253359] font-semibold text-sm md:text-base'><SparkleIcon className='h-4 md:h-7'/>Includes</h4>

    <div className="flex flex-col gap-1 md:gap-1.5 my-5">
      {services.map(service => (
        <div className=" flex items-center gap-2">
          <div className='bg-white p-1 rounded-full w-fit h-fit'> <Check className='h-3 w-3 md:h-3 md:w-3' strokeWidth={3} color='#253359'/> </div>
          <p className='text-xs md:text-sm font-medium text-[#253359]'>{service}</p>
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
    <div className="md:col-span-2 flex flex-col md:gap-2 justify-center items-center border md:border-2 border-[#dde2ff] rounded-md md:p-8 py-5 ">
      <h1 className='text-center font-bold text-[#253359] text-[10px] md:text-sm mb-1'>Your Support Agent</h1>
      <p className='font-bold text-base md:text-2xl text-black '>$8500/month</p>
      <p className='text-gray-600 font-medium text-center text-xs md:text-base px-2 '>In need of specialized services?<br/> We offer custom consulting to help your business thrive in today's competitive landscape.</p>
      <div className="grid grid-cols-2 text-black mt-2">
        <div className="flex flex-col justify-end items-end border-r border-[#253359] py-2 px-4 md:px-8">
          <h5 className='font-semibold text-[#253359] text-xs md:text-base'>Custom Services</h5>
          <p className='text-left text-gray-600 text-xs md:text-base font-medium mt-2'>$100/hr</p>
        </div>
        <div className="flex flex-col justify-start items-start py-2 px-4 md:px-8">
        <h5 className='font-semibold text-[#253359] text-xs md:text-base'>Automation Booklet</h5>
          <p className='text-left text-gray-600 text-xs md:text-base font-medium mt-2'> $29.99/pc.</p>
        </div>
      </div>
    <button></button>
    </div>

    <div className="md:col-span-1 bg-[#E8EAF6] rounded p-8">
      <h4 className='text-[#253359] font-semibold text-sm md:text-base'><SparkleIcon className='h-4 md:h-7'/>Our experts are available for</h4>

    <div className="flex flex-col gap-1 my-5">
      {additionalServices.map(service => (
        <div className=" flex items-center gap-2">
          <div className='bg-white p-1 rounded-full w-fit h-fit'> <Check className='h-4 w-4 md:h-3' strokeWidth={3} color='#253359'/> </div>
          <p className='text-xs md:text-sm font-medium text-[#253359]'>{service}</p>
        </div>

      ))}
      </div>
    </div>
  </div>
  )
}