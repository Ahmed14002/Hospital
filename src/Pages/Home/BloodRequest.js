import { useDarkMode } from '../Settings/DarkModeContext';
import { FaCheck } from 'react-icons/fa';

export default function BloodRequest() {
  // Dark Mode
  const { dark } = useDarkMode();

  return (
    <div
      className={`h-[517px] rounded-3xl  pl-11 pr-16 pt-5 ${dark === false ? 'bg-white text-black' : 'bg-[#171717] text-white'}`}
    >
      <div className="mt-5 flex">
        <form action="#" method="post">
          <h1 className="pb-16 pt-4 font-['Nunito'] text-lg font-semibold">
            Blood Request
          </h1>
          <div className="flex flex-col gap-8 pl-5">
            <div className="flex flex-row gap-8">
              <div>
                <label
                  htmlFor="Username"
                  className="font-['Nunito'] text-lg font-medium leading-snug"
                >
                  Username
                </label>
                <div>
                  <input
                    id="Username"
                    name="Username"
                    type="text"
                    className={`inline-flex h-12 w-[464.91px] items-center justify-start rounded-3xl ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'} pb-3 pl-6 pr-6 pt-2.5 font-['Nunito'] text-lg outline-none`}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="PhoneNumber"
                  className="font-['Nunito'] text-lg font-medium leading-snug"
                >
                  Telephone
                </label>
                <div>
                  <input
                    id="PhoneNumber"
                    name="PhoneNumber"
                    type="tel"
                    // pattern="^[0-9]+$"
                    // inputMode="numeric"
                    className={`inline-flex h-12 w-[464.91px] items-center justify-start rounded-3xl ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'} pb-3 pl-6 pr-6 pt-2.5 font-['Nunito'] text-lg outline-none`}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-8">
              <div>
                <label
                  htmlFor="BloodType"
                  className="font-['Nunito'] text-lg font-medium leading-snug"
                >
                  Blood type
                </label>
                <div>
                  <input
                    id="BloodType"
                    name="BloodType"
                    type="text"
                    className={`inline-flex h-12 w-[464.91px]  items-center justify-start rounded-3xl ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'} pb-3 pl-6 pr-6 pt-2.5 font-['Nunito'] text-lg outline-none`}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="Quantity"
                  className="font-['Nunito'] text-lg font-medium leading-snug"
                >
                  Required quantity
                </label>
                <div>
                  <input
                    id="Quantity"
                    name="Quantity"
                    type="number"
                    pattern="[0-9]*"
                    min="0"
                    className={`inline-flex h-12 w-[464.91px] items-center justify-start rounded-3xl ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'} pb-3 pl-6 pr-6 pt-2.5 font-['Nunito'] text-lg outline-none`}
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full flex-row  items-center justify-between pt-6">
              <div className="flex items-center justify-center gap-8">
                <label
                  htmlFor="all"
                  className="relative flex cursor-pointer items-center justify-center text-sm font-normal"
                >
                  <input
                    type="checkbox"
                    id="all"
                    value="all"
                    className={`h-4 w-4  cursor-pointer appearance-none rounded-[4px]  ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'}`}
                  />
                  <FaCheck
                    size={12}
                    className={`check-1 absolute left-[2.2px] top-[4.2px] ${dark === false ? 'text-[#D12746]' : 'text-[#ff3358]'} text-opacity-0`}
                  />
                  <span className="pl-2">All</span>
                </label>
                <label
                  htmlFor="hospital"
                  className="relative flex cursor-pointer items-center justify-center text-sm font-normal"
                >
                  <input
                    type="checkbox"
                    id="hospital"
                    value="hospital"
                    className={`h-4 w-4  cursor-pointer appearance-none rounded-[4px]  ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'}`}
                  />
                  <FaCheck
                    size={12}
                    className={`check-2 absolute left-[3px] top-[4.2px] ${dark === false ? 'text-[#D12746]' : 'text-[#ff3358]'} text-opacity-0`}
                  />
                  <span className="pl-2 ">Hospital</span>
                </label>

                <label
                  htmlFor="users"
                  className="relative flex cursor-pointer items-center justify-center text-sm font-normal"
                >
                  <input
                    type="checkbox"
                    id="users"
                    value="users"
                    className={`h-4 w-4  cursor-pointer appearance-none rounded-[4px]  ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'}`}
                  />
                  <FaCheck
                    size={12}
                    className={`check-3 absolute left-[3px] top-[4.2px] ${dark === false ? 'text-[#D12746]' : 'text-[#ff3358]'} text-opacity-0`}
                  />
                  <span className="pl-2 ">Users</span>
                </label>
              </div>
              <button
                type="submit"
                className="block rounded-[20px] bg-[#bc233e] px-8 py-3  font-['Nunito'] text-[18px] font-medium text-white hover:bg-[#C53142]"
              >
                Send Request
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
