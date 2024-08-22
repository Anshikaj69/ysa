import React, { useState } from 'react'
import Calendar from 'react-calendar'
import './Calendar.css';
import state from '../../store';
import { useSnapshot } from 'valtio';
import { BookingForm } from '../Form';
import Container from '../layout/Container';
import { Fade } from 'react-awesome-reveal';

const step3 = () => {

  const snap = useSnapshot(state)
  const today = new Date();

  const formattedDate = today.toISOString().split('T')[0];

  const [value, onChange] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState(formattedDate);



  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      timeZone: 'America/Chicago',
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleDateChange = (date) => {
    if (snap.agents.length === 0) {
      alert('Please select agents')
      return
    }
    const formattedDate = formatDate(Array.isArray(date) ? date[0] : date);
    setSelectedDate(formattedDate);
    onChange(date);
  };

  const generateAMTimeSlots = () => {
    const slots = [];
    for (let hour = 10; hour <= 12; hour++) {
      const slot = new Date(value);
      slot.setHours(hour, 0, 0, 0);
      slots.push(slot);
    }
    return slots;
  };

  const generatePMTimeSlots = () => {
    const slots = [];
    for (let hour = 12; hour <= 17; hour++) {
      const slot = new Date(value);
      slot.setHours(hour, 0, 0, 0);
      slots.push(slot);
    }
    return slots;
  };

  const handleTimeSelect = (time) => {
    if (snap.agents.length === 0) {
      alert('Please select agents')
      return
    }
    setSelectedTime(time);
  };

  const handleSubmit = () => {

    if (selectedTime === '') {
      alert("Please select Time")
      return;
    }

    state.date = selectedDate
    state.time = selectedTime
    state.open = true

  }

  return (
    <div className='md:py-20 py-8 px-5 md:px-0 bg-[#D4DFED]'>
      <Container>
        <div className="flex flex-col w-full justify-between items-center md:gap-6 gap-2.5 ">

          <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl 2xl:text-base md:text-sm text-xs w-fit' id='step3'>STEP 3</p>
          <Fade>
            <h1 className='text-[#253359] 2xl:text-5xl md:text-4xl text-xl font-bold playfair-display-font'>Schedule a Call on the Calendar</h1>
          </Fade>

          <div className='bg-white md:mt-10 mt-5 md:pt-10 pt-6 2xl:px-20 md:px-14 px-4 flex flex-col justify-between md:gap-10 gap-14 md:pb-10 pb-6'>
            <div className='flex flex-col gap-14 md:flex-row md:gap-5  '>
              <div className='flex flex-col gap-5 justify-center items-center'>
                <h3 className='font-medium text-sm 2xl:text-base  text-center'>When are you expecting to start?</h3>
                <Calendar
                  minDate={new Date()}
                  className='px-4 pt-3 2xl:pb-20 md:pb-14 pb-8 shadow-xl  '
                  onChange={handleDateChange} value={value}

                />
              </div>

              <div className='flex flex-col md:gap-5 gap-3'>
                <h3 className='text-gray-700 2xl:text-sm md:text-xs text-sm text-center md:text-left'>Available Starting times for <span className='font-medium text-black'>{formatDate(Array.isArray(value) ? value[0] : value)}</span></h3>
                <div className='flex md:justify-between justify-evenly px-4 py-5'>

                  <div className='flex flex-col gap-5'>
                    <h3 className='font-medium 2xl:text-base md:text-sm text-xs text-center'>AM</h3>
                    <div className='text-sm text-gray-700 text-center'>
                      <ul className='flex flex-col gap-2'>
                        {generateAMTimeSlots().map((slot, index) => (
                          <li
                            key={index}
                            onClick={() => handleTimeSelect(slot.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))}
                            className={`border rounded-sm md:px-6 px-4 py-2 font-medium 2xl:text-sm text-xs cursor-pointer ${selectedTime === slot.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) ? 'bg-[#eff7ff] border-blue-200' : ''}`}
                          >
                            {slot.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className='flex flex-col gap-5'>
                    <h3 className='font-medium 2xl:text-base md:text-sm text-xs text-center'>PM</h3>
                    <div className='text-sm text-gray-700 text-center'>
                      <ul className='flex flex-col gap-2'>
                        {generatePMTimeSlots().map((slot, index) => (
                          <li
                            key={index}
                            onClick={() => handleTimeSelect(slot.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))}
                            className={`border rounded-sm md:px-6 px-4 py-2 font-medium 2xl:text-sm text-xs cursor-pointer ${selectedTime === slot.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) ? 'bg-[#eff7ff] border-blue-200' : ''}`}
                          >
                            {slot.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <Fade>
            <button
              className="hover:bg-[#D4DFED] bg-[#253359] btn btn1 text-white font-medium rounded-full 2xl:text-base md:text-sm text-xs w-fit 2xl:px-10 md:px-8 md:py-3 py-2 px-3 self-center mt-4"
              onClick={handleSubmit}
            >
              Confirm
            </button>
          </Fade>
          <div className='hidden'>
          <BookingForm />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default step3