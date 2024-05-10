import React from 'react';
import userImg from '../../Images//userImg.png';
import { useDarkMode } from './DarkModeContext';

export default function PersonalSet() {

  // Dark Mode
  const { dark } = useDarkMode();

  return (
    <div className={`h-[475px] w-[1009px] rounded-3xl  pl-11 pr-16 pt-5 ${dark === false ? 'bg-white' : 'bg-[#171717]' }`}>
      <div className="relative h-[165px] w-[346.67px]">
        <div className="absolute left-[113px] top-[55px] inline-flex h-[37px] w-[98.67px] items-center justify-center rounded-3xl bg-[#c53142] py-2.5 pl-[23px] pr-[22.67px]">
          <button className="text-center font-['Nunito'] text-[15px] font-medium leading-[16.96px] text-white">
            Change
          </button>
        </div>
        <div className="absolute left-[248px] top-[55px] inline-flex h-[37px] w-[98.67px] items-center justify-center rounded-3xl bg-[#f4d6d7] py-2.5 pl-[27.37px] pr-[26.29px]">
          <button className="text-center font-['Nunito'] text-[15px] font-medium leading-[16.96px] text-black">
            Delete
          </button>
        </div>
        <img
          className="absolute left-[6px] top-[36px] h-[76px] w-[76px] rounded-3xl"
          src={userImg}
          alt="userImg"
        />
        <p className={`absolute left-0 top-0 text-center font-['Nunito'] text-[17px] font-bold leading-snug ${dark === false ? 'text-black' : 'text-white'}`}>
          Profile Picture
        </p>
        <p className="absolute left-[6px] top-[149px] text-right font-['Nunito'] text-xs font-normal text-neutral-400">
          Admin hospital
        </p>
        <p className={`absolute left-[11px] top-[126px] text-right font-['Nunito'] text-[15px] font-semibold ${dark === false ? 'text-black' : 'text-white'}`}>
          Aboelenen
        </p>
      </div>

      <div className="mt-5">
        <form action="#" method="post">
          <div className={`flex gap-5 ${dark === false ? 'text-black' : 'text-white'}`}>
            <div className="flex flex-col gap-8">
              <div>
                <label
                  htmlFor="Username"
                  className="font-['Nunito'] text-xl font-medium leading-snug"
                >
                  Username
                </label>
                <div>
                  <input
                    id="Username"
                    name="Username"
                    type="text"
                    className={`inline-flex h-12 w-[438px]  items-center justify-start rounded-3xl ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'} pb-3 pl-6 pr-6 pt-2.5 font-['Nunito'] text-lg outline-none`}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="PhoneNumber"
                  className="font-['Nunito'] text-xl font-medium leading-snug"
                >
                  Phone Number
                </label>
                <div>
                  <input
                    id="PhoneNumber"
                    name="PhoneNumber"
                    type="tel"
                    className={`inline-flex h-12 w-[438px] items-center justify-start rounded-3xl ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'} pb-3 pl-6 pr-6 pt-2.5 font-['Nunito'] text-lg outline-none`}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <label
                  htmlFor="EmailAddress"
                  className="font-['Nunito'] text-xl font-medium leading-snug"
                >
                  Email Address
                </label>
                <div>
                  <input
                    id="EmailAddress"
                    name="EmailAddress"
                    type="email"
                    className={`inline-flex h-12 w-[438px]  items-center justify-start rounded-3xl ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'} pb-3 pl-6 pr-6 pt-2.5 font-['Nunito'] text-lg outline-none`}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="Address"
                  className="font-['Nunito'] text-xl font-medium leading-snug"
                >
                  Address
                </label>
                <div>
                  <input
                    id="Address"
                    name="Address"
                    type="text"
                    className={`inline-flex h-12 w-[438px] items-center justify-start rounded-3xl ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'} pb-3 pl-6 pr-6 pt-2.5 font-['Nunito'] text-lg outline-none`}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
