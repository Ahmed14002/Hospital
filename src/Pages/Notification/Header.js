import React, { useState } from 'react';
import AcceptDonors from './AcceptDonors';
import HospitalReq from './HospitalReq';
import { useDarkMode } from './../Settings/DarkModeContext';

export default function Headers() {
  const [currentPage, setCurrentPage] = useState('personal');
  const changePage = (page) => {
    setCurrentPage(page);
  };

  // Dark Mode
  const { dark } = useDarkMode();

  return (
    <>
      <div className="mr-12  mt-20 flex justify-between">
        <div className="flex  h-12 gap-12 ">
          <button
            type="button"
            onClick={() => changePage('personal')}
            className={`inline-flex items-center font-['Nunito'] text-xl font-semibold  leading-snug transition delay-75 ease-linear ${currentPage === 'personal' ? 'border-b-2 border-[#C53142] text-[#C53142]' : dark ? 'text-white' : 'text-black'}`}
          >
            Accepted Donors
          </button>
          <button
            onClick={() => changePage('security')}
            className={`inline-flex items-center font-['Nunito'] text-xl font-semibold leading-snug transition delay-75 ease-linear ${currentPage === 'security' ? 'border-b-2 border-[#C53142] text-[#C53142]' : dark ? 'text-white' : 'text-black'}`}
          >
            Hospital Request
          </button>
        </div>
      </div>
      <div className="pb-2">
        {currentPage === 'personal' && <AcceptDonors />}
        {currentPage === 'security' && <HospitalReq />}
      </div>
    </>
  );
}
