import { Check } from 'lucide-react';
import React, { useState } from 'react';
import state from '../../store';
import { useSnapshot } from 'valtio';
import Container from '../layout/Container';
import { Fade } from 'react-awesome-reveal';

const Step2 = () => {
  const snap = useSnapshot(state);

  const agentsList = [
    'Customer Support',
    'IT Support & Integration',
    'Sourcing Agent',
    'Payroll',
    'Medical Billing',
    'Book Keeping',
    'Lead Generation & Sales',
    'Executive Assistance',
    'Design & Graphics',
    'Logistics & Operations',
    'Human Resources',
    'Content Writer',
    '3D Animation & Rendering',
    'Video Editor',
    'Debt Collection',
    'Data Entry',
    'Social Media Manager',
    'Virtual Receptionist',
    'Virtual Administrative Assistant',
    'Remote Monitoring'
  ];

  const [selectedAgents, setSelectedAgents] = useState([]);
  const [agentOptions, setAgentOptions] = useState({});

  // Function to handle agent selection
  const handleAgentSelect = (agent) => {
    const currentIndex = selectedAgents.indexOf(agent);
    if (currentIndex === -1) {
      setSelectedAgents([...selectedAgents, agent]);
    } else {
      const updatedAgents = [...selectedAgents];
      updatedAgents.splice(currentIndex, 1);
      setSelectedAgents(updatedAgents);
      const updatedOptions = { ...agentOptions };
      delete updatedOptions[agent];
      setAgentOptions(updatedOptions);
    }
  };

  // Function to handle full-time/part-time selection
  const handleOptionSelect = (agent, option) => {
    setAgentOptions({ ...agentOptions, [agent]: option });
  };

  const renderAgents = () => {
    return agentsList.map((agent, index) => (
      <label
        key={index}
        className={`flex flex-col justify-center items-center border-2 relative rounded-lg  2xl:p-9 md:py-9 md:px-5 w-[100%] 
          cursor-pointer bg-white transition-all ease-out
          ${selectedAgents.includes(agent) ? 'border-[#CBAF85]' : 'border-[#F0F0F0]'}`}
      >
        {/* small check box */}
        <Fade
          className={`w-5 h-5 mr-2 absolute top-1 left-1 flex items-center justify-center transition-all ease-in  rounded ${selectedAgents.includes(agent) ? 'bg-[#CBAF85]' : 'bg-white border-2'}`}
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
          <p className="2xl:text-base xl:text-sm md:text-xs font-semibold text-[#253359] text-center uppercase">{agent}</p>
        </Fade>
        {selectedAgents.includes(agent) && (
          <Fade>
          <div className={`mt-2 flex flex-col gap-2 items-start justify-start transition-all ${selectedAgents.includes(agent) ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <label className=" text-xs flex items-center justify-center gap-1">
              <input
                type="radio"
                name={`option-${agent}`}
                value="full-time"
                checked={agentOptions[agent] === 'full-time'}
                onChange={() => handleOptionSelect(agent, 'full-time')}
              />
              Full-time
            </label>
            <label className='text-xs flex items-center justify-center gap-1'>
              <input
                type="radio"
                name={`option-${agent}`}
                value="part-time"
                checked={agentOptions[agent] === 'part-time'}
                onChange={() => handleOptionSelect(agent, 'part-time')}
              />
              Part-time
            </label>
          </div>
          </Fade>
        )}
      </label>
    ));
  };

  const handleSubmit = () => {
    if (snap.plan === '') {
      alert("Please Select a plan");
      return;
    }

    if (selectedAgents.length < 3) {
      alert('Please select at least 3 agents.');
      return;
    }

    const unselectedOptions = selectedAgents.filter(agent => !agentOptions[agent]);
    if (unselectedOptions.length > 0) {
      alert('Please select full-time or part-time for each selected agent.');
      return;
    }

    state.agents = selectedAgents.map(agent => ({
      name: agent,
      option: agentOptions[agent]
    }));

    console.log(state.agents, state.plan);
  };

  return (
    <div className="py-20 px-10 bg-[#F4F3F1]">
      <Container>
        <div className="flex flex-col w-full justify-between items-center gap-6">
          <p className="bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl 2xl:text-base md:text-sm w-fit" id='step2'>STEP 2</p>
          <Fade>
            <h1 className="text-[#253359] 2xl:text-5xl md:text-4xl font-bold playfair-display-font">
              Our Range of <span className="italic">Individual</span> Agents
            </h1>
          </Fade>
          <div className="items-center flex flex-col">
            <Fade>
              <h4 className="text-[#253359] 2xl:text-2xl md:text-xl font-semibold">Choose 3 Service Agents</h4>
            </Fade>
            <Fade>
              <h5 className="text-[#253359] 2xl:text-base md:text-sm font-semibold">Includes success manager</h5>
            </Fade>
          </div>

          <div className="grid grid-cols-5 gap-5 mt-4 md:px-10 2xl:px-8">
            {renderAgents()}
          </div>

          <a href='#step3'>
            <Fade>
              <button
                className="hover:bg-[#F4F3F1] btn btn1 text-white font-medium rounded-full 2xl:text-md md:text-sm w-fit 2xl:px-10 md:px-8 py-3 self-center mt-4"
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
