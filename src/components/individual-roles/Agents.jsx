import { ArrowUpRight } from 'lucide-react';
import React from 'react'
import state from '../../store';
import { useNavigate } from 'react-router-dom';
import Container from '../layout/Container';
import roleData from '../../utils/roleData.json'

const Agents = () => {

  const navigate = useNavigate()
  const agentsList = Object.keys(roleData);


  const changeService = (item) => {
    state.role = item
    navigate(`/individual-roles/${item}`)
  }
  return (
    <div className='2xl:mt-28 md:mt-16 pt-10 xl:mx-20 mx-10 flex flex-col gap-5 '>
      <Container>
        <div className="flex bg-[#CBD8D3] py-7 rounded-lg items-center justify-center mb-10">
          <h5 className='text-center text-4xl font-bold text-black playfair-display-font'>Our Individual Agents</h5>
        </div>
        <div className="grid grid-cols-4 gap-8 my-8 ">
          {agentsList.map((agent) => (
            <div className="col-span-1 flex flex-col gap-3 cursor-pointer" key={agent} onClick={() => { changeService(agent) }}>
              <div className=" rounded-md overflow-hidden relative cursor-pointer h-48 w-64 ">
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
                      <ArrowUpRight size={20} />

                    </button>
                  </div>
                </div>
              </div>
              <p className='font-semibold'>{agent}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Agents