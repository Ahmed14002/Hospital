import { Outlet } from 'react-router-dom';
import SideBar from '../../Components/SideBar';
import NavBar from '../../Components/NavBar';


export default function Main() {
  
  return (
    <div className={`flex h-screen w-screen flex-row`}>
      <SideBar />
      <div
        className={`flex w-full flex-1 flex-col max-2xl:overflow-auto ${dark === false ? 'bg-gray-100' : 'bg-[#1e1e1e]'}`}
      >
        <NavBar />
        <div className="mt-3 flex-1 pl-[26px] pr-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
