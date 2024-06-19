import React from 'react';
import { useState } from 'react';
import Model from 'react-modal';
import { FiXCircle } from 'react-icons/fi';
import { useDarkMode } from '../Settings/DarkModeContext';
import avatar from './../../Images/avatar.png';


export default function AcceptDonors() {
  // Dark Mode
  const { dark } = useDarkMode();
  // PopUp
  const [seen, setSeen] = useState(false);

  return (
    <div
      className={`h-[770px] w-full rounded-3xl pb-[15px] pl-11 pr-16 pt-2 ${dark === false ? 'bg-white text-black' : 'bg-[#171717] text-white'}`}
    >
      <div className="bar h-[740px] overflow-y-scroll">
        <table class="w-full text-center">
          <thead
            class={`sticky top-[-2px] ${dark === false ? 'bg-white' : 'bg-[#171717]'}`}
          >
            <tr className="font-['Nunito'] text-[16px] font-medium opacity-[70%]">
              <th scope="col" class="py-[22px] text-left">
                Name
              </th>
              <th scope="col" class="px-6 py-[22px]">
                Age
              </th>
              <th scope="col" class="px-6 py-[22px]">
                Blood Type
              </th>
              <th scope="col" class="px-6 py-[22px]">
                Phone
              </th>
              <th scope="col" class="px-6 py-[22px]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(20)].map((_, index) => (
              <tr
                key={index}
                className="border-b-2 border-[#c53142] font-['Nunito'] text-[15px] font-medium"
              >
                <td className="flex items-center py-5">
                  <img
                    src={avatar}
                    alt=""
                    className="h-[35px] w-[39.72px] pr-2"
                  />
                  Ahmed Hamdy
                </td>
                <td className="px-6 py-5">38</td>
                <td className="px-6 py-5">A+</td>
                <td className="px-6 py-5">010685074900</td>
                <td className="px-6 py-5">
                  <button
                    onClick={() => setSeen(true)}
                    className="rounded-full bg-[#bc233e] px-10 py-3 font-semibold text-white transition duration-150 ease-in-out hover:bg-[#c53142] "
                  >
                    Checked
                  </button>
                  <Model
                    isOpen={seen}
                    onRequestClose={() => setSeen(false)}
                    style={{
                      overlay: {
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(2px)',
                      },
                      content: {
                        height: 'auto',
                        width: '600px',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '40px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        backgroundColor: 'white',
                      },
                    }}
                  >
                    <h2 className="font-nunito mb-4 text-center text-2xl font-semibold">
                      Password Management
                    </h2>
                    <form>
                     
                      <div className="mt-8 flex justify-center">
                        <button
                          type="submit"
                          className="rounded-md bg-red-600 px-6 py-2 text-lg font-semibold text-white transition duration-150 ease-in-out hover:bg-red-700"
                        >
                          Update Password
                        </button>
                      </div>
                    </form>
                    <button
                      onClick={() => setSeen(false)}
                      className="absolute right-5 top-5 text-2xl text-gray-600 hover:text-red-600"
                    >
                      <FiXCircle />
                    </button>
                  </Model>
                </td>
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
