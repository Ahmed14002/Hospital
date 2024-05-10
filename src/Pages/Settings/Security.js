import { IoIosArrowForward, IoMdMoon } from 'react-icons/io';
import { FiSun } from 'react-icons/fi';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FiXCircle } from 'react-icons/fi';
import { useState } from 'react';
import { useDarkMode } from './DarkModeContext';
import Model from 'react-modal';


const Security = () => {
  // Show Password
  const [oldPass, setOldPass] = useState(false);
  const [newPass, setNewPass] = useState(false);
  const [confirmPass, setConfirmPass] = useState(false);
  // PopUp
  const [seen, setSeen] = useState(false);
  const [Language, setLanguage] = useState(false);
  // Dark Mode
  const { dark, handleDark } = useDarkMode();

  const toggle_1 = () => {
    setOldPass(!oldPass);
  };
  const toggle_2 = () => {
    setNewPass(!newPass);
  };
  const toggle_3 = () => {
    setConfirmPass(!confirmPass);
  };

  return (
      <div
        className={`h-[475px] pt-5 ${dark === false ? 'text-black' : 'text-white'} `}
      >
        <div className="flex flex-col gap-7">
          <div className="flex justify-between px-3">
            <div className="text-center font-['Nunito'] text-xl font-semibold leading-snug   ">
              Password Management
            </div>
            <button onClick={() => setSeen(true)}>
              <IoIosArrowForward
                size={25}
                className="text-gray-400 hover:text-gray-600"
              />
            </button>
            <Model
              isOpen={seen}
              onRequestClose={() => setSeen(false)}
              style={{
                overlay: {
                  background: '#00000066',
                  backdropFilter: 'blur(2px)',
                },
                content: {
                  height: '489px',
                  width: '769px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: 'none',
                  borderRadius: '24px',
                  padding: '40px 20px',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  backgroundColor: `${dark === false ? 'white' : '#1C1C1E'}`,
                  color: `${dark === false ? 'black' : 'white'}`,
                },
              }}
            >
              <h2 className="text-center font-['Nunito'] text-[28px] font-semibold">
                Password Management
              </h2>
              <form className="pt-[27px]">
                <div className="flex flex-col">
                  <div className="px-[25px]">
                    <label
                      htmlFor="oldPassword"
                      className="font-['Nunito'] text-lg font-medium leading-snug"
                    >
                      Old Password
                    </label>
                    <div className="mx-[25px] flex items-center justify-between ">
                      <input
                        id="oldPassword"
                        name="oldPassword"
                        type={oldPass === false ? 'password' : 'text'}
                        minLength="8"
                        placeholder="old password..."
                        required
                        className="w-full font-['Nunito'] text-lg outline-none bg-transparent"
                      />
                      <div className="cursor-pointer text-xl max-sm:text-xl">
                        {oldPass === false ? (
                          <AiFillEyeInvisible onClick={toggle_1} />
                        ) : (
                          <AiFillEye onClick={toggle_1} />
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="mt-[19px] border-[1px] border-[#c53142]"></span>
                </div>
                <div className="mt-[18px] flex flex-col">
                  <div className="px-[25px]">
                    <label
                      htmlFor="newPassword"
                      className="font-['Nunito'] text-lg font-medium leading-snug"
                    >
                      New Password
                    </label>
                    <div className="mx-[25px] flex justify-between items-center">
                      <input
                        id="newPassword"
                        name="newPassword"
                        type={newPass === false ? 'password' : 'text'}
                        minLength="8"
                        placeholder="new password..."
                        required
                        className="w-full font-['Nunito'] text-lg outline-none bg-transparent"
                      />
                      <div className="cursor-pointer text-xl max-sm:text-xl">
                        {newPass === false ? (
                          <AiFillEyeInvisible onClick={toggle_2} />
                        ) : (
                          <AiFillEye onClick={toggle_2} />
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="mt-[19px] border-[1px] border-[#c53142]"></span>
                </div>
                <div className="mt-[18px] flex flex-col">
                  <div className="px-[25px]">
                    <label
                      htmlFor="confirmNewPassword"
                      className="font-['Nunito'] text-lg font-medium leading-snug"
                    >
                      Confirm New Password
                    </label>
                    <div className="mx-[25px] flex justify-between items-center">
                      <input
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                        type={confirmPass === false ? 'password' : 'text'}
                        minLength="8"
                        placeholder="confirm new password..."
                        required
                        className="w-full font-['Nunito'] text-lg outline-none bg-transparent"
                      />
                      <div className="cursor-pointer text-xl max-sm:text-xl">
                        {confirmPass === false ? (
                          <AiFillEyeInvisible onClick={toggle_3} />
                        ) : (
                          <AiFillEye onClick={toggle_3} />
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="mt-[19px] border-[1px] border-[#c53142]"></span>
                </div>
                <div className="flex items-center justify-center pt-[30px]">
                  <button
                    type="submit"
                    className="rounded-[10px] bg-[#c53142] px-[15px] py-[12px] text-center font-['Nunito'] text-lg font-semibold text-white hover:bg-[#bc233f]"
                  >
                    Update Password
                  </button>
                </div>
              </form>
              <button
                onClick={() => setSeen(false)}
                className="absolute right-[19px] top-[15px]"
              >
                <FiXCircle className="text-2xl hover:text-[#c53142]" />
              </button>
            </Model>
          </div>
          <span className="border-[1px] border-[#c53142]"></span>
        </div>

        <div className="mt-[30px] flex flex-col gap-7">
          <div className="flex justify-between px-3">
            <div className="text-center font-['Nunito'] text-xl font-semibold leading-snug">
              Change Language
            </div>
            <button onClick={() => setLanguage(true)}>
              <IoIosArrowForward
                size={25}
                className="text-gray-400 hover:text-gray-600"
              />
            </button>
            <Model
              isOpen={Language}
              onRequestClose={() => setLanguage(false)}
              style={{
                overlay: {
                  background: '#00000066',
                  backdropFilter: 'blur(2px)',
                },
                content: {
                  height: '376px',
                  width: '672px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: 'none',
                  borderRadius: '24px',
                  padding: '35px 20px 30px',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  backgroundColor: `${dark === false ? 'white' : '#1C1C1E'}`,
                  color: `${dark === false ? 'black' : 'white'}`,
                },
              }}
            >
              <h2 className="text-center font-['Nunito'] text-[28px] font-semibold">
                Change Language
              </h2>
              <div className="flex flex-col gap-[18px] py-[30px]">
                <div className="flex items-center justify-between px-[45px] py-[10px]">
                  <label
                    htmlFor="english"
                    className="cursor-pointer font-[Nunito] text-xl font-medium "
                  >
                    English
                  </label>
                  <input
                    checked
                    type="radio"
                    id="english"
                    name="language"
                    value="english"
                    className={`cursor-pointer appearance-none before:absolute before:right-[65px] before:top-[32.9%] before:h-4 before:w-4 before:rounded-full before:border-[3px] before:border-solid before:border-[#c53142] before:content-[''] after:absolute after:right-[68.5px] after:top-[33.9%] after:h-2 after:w-2 after:scale-0 after:rounded-full ${dark === false ? 'after:bg-black' : 'after:bg-white'} after:content-[''] checked:after:scale-[1]`}
                  />
                </div>
                <span className="border-[1px] border-[#c53142]"></span>
                <div className="flex items-center justify-between px-[45px] py-[10px]">
                  <label
                    htmlFor="arabic"
                    className="cursor-pointer text-[22px] font-medium"
                  >
                    العربية
                  </label>
                  <input
                    type="radio"
                    id="arabic"
                    name="language"
                    value="arabic"
                    className={`cursor-pointer appearance-none before:absolute before:right-[65px] before:top-[56.4%] before:h-4 before:w-4 before:rounded-full before:border-[3px] before:border-solid before:border-[#c53142] before:content-[''] after:absolute after:bottom-[40.4%] after:right-[68.5px] after:h-2 after:w-2 after:scale-0 after:rounded-full ${dark === false ? 'after:bg-black' : 'after:bg-white'} after:content-[''] checked:after:scale-[1]`}
                  />
                </div>
                <span className="border-[1px] border-[#c53142]"></span>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="rounded-[10px] bg-[#c53142] px-[30px] py-[10px] text-center font-['Nunito'] text-lg font-semibold text-white hover:bg-[#bc233f]"
                >
                  Save Changes
                </button>
              </div>
              <button
                onClick={() => setLanguage(false)}
                className="absolute right-[19px] top-[15px]"
              >
                <FiXCircle className="text-2xl hover:text-[#c53142]" />
              </button>
            </Model>
          </div>
          <span className="border-[1px] border-[#c53142]"></span>
        </div>

        <div className="mt-[30px] flex flex-col gap-7">
          <div className="flex justify-between px-3">
            <div className="text-center font-['Nunito'] text-xl font-semibold leading-snug   ">
              Dark Mode
            </div>
            <button>
              {dark === false ? (
                <IoMdMoon
                  onClick={handleDark}
                  className="text-2xl text-gray-400 hover:text-gray-600"
                  size={22}
                />
              ) : (
                <FiSun
                  onClick={handleDark}
                  className="text-2xl text-gray-400 hover:text-gray-600"
                />
              )}
            </button>
          </div>
          <span className="border-[1px] border-[#c53142]"></span>
        </div>

        
      </div>
  );
};

export default Security;

