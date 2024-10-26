import React from "react";
import { GiCondyluraSkull } from "react-icons/gi";
import { GrHomeRounded } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineFolderMinus } from "react-icons/hi2";
import { AiOutlineStock } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import path from "path";

const Sidebar: React.FC = () => {
  const navItems = [
    {
      name: "Dashboard",
      icon: <GrHomeRounded className="text-xl mx-3" />,
      path: "/dashboard",
    },
    {
      name: "Messages",
      icon: <IoMailOutline className="text-xl mx-3" />,
      path: "/messages",
    },
    {
      name: "Files",
      icon: <FaRegFileAlt className="text-xl mx-3" />,
      path: "/files",
    },
    {
      name: "Tasks",
      icon: <AiOutlineStock className="text-xl mx-3" />,
      path: "/",
    },
    {
      name: "Overview",
      icon: <HiOutlineFolderMinus className="text-xl mx-3" />,
      path: "/overview",
    },
  ];
  return (
    <aside className="basis-2/12 h-[100vh] border-r">
      <div className="w-[5rem] h-[5rem] flex items-center justify-center mx-auto my-2">
        <GiCondyluraSkull className="text-7xl text-primaryColor" />
      </div>
      <hr />
      <nav className="my-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center my-1 ${
                isActive ? "bg-gradient-to-r from-purple-100 to-white text-primaryColor" : ""
              }`
            }
          >
            <div className="w-[0.4rem] h-[2.8rem] bg-primaryColor flex-shrink-0 rounded-tr-lg rounded-br-lg"></div>
            {item.icon}
            <span className="">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <hr />
    </aside>
  );
};

export default Sidebar;
