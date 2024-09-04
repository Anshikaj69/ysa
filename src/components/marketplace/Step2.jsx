import state from '../../store';
import { useSnapshot } from 'valtio';
import Container from '../layout/Container';

import { Check, ArrowUpRight } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import Tooltip from '@mui/material/Tooltip';
import data from '../../utils/data.json';

export const agentsList = [
  'Customer Support',
  'Executive Assistance',
  'Lead Generation & Sales',
  'Payroll',
  'Data Entry',
  'Design & Graphics',
  'Video Editor',
  'Content Writer',
  'Remote Monitoring',
  'Logistics & Operations',
  'Medical Billing',
  'Sourcing Agent'
];

const Step2 = () => {
  const snap = useSnapshot(state);
  const navigate = useNavigate()
  const individualsRef = useRef(null);
  const location = useLocation();
  const [selectedAgents, setSelectedAgents] = useState([]);

  // Function to handle agent selection
  const handleAgentSelect = (agent) => {
    const currentIndex = selectedAgents.indexOf(agent);
    if (currentIndex === -1) {
      setSelectedAgents([...selectedAgents, agent]);
    } else {
      const updatedAgents = [...selectedAgents];
      updatedAgents.splice(currentIndex, 1);
      setSelectedAgents(updatedAgents);
    }
  };

  const changeService = (item) => {
    state.role = item
    navigate(`/individual-roles/${item}`)
  }

  // Handle submit
  const handleSubmit = () => {
    if (snap.plan === 'No package') {
      alert("Please Select a plan");
      return;
    }

    if (selectedAgents.length < 3) {
      alert('Please select at least 3 agents.');
      return;
    }

    state.agents = selectedAgents.map(agent => ({
      name: agent,
    }));

    console.log(state.agents, state.plan);
  };

  useEffect(() => {
    if (location.hash === '#individuals') {
      individualsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location]);

  const renderAgents = () => {
    const recommendedAgents = data[snap.service]?.services?.list.map(service => service.title) || [];

    return agentsList.map((agent, index) => {
      const isRecommended = recommendedAgents.includes(agent);

      return (
        <Tooltip
          key={index}
          title={isRecommended ? 'Recommended' : ''}
          placement='top'
          disableHoverListener={!isRecommended}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <label
            key={index}
            className={`flex flex-col justify-center items-center border-2 relative rounded-lg  2xl:px-4 2xl:py-12 md:py-9  py-6 px-2 w-[100%] 
          cursor-pointer bg-white transition-all ease-out overflow-hidden
          ${selectedAgents.includes(agent) ? 'border-[#CBAF85]' : 'border-[#F0F0F0]'} 
           ${isRecommended ? 'bg-[#ffc42127]' : 'bg-white'}`}
          >
            {/* small check box */}
            <Fade
              className={`md:w-5 md:h-5 w-4 h-4 mr-2 absolute top-1 left-1 flex items-center justify-center transition-all ease-in  rounded ${selectedAgents.includes(agent) ? 'bg-[#CBAF85]' : 'bg-white border-2'}`}
            >
              <Check className='w-5 h-5 font-semibold text-white' />
            </Fade>

            <input
              type="checkbox"
              className="sr-only peer"
              checked={selectedAgents.includes(agent)}
              onChange={() => handleAgentSelect(agent)}
            />

            <Fade>
              <p className="2xl:text-base xl:text-sm text-[11px] font-semibold text-[#253359] text-center uppercase">{agent}</p>
            </Fade>

            {/* more info */}
            <div className="absolute w-full top-[2px] md:right-1 right-[2px] flex items-end justify-end">
              <div className="flex gap-x-6 justify-center">
                <button
                  onClick={() => { changeService(agent) }}
                  className="text-[#CBAF85] z-20 rounded-full flex "
                >
                  <Tooltip title='More Details'>
                    <ArrowUpRight className='md:h-6 md:w-6 h-[18px] w-[18px]' />
                  </Tooltip>
                </button>
              </div>
            </div>

          </label>
        </Tooltip>
      );
    });
  };

  return (
    <div className="md:py-20 md:px-10 px-4 py-8 bg-[#F4F3F1]">
      <Container>
        
        <div className="flex flex-col w-full justify-between items-center md:gap-6 gap-2.5 " >
          <p className="bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl 2xl:text-base md:text-sm text-xs w-fit" id='step2'>STEP 2</p>
          <Fade>
            <h1 className="text-[#253359] 2xl:text-5xl md:text-4xl text-xl font-bold playfair-display-font">
              Our Range of <span className="italic">Individual</span> Agents
            </h1>
          </Fade>

          <div className="items-center flex flex-col" >
            <Fade>
              <h4 className="text-[#253359] 2xl:text-2xl md:text-xl text-sm font-semibold">Choose 3 Service Agents</h4>
            </Fade>
            <Fade>
              <h5 className="text-[#253359] 2xl:text-base md:text-sm text-xs font-semibold">Includes success manager</h5>
            </Fade>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-3 md:gap-5 gap-1.5 mt-4 md:px-10 2xl:px-8" id='individuals' ref={individualsRef}>
            {renderAgents()}
          </div>

          <a href='#step3'>
            <Fade>
              <button
                className="hover:bg-[#F4F3F1] bg-[#253359] btn btn1 text-white font-medium rounded-full 2xl:text-md md:text-sm text-xs w-fit 2xl:px-10 md:px-8 md:py-3 py-2 px-3 self-center mt-4"
                onClick={handleSubmit}
              >
                Confirm
              </button>
            </Fade>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Step2;
