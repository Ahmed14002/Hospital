import { HiHome } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";export const links = [
  {
    name: 'Home',
    path: '/home',
    icon: <HiHome size={25} />,
    role: ["HOSPITAL","MANGER"],
  },
  {
    name: 'Donors',
    path: '/donors',
    icon: <FaUser size={25} />,
    role: ["HOSPITAL","MANGER"],
  },
  {
    name: 'Notification',
    path: '/notification',
    icon: <IoNotifications size={25} />,
    role: ["HOSPITAL","MANGER"],
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <IoMdSettings  size={25} />,
    role: "MANGER",
  },
];
