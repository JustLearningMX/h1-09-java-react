import React from 'react';

const Appointment = ({ time, title, duration, person, status }) => {
  return (
    <div className="flex mb-4 relative">
      <div className="flex flex-col items-center mr-2">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-[#007CA0] rounded-full"></div>
          <div className="ml-2 text-right text-[#4D516F]">{time}</div>
        </div>
        <div className="flex-1 w-px bg-[#BFBFBF] h-full mt-1 -ml-16"></div>
      </div>
      <div className="flex-1 border rounded-lg p-2 flex flex-col justify-between">
        <div>
          <div>{title}</div>
          <div className="text-sm text-gray-500">{duration}</div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-lg font-bold">{person}</div>
          <div className="flex items-center">
            <span className="text-[#359B4B] text-2xl">&#x2022;</span>
            <span className="ml-2">{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;