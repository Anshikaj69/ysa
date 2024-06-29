import React, { useState } from 'react'
import Calendar from 'react-calendar'
import './Calendar.css';


const step3 = () => {

  const [value, onChange] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');



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
    setSelectedTime(time);
  };

  return (
    <div className='flex flex-col py-20 w-full justify-between items-center gap-6 bg-[#D4DFED]'>
      <p className='bg-[#8AA1A0] text-white font-semibold py-1 px-3 rounded-2xl text-md w-fit'>STEP 3</p>
      <h1 className='text-[#253359] text-5xl font-bold playfair-display-font'>Schedule a Call on the Calendar</h1>

      <div className='bg-white mt-10 pt-10 px-20 flex flex-col justify-between gap-10 pb-2'>
        <div className='flex flex-col gap-10 md:flex-row md:gap-5  '>
          <div className='flex flex-col gap-5 justify-center items-center'>
            <h3 className='font-medium text-center'>Pick a Date and Time</h3>
            <Calendar
              minDate={new Date()}
              className='px-4 pt-3 pb-20 shadow-xl  '
              onChange={handleDateChange} value={value}

            />
          </div>

          <div className='flex flex-col gap-5'>
            <h3 className='text-gray-700 text-wm'>Available Starting times for <span className='font-medium text-black'>{formatDate(Array.isArray(value) ? value[0] : value)}</span></h3>
            <div className='flex justify-between px-4 py-5'>

              <div className='flex flex-col gap-5'>
                <h3 className='font-medium text-center'>AM</h3>
                <div className='text-sm text-gray-700 text-center'>
                  <ul className='flex flex-col gap-2'>
                    {generateAMTimeSlots().map((slot, index) => (
                      <li
                        key={index}
                        onClick={() => handleTimeSelect(slot.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))}
                        className={`border rounded-sm px-6 py-2 font-medium text-sm cursor-pointer ${selectedTime === slot.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) ? 'bg-[#eff7ff] border-blue-200' : ''}`}
                      >
                        {slot.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className='flex flex-col gap-5'>
                <h3 className='font-medium text-center'>PM</h3>
                <div className='text-sm text-gray-700 text-center'>
                <ul className='flex flex-col gap-2'>
                    {generatePMTimeSlots().map((slot, index) => (
                      <li
                        key={index}
                        onClick={() => handleTimeSelect(slot.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))}
                        className={`border rounded-sm px-6 py-2 font-medium text-sm cursor-pointer ${selectedTime === slot.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) ? 'bg-[#eff7ff] border-blue-200' : ''}`}
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
        <button className='bg-[#78BCFF] text-white font-medium rounded-sm text-sm w-fit px-8 py-3 self-center'>Select Date</button>
      </div>


    </div>
  )
}

export default step3