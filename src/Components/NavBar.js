import { BiSolidCalendar } from 'react-icons/bi';
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';
import { useDarkMode } from './../Pages/Settings/DarkModeContext';

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const splitPathname = pathname.split('/');
  // Dark Mode
  const { dark } = useDarkMode();
  const date = new Date();
  const formattedDate = format(date, 'EEEE, do MMMM');
  return (
    <div className="flex items-center justify-between pr-10 pl-[26px] pt-[25px]">
      <div className={`font-[Nunito] text-[28px] font-semibold capitalize ${dark === false ? '' : 'text-white'}`}>
        {splitPathname.map((path, index) => (
          <p key={index}>{path}</p>
        ))}
      </div>
      <div className="flex items-center justify-between gap-1 font-[Nunito] text-[15px]">
        <BiSolidCalendar size={24} className="text-[#999999]" />
        <h1 className={`font-semibold mt-[2px] ${dark === false ? 'text-black' : 'text-white'}`}>{formattedDate}</h1>
      </div>
    </div>
  );
}
