import { useState } from 'react';
import { IoLogOut } from 'react-icons/io5';
import { FiChevronsRight, FiX } from 'react-icons/fi';
import { useDarkMode } from './../Pages/Settings/DarkModeContext';
import logo from './../Images/logo.png';
import avatar from './../Images/avatar.png';
import { Link, useLocation } from 'react-router-dom';
import { links } from './NavLink';
import classNames from 'classnames';
import axios from 'axios';

const linkClasses =
  'font-semibold font-[Nunito] transition-colors group hover:text-[#C53142] relative mb-8 flex cursor-pointer items-center rounded-md px-3 py-3 ';
const iconClasses =
  'bg-[#f8dbdb] ease-linear duration-200 absolute h-[43px] rounded-md left-[-24px]';

export default function SideBar() {
  const role = localStorage.getItem('role'); // Get role from LocalStorage
  const [expanded, setExpanded] = useState(true);
  const { pathname } = useLocation();
  // Dark Mode
  const { dark } = useDarkMode();
  
  // Logout button functionality
  async function handleLogout() {
    try {
      await axios.post('https://artery-backend.vercel.app/api/auth/logout/8');
      window.location.pathname = '/login';
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div
      className={`flex flex-col py-4 ${dark === false ? 'bg-gray-50' : 'bg-[#171717]'}`}
    >
      <div
        className={`flex items-center justify-center gap-4 ${expanded ? 'flex-row px-1 py-3' : 'flex-col p-0'}`}
      >
        <div
          className={`flex items-center justify-center overflow-hidden transition-all ${expanded ? 'gap-2' : 'gap-0'}`}
        >
          <img
            src={logo}
            className={`overflow-hidden transition-all ${expanded ? 'w-[65px]' : 'w-[60px]'}`}
            alt=""
          />
          <span
            className={`overflow-hidden text-lg font-medium transition-all ${expanded ? 'w-14' : 'w-0'}
            ${dark === false ? '' : 'text-white'}`}
          >
            Artery
          </span>
        </div>
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className={`rounded-lg p-1.5 ${dark === false ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
        >
          {expanded ? <FiX /> : <FiChevronsRight />}
        </button>
      </div>
      <div className="flex-1 px-3 pt-7">
        {links.map(
          (link, key) =>
            link.role.includes(role) && (
              <Link
                key={key}
                to={link.path}
                className={classNames(
                  pathname === link.path ? 'text-[#C53142]' : 'text-[#999999]',
                  linkClasses,
                )}
              >
                <span
                  className={classNames(
                    pathname === link.path ? 'w-[66px]' : 'w-0',
                    iconClasses,
                  )}
                ></span>
                <span className="z-0">{link.icon}</span>
                <span
                  className={`overflow-hidden transition-all ${expanded ? 'ml-3 w-36' : 'w-0'}`}
                >
                  {link.name}
                </span>
                {!expanded && (
                  <div
                    className={`invisible absolute left-full z-50 ml-6 -translate-x-3 rounded-md
                  bg-[#f8dbdb] px-2 py-1
                  text-sm text-[#C53142] opacity-20 transition-all
                  group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
                  `}
                  >
                    {link.name}
                  </div>
                )}
              </Link>
            ),
        )}
      </div>
      <div>
        <div
          className={`flex items-center justify-around border-t-[3px] ${dark === false ? 'border-[#e5e7eb]' : 'border-[#282727]'} ${expanded ? 'flex-row  gap-4  pt-3' : 'flex-col gap-2 p-0'}`}
        >
          <div
            className={`flex items-center justify-center overflow-hidden transition-all  ${expanded ? 'gap-4' : 'gap-0 mt-[10px]'}`}
          >
            <img src={avatar} className={`h-10 w-10 rounded-md`} alt="" />
            <h4
              className={`overflow-hidden font-[Nunito] ${dark === false ? '' : 'text-white'} text-base font-semibold transition-all ${expanded ? 'w-14' : 'w-0'}`}
            >
              Ahmed
            </h4>
          </div>
          <button onClick={handleLogout}>
            <IoLogOut
              size={25}
              className="cursor-pointer text-[#999999] hover:text-[#C53142]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
