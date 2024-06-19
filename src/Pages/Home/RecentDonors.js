import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDarkMode } from '../Settings/DarkModeContext';
import avatar from './../../Images/avatar.png';

export default function RecentDonors() {
  // Dark Mode
  const { dark } = useDarkMode();

  // State to hold donors data
  const [donors, setDonors] = useState([]);

  // Fetch donors data from API
  useEffect(() => {
    axios
      .get('https://artery-backend.vercel.app/api/Dashborad_manger/Donneurs')
      .then((response) => setDonors(response.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className={`flex-1 rounded-[24px] ${dark === false ? 'bg-white' : 'bg-[#171717] text-white'}`}
    >
      <h1 className="pb-[52px] pl-[49px] pt-[40px] font-['Nunito'] text-[25px] font-bold ">
        Recent Donors
      </h1>
      <div className=" h-[239px] px-[32px] pb-[27px]">
        <table className="w-full text-center">
          <thead className="flex h-10 w-full text-[17px]">
            <tr className="flex w-full items-center">
              <th className="w-[10%]"></th>
              <th className="w-[22.5%]">First name</th>
              <th className="w-[22.5%]">Address</th>
              <th className="w-[22.5%]">Telephone</th>
              <th className="w-[22.5%]">Groupe</th>
            </tr>
          </thead>
          <tbody className="flex h-[200px] w-full flex-col items-center justify-between overflow-y-scroll pt-[20px]">
            {donors.length > 0 ? (
              donors.map((donor, index) => (
                <tr
                  key={index}
                  className="flex h-10 w-full items-center text-[15px]"
                >
                  <td className="w-[10%] p-4">
                    <img
                      src={avatar}
                      alt=""
                      className="h-[34.08px] w-[46.46px]"
                    />
                  </td>
                  <td className="w-[22.5%] p-4">{donor.firstName}</td>
                  <td className="w-[22.5%] p-4">{donor.city}</td>
                  <td className="w-[22.5%] p-4">{donor.mobileNumber}</td>
                  <td className="w-[22.5%] p-4">{donor.bloodGroup}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-4 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
