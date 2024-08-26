import { MoveUpRight } from 'lucide-react';
import React from 'react'
import state from '../../store';
import { useNavigate } from 'react-router-dom';
import Container from '../layout/Container';
import roleData from '../../utils/roleData.json'

const Agents = () => {

  const navigate = useNavigate()
  const excludeList = ['Web Development', 'App Development', 'Blockchain', '3D Animations', 'Bot Design'];

  const agentsList = Object.keys(roleData).filter(service => !excludeList.includes(service));

  const changeService = (item) => {
    state.role = item
    navigate(`/individual-roles/${item}`)
  }
  return (
    <div className='2xl:mt-28 md:mt-16 pt-10 mt-14 xl:mx-20 md:mx-10 mx-4 flex flex-col '>
      <Container>
        <div className="flex bg-[#CBD8D3] md:py-7 py-4 rounded-lg items-center justify-center md:mb-10 ">
          <h5 className='text-center text-2xl md:text-4xl font-bold text-black playfair-display-font'>Our Individual Agents</h5>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 md:gap-8 md:my-8 my-5 ">
          {agentsList.map((agent) => (
            <div className="col-span-1 flex flex-col gap-3 cursor-pointer" key={agent} onClick={() => { changeService(agent) }}>
              <div className=" rounded-md overflow-hidden relative cursor-pointer md:h-48 md:w-64 h-32 ">
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
              <p className='font-semibold text-xs md:text-base'>{agent}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Agents