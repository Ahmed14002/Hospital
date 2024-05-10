import React from 'react';
import { useDarkMode } from '../Settings/DarkModeContext';
import avatar from './../../Images/avatar.png';

export default function Donors() {
  // Dark Mode
  const { dark } = useDarkMode();

  return (
      <div className={`h-full w-full pb-[15px] pt-2 ${dark === false ? 'text-black' : 'text-white'}`}>
        <div className="bar h-[970px] overflow-y-scroll">
          <table class="w-full text-center">
            <thead
              class={`sticky top-[-1px] ${dark === false ? 'bg-gray-100' : 'bg-[#1e1e1e]'}`}
            >
              <tr className="font-['Nunito'] text-[15px] font-medium opacity-[70%]">
                <th scope="col" class="py-5 text-left">
                  Name
                </th>
                <th scope="col" class="px-6 py-5">
                  Gender
                </th>
                <th scope="col" class="px-6 py-5">
                  Age
                </th>
                <th scope="col" class="px-6 py-5">
                  Blood Type
                </th>
                <th scope="col" class="px-6 py-5">
                  Last Donated
                </th>
                <th scope="col" class="px-6 py-5">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(20)].map((_, index) => (
                <tr key={index} className="border-b-2 border-[#c53142] font-['Nunito'] text-[15px] font-normal">
                  <td className="flex items-center py-5">
                    <img
                      src={avatar}
                      alt=""
                      className="h-[35px] w-[39.72px] pr-2"
                    />
                    Ahmed Hamdy
                  </td>
                  <td className="px-6 py-5">Male</td>
                  <td className="px-6 py-5">38</td>
                  <td className="px-6 py-5">A+</td>
                  <td className="px-6 py-5">10/10/2024</td>
                  <td className="px-6 py-5">010685074900</td>
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
