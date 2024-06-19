import { useState } from 'react';
import { useDarkMode } from '../Settings/DarkModeContext';
import { FaCheck } from 'react-icons/fa';

export default function BloodRequest() {
  // Checkbox states
  const [allChecked, setAllChecked] = useState(false);
  const [hospitalChecked, setHospitalChecked] = useState(false);
  const [usersChecked, setUsersChecked] = useState(false);

  // Dark Mode
  const { dark } = useDarkMode();

  // Form state
  const [form, setForm] = useState({
    hospitals: '',
    address: '',
    type: '',
    quanty: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    switch (e.target.id) {
      case 'all':
        setAllChecked(e.target.checked);
        break;
      case 'hospital':
        setHospitalChecked(e.target.checked);
        break;
      case 'users':
        setUsersChecked(e.target.checked);
        break;
      default:
        break;
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine the API endpoint
    let apiEndpoint = 'https://artery-backend.vercel.app/api/hospital/send';
    if (allChecked) {
      apiEndpoint = 'https://artery-backend.vercel.app/api/all/send';
    } else if (hospitalChecked) {
      apiEndpoint = 'https://artery-backend.vercel.app/api/hospital/send/6';
    } else if (usersChecked) {
      apiEndpoint = 'https://artery-backend.vercel.app/api/hospital/send';
    }

    // Send data to the backend
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    // Check if the request was successful
    if (response.ok) {
      console.log('Data sent successfully');
    } else {
      console.log('Failed to send data');
    }
  };

  return (
    <div
      className={`h-[517px] rounded-3xl  pl-11 pr-16 pt-5 ${dark === false ? 'bg-white text-black' : 'bg-[#171717] text-white'}`}
    >
      <div className="mt-5 flex">
        <form action="#" method="post" onSubmit={handleSubmit}>
          <h1 className="pb-16 pt-4 font-['Nunito'] text-lg font-semibold">
            Blood Request
          </h1>
          <div className="flex flex-col gap-8 pl-5">
            <div className="flex flex-row gap-8">
              <div>
                <label
                  htmlFor="hospitals"
                  className="font-['Nunito'] text-lg font-medium leading-snug"
                >
                  Hospital Name
                </label>
                <div>
                  <input
                    id="hospitals"
                    name="hospitals"
                    type="text"
                    placeholder="Enter hospital name"
                    value={form.hospitals}
                    onChange={handleChange}
                    className={`inline-flex h-12 w-[464.91px] items-center justify-start rounded-xl ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'} pb-3 pl-6 pr-6 pt-2.5 font-['Nunito'] text-lg outline-none`}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="font-['Nunito'] text-lg font-medium leading-snug"
                >
                  Address
                </label>
                <div>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter the address"
                    value={form.address}
                    onChange={handleChange}
                    className={`inline-flex h-12 w-[464.91px] items-center justify-start rounded-xl ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'} pb-3 pl-6 pr-6 pt-2.5 font-['Nunito'] text-lg outline-none`}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-8">
              <div>
                <label
                  htmlFor="type"
                  className="font-['Nunito'] text-lg font-medium leading-snug"
                >
                  Blood type
                </label>
                <div>
                  <input
                    id="type"
                    name="type"
                    type="text"
                    placeholder="Enter blood type"
                    value={form.type}
                    onChange={handleChange}
                    title="Please enter a valid blood type. For example, A+, O-, AB+, etc."
                    className={`inline-flex h-12 w-[464.91px] items-center justify-start rounded-xl ${
                      dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'
                    } pb-3 pl-6 pr-6 pt-2.5 font-['Nunito'] text-lg outline-none`}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="quanty"
                  className="font-['Nunito'] text-lg font-medium leading-snug"
                >
                  Required quantity
                </label>
                <div>
                  <input
                    id="quanty"
                    name="quanty"
                    type="number"
                    pattern="[0-9]*"
                    min="0"
                    placeholder="Enter required quantity"
                    value={form.quanty}
                    onChange={handleChange}
                    className={`inline-flex h-12 w-[464.91px] items-center justify-start rounded-xl ${dark === false ? 'bg-[#d9d9d9]' : 'bg-[#333333]'} pb-3 pl-6 pr-6 pt-2.5 font-['Nunito'] text-lg outline-none`}
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
                    checked={allChecked}
                    onChange={handleCheckboxChange}
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
                    checked={hospitalChecked}
                    onChange={handleCheckboxChange}
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
                    checked={usersChecked}
                    onChange={handleCheckboxChange}
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
                className="block rounded-xl bg-[#bc233e] px-8 py-3  font-['Nunito'] text-[18px] font-medium text-white hover:bg-[#C53142]"
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
