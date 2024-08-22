import React, { useState , useEffect, useRef} from 'react'
import state from '../../store'
import { useSnapshot } from 'valtio'
import Container from '../layout/Container'
import { Fade } from 'react-awesome-reveal'
import { useLocation } from 'react-router-dom'

const Step1 = () => {
  const snap = useSnapshot(state)

  const plans = [
    {
      price: "$4500",
      features: [
        "N/A",
        "$100/mo.",
        "Local SEO",
        "Meta Ads, 1 Post Per Week",
        "1 Landing Page Per Month",
        "Email Marketing 2 x Month",
        "N/A",
        "Google Ads or Meta Ads",
        "FREE",
        "FREE"
      ]
    },
    {
      price: "$6500",
      features: [
        "$750/mo.",
        "FREE",
        "SEO Enhancement (on-page)",
        "2 Platforms, 4 Posts Per Week",
        "2 Landing Page Per Month",
        "1 Email Campaign Per Month",
        "2 Video Posts Per Month",
        "Google Ads or Meta Ads",
        "FREE",
        "FREE"
      ]
    },
    {
      price: "$8500",
      features: [
        "$1000/mo.",
        "FREE",
        "SEO, On-Page, Off-Page",
        "3 Platforms, 7 Posts Per Week",
        "3 Landing Page Per Month",
        "2 Email Campaign Per Month",
        "4 Video Posts Per Month",
        "Google Ads or Meta Ads",
        "FREE",
        "FREE"
      ]
    },
    {
      price: "Custom Plan",
      features: [
        "Choose",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      isCustom: true
    }
  ];

  const [selectedPlan, setSelectedPlan] = useState({
    index: null,
    selectedPlan: null
  });

  const handleSelect = (sindex, selectedplan) => {
    setSelectedPlan({
      index: sindex,
      selectedPlan: selectedplan
    });
  };

  const handleClick = () => {
    if (selectedPlan.selectedPlan === null) {
      alert('Please select a plan');
      return;
    }

    state.plan = selectedPlan.selectedPlan
  }

  const step1Ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#step1') {
      step1Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location]);


  return (
    <div className='py-20 px-10 bg-[#CBD8D3]'>
      <Container>
        <div className="flex flex-col w-full justify-between items-center gap-6 ">


          <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl 2xl:text-base md:text-sm w-fit' >STEP 1</p>
          <Fade>
            <h1 className='text-[#253359] 2xl:text-5xl md:text-4xl font-bold playfair-display-font'>Select a <span className='italic'>Marketing</span> Plan</h1>
          </Fade>
          <div className='flex justify-between gap-2 w-full pt-10'>

            <div className='flex flex-col bg-white rounded-xl w-[25%]  items-center '>
              <div className='bg-[#8AA1A0] w-full flex justify-center rounded-t-xl'>
                <h1 className=' text-white py-2 mt-10 font-medium w-fit text-center 2xl:text-2xl md:text-xl my-8 uppercase'>Services</h1>
              </div>
              <div className=' text-[#253359] flex flex-col items-center 2xl:justify-center md:justify-start w-full h-full bg-white my-4 '>
                <h4 className='text-center 2xl:text-sm md:text-xs font-medium 2xl:p-3 p-2.5 bg-[#F3F2F2] w-full '>Monthly  Ad Credit</h4>
                <h4 className='text-center 2xl:text-sm md:text-xs font-medium 2xl:p-3 p-2.5 w-full'>CRM</h4>
                <h4 className='text-center 2xl:text-sm md:text-xs font-medium 2xl:p-3 p-2.5 bg-[#F3F2F2]  w-full '>Search Engine Optimization</h4>
                <h4 className='text-center 2xl:text-sm md:text-xs font-medium 2xl:p-3 p-2.5 w-full'>Social Media</h4>
                <h4 className='text-center 2xl:text-sm md:text-xs font-medium 2xl:p-3 p-2.5 bg-[#F3F2F2] w-full '>Landing Page</h4>
                <h4 className='text-center 2xl:text-sm md:text-xs font-medium 2xl:p-3 p-2.5 w-full'>Email Marketing</h4>
                <h4 className='text-center 2xl:text-sm md:text-xs font-medium 2xl:p-3 p-2.5 bg-[#F3F2F2] w-full '>Video Post</h4>
                <h4 className='text-center 2xl:text-sm md:text-xs font-medium 2xl:p-3 p-2.5 w-full'>PPC & Ad Management</h4>
                <h4 className='text-center 2xl:text-sm md:text-xs font-medium 2xl:p-3 p-2.5 bg-[#F3F2F2] w-full '>Ad Marketing</h4>
                <h4 className='text-center 2xl:text-sm md:text-xs font-medium 2xl:p-3 p-2.5 w-full'>Monthly Report</h4>
              </div>
            </div>

            {plans.map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col bg-white rounded-xl w-[25%] items-center cursor-pointer border-2 ${selectedPlan.index === index ? 'border-[#253359]' : 'border-transparent'
                  }`}
                onClick={() => handleSelect(index, plan.price)}
              >
                <div className='w-full flex flex-col justify-center items-center rounded-t-xl px-6' id='step1' ref={step1Ref}>
                  <h1 className='text-[#253359] font-extrabold w-fit text-center 2xl:my-6  md:my-[28px]'>
                    <span className={`2xl:text-2xl md:text-xl ${plan.isCustom ? 'text-[#CBAF85]' : ''}`}>{plan.price}</span>
                    {!plan.isCustom && <span className='2xl:text-lg md:text-base font-semibold'>/mo.</span>}
                  </h1>
                  <button className={`w-full border-2 2xl:text-sm md:text-xs uppercase font-semibold md:py-1.5 2xl:py-2 rounded-md ${selectedPlan.index === index ? 'border-transparent bg-[#253359] text-white' : 'border-[#253359] text-[#253359]'
                    }`}>
                    {selectedPlan.index === index ? 'Selected' : 'Select'}
                  </button>
                </div>
                <div className='text-black flex flex-col items-center  w-full h-full bg-white my-4 ' >
                  {plan.features.map((feature, i) => (
                    <h4 key={i} className={`text-center text-nowrap 2xl:text-sm md:text-xs 2xl:p-3 p-2.5 font-normal w-full h-full ${i % 2 === 0 ? 'bg-[#F3F2F2]' : 'bg-white'}`}>
                      {feature}
                    </h4>
                  ))}
                </div>
              </div>
            ))}

          </div>
          <a href='#step2'>
            <Fade>
              <button
                className="text-white font-medium rounded-full 2xl:text-md md:text-sm w-fit 2xl:px-10 md:px-8 py-3 self-center mt-4 hover:bg-[#e0efe3] bg-[#253359] btn btn1"
                onClick={handleClick}
              >
                Confirm
              </button>
            </Fade>
          </a>
        </div>
      </Container>
    </div>
  )
}

export default Step1