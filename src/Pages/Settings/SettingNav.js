import React, { useState } from 'react';
import PersonalSet from './PersonalSet';
import Security from './Security';
import { useDarkMode } from './DarkModeContext';

export default function SettingNav() {
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
            Personal Information
          </button>
          <button
            onClick={() => changePage('security')}
            className={`inline-flex items-center font-['Nunito'] text-xl font-semibold leading-snug transition delay-75 ease-linear ${currentPage === 'security' ? 'border-b-2 border-[#C53142] text-[#C53142]' : dark ? 'text-white' : 'text-black'}`}
          >
            Security
          </button>
        </div>
        <div className="flex  h-12 gap-14 ">
          <button className=" inline-flex  w-32 items-center justify-center rounded-lg bg-[#c53142] px-5 py-3">
            <div className=" text-center font-['Nunito'] text-lg font-medium leading-snug text-white">
              Save
            </div>
          </button>
          <button className="w-32 items-center justify-center rounded-lg  bg-[#f4d6d7] px-5 py-3 ">
            <div className="text-center font-['Nunito'] text-lg font-medium leading-snug   ">
              Cancel
            </div>
          </button>
        </div>
      </div>
      <div className="pb-2">
        {currentPage === 'personal' && <PersonalSet />}
        {currentPage === 'security' && <Security />}
      </div>
    </>
  );
}
