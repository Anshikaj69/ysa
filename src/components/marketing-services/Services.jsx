import { MoveUpRight } from 'lucide-react';
import React from 'react'
import state from '../../store';
import { useNavigate } from 'react-router-dom';
import Container from '../layout/Container';
import roleData from '../../utils/roleData.json'

const Services = () => {
    const navigate = useNavigate()
    const agentsList = ['Web Development', 'App Development', 'Blockchain', '3D Animations', 'Bot Design', 'Lead Generation & Sales'];

    const changeService = (item) => {
        state.role = item
        navigate(`/individual-roles/${item}`)
    }
    return (
        <div className='py-10 flex flex-col '>
            <Container>
                <h5 className='text-center text-2xl md:text-4xl font-bold text-[#253359] playfair-display-font'>Our Custom Services</h5>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-5  md:my-8 my-5 justify-center items-center">
                    {agentsList.map((agent) => (
                        <div className="col-span-1 flex flex-col gap-3 cursor-pointer justify-center items-center" key={agent} onClick={() => { changeService(agent) }}>
                            <div className=" rounded-md overflow-hidden relative cursor-pointer md:h-52 md:w-72 2xl:h-56 2xl:w-96 h-32 ">
                                <img src={roleData[agent].heroSection.image_url} alt={agent} className='object-cover w-full h-full' />
                                {/* overlay */}
                                <div className="absolute inset-0 top-0 bottom-0 backdrop-brightness-75 group-hover:backdrop-brightness-50"></div>
                                {/* arrow */}
                                <div className="opacity-0 hover:opacity-100 transition absolute w-full px-6 top-[50%]">
                                    <div className="flex gap-x-6 justify-center">
                                        <button
                                            onClick={() => { changeService(agent) }}
                                            className="text-white z-20 rounded-full p-2.5 bg-[#1e2233] shadow-lg"
                                        >
                                            <MoveUpRight size={20} />

                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className='font-semibold text-sm md:text-lg text-center '>{agent}</p>
                        </div>
                    ))}
                </div>

{/* /why us */}
                <div className="flex flex-col gap-5 py-10">
                    <div className='flex flex-col md:gap-2 gap-2 items-center justify-center'>
                        <h1 className='text-[#253359]  md:text-4xl text-lg font-bold playfair-display-font text-wrap text-center'
                        >
                            Why Choose Our Custom Services?
                        </h1>
                            <p className='text-[#253359] md:text-base text-sm font-normal text-center 2xl:px-5 md:px-10'>We understand that off-the-shelf solutions might not always fit your business perfectly. Our custom services allow you to choose from a variety of specialized offerings, each tailored to your exact requirements. We take the time to understand your business, its challenges, and your goals to deliver solutions that align perfectly with your needs.</p>
                    </div>

                    <div className='flex flex-wrap md:gap-[3.3%] 2xl:w-[95%] md:w-[90%] justify-center self-center'>
                        <div className={`flex flex-wrap justify-evenly w-[90%]  md:w-[70%] }`}>
                                <div
                                    className={`border border-[#D4DFED] shadow-lg shadow-[#D4DFED] md:py-5 md:px-6 p-5 flex flex-col md:gap-1 gap-2 items-center rounded-xl md:my-4 my-2 md:w-[45%] `}
                                >
                                    <img src="/tick.svg" alt='tick' className='md:w-fit md:h-fit w-7 h-7'></img>
                                    <h4 className='text-[#253359] 2xl:text-lg md:text-base text-sm font-semibold text-center'>Bespoke Solutions</h4>
                                    <p className='text-[#253359] 2xl:text-sm text-xs font-medium text-center pt-1'>We craft solutions that are as unique as your business.</p>
                                </div>

                                <div
                                    className={`border border-[#D4DFED] shadow-lg shadow-[#D4DFED] md:py-5 md:px-6 p-5 flex flex-col md:gap-1 gap-2 items-center rounded-xl md:my-4 my-2 md:w-[45%] `}
                                >
                                    <img src="/tick.svg" alt='tick' className='md:w-fit md:h-fit w-7 h-7'></img>
                                    <h4 className='text-[#253359] 2xl:text-lg md:text-base text-sm font-semibold text-center'>Expert Collaboration</h4>
                                    <p className='text-[#253359] 2xl:text-sm text-xs font-medium text-center pt-1'> Work closely with our experts to ensure the final product meets your expectations.</p>
                                </div>

                                <div
                                    className={`border border-[#D4DFED] shadow-lg shadow-[#D4DFED] md:py-5 md:px-6 p-5 flex flex-col md:gap-1 gap-2 items-center rounded-xl md:my-4 my-2 md:w-[45%] `}
                                >
                                    <img src="/tick.svg" alt='tick' className='md:w-fit md:h-fit w-7 h-7'></img>
                                    <h4 className='text-[#253359] 2xl:text-lg md:text-base text-sm font-semibold text-center'>End-to-End Support</h4>
                                    <p className='text-[#253359] 2xl:text-sm text-xs font-medium text-center pt-1'>From ideation to execution, we're with you every step of the way.</p>
                                </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Services