import React from 'react';
import { useDarkMode } from '../Settings/DarkModeContext';

export default function HospitalReq() {
  // Dark Mode
  const { dark } = useDarkMode();

  // // Function to handle Accept button click (example)
  // const handleAccept = (index) => {
  //   console.log(`Accepted request at index: ${index}`);
  // };

  // // Function to handle Cancel button click (example)
  // const handleCancel = (index) => {
  //   console.log(`Cancelled request at index: ${index}`);
  // };

  return (
    <div
    className={`h-[770px] w-full rounded-3xl pb-[15px] pt-2 pl-11 pr-16 ${dark === false ? 'text-black bg-white' : 'text-white bg-[#171717]'}`}
    >
      <div className="bar h-[740px] overflow-y-scroll">
        <table className="w-full text-center">
          <thead
            className={`sticky top-[-2px] ${dark === false ? 'bg-white' : 'bg-[#171717]'}`}
          >
            <tr className="font-['Nunito'] text-[16px] font-medium opacity-[70%]">
              <th scope="col" className="py-5 text-left">
                Hospital Name
              </th>
              <th scope="col" className="px-6 py-5">
                Address
              </th>
              <th scope="col" className="px-6 py-5">
                Blood type
              </th>
              <th scope="col" className="px-6 py-5">
                Required quantity
              </th>
              {/* <th scope="col" className="px-6 py-5">
                Status
              </th> */}
            </tr>
          </thead>
          <tbody>
            {[...Array(20)].map((_, index) => (
              <tr key={index} className="border-b-2 border-[#c53142] font-['Nunito'] text-[15px] font-medium">
                <td className="flex items-center py-5">
                  Alamal Hospital
                </td>
                <td className="px-6 py-5">ismaillia</td>
                <td className="px-6 py-5">A+</td>
                <td className="px-6 py-5">5</td>
                {/* <td className="px-6 py-5 flex justify-center items-center gap-2">
                  <button
                    className={`px-4 py-2 rounded-lg font-semibold ${dark === false ? 'bg-green-500 text-white' : 'bg-green-700 text-gray-200'}`}
                    onClick={() => handleAccept(index)}
                  >
                    Accept
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg font-semibold ${dark === false ? 'bg-red-500 text-white' : 'bg-red-700 text-gray-200'}`}
                    onClick={() => handleCancel(index)}
                  >
                    Cancel
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        {/* to hide the scrollbar */}
        <style jsx global>{`
          .bar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
}