import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineFolderMinus } from "react-icons/hi2";
import { AiOutlineStock } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import path from "path";
import { LuSettings } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { SiConekta } from "react-icons/si";
import { IoMdAdd } from "react-icons/io";
import { contributors } from "../utils/constants";

export const navItems = [
  {
    name: "Dashboard",
    icon: (
      <GrHomeRounded
        className="w-full text-xl mx-3"
        style={{ marginLeft: "-0.05rem" }}
      />
    ),
    path: "/dashboard",
  },
  {
    name: "Messages",
    icon: (
      <IoMailOutline
        className="w-full text-xl mx-3"
        style={{ marginLeft: "-0.05rem" }}
      />
    ),
    path: "/messages",
  },
  {
    name: "Files",
    icon: (
      <FaRegFileAlt
        className="w-full text-xl mx-3"
        style={{ marginLeft: "-0.05rem" }}
      />
    ),
    path: "/files",
  },
  {
    name: "Tasks",
    icon: (
      <HiOutlineFolderMinus
        className="w-full text-xl mx-3"
        style={{ marginLeft: "-0.05rem" }}
      />
    ),
    path: "/",
  },
  {
    name: "Reports",
    icon: (
      <AiOutlineStock
        className="w-full text-xl mx-3"
        style={{ marginLeft: "-0.05rem" }}
      />
    ),
    path: "/overview",
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:block h-[100vh] w-[5rem] border-r dark:border-darkComponentAccent dark:bg-darkComponent">
      <div className="w-[4rem] h-[4rem] ms-1 flex items-center justify-center mx-auto mt-1">
        <SiConekta className="text-2xl text-primaryColor" />
      </div>
      <nav className="mb-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center my-1 ${
                isActive
                  ? "bg-gradient-to-r from-purple-100 to-white dark:from-darkBackground dark:to-darkComponent text-primaryColor"
                  : "text-gray-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`w-[0.3rem] h-[2.4rem] flex-shrink-0 rounded-tr-lg rounded-br-lg ${
                    isActive ? "bg-primaryColor" : "bg-transparent"
                  }`}
                ></div>
                {item.icon}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <hr className="dark:border-gray-700" />
      <div className="flex flex-col justify-around items-center h-[40vh] py-8">
        {contributors.slice(3, 6).map((src, index) => (
          <div
            key={index}
            className="w-9 h-9 rounded-full overflow-hidden border-2 dark:border-gray-700"
          >
            <img
              src={src}
              alt={`Avatar ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="border border-dashed border-gray-400 p-1 rounded-full">
          <IoMdAdd className="text-xl text-gray-500" />
        </div>
      </div>
      <hr className="dark:border-gray-700" />
      <div className="flex flex-col justify-around h-[14vh] py-2 items-center">
        <LuSettings className="cursor-pointer text-2xl text-gray-500" />
        <IoPersonOutline className="cursor-pointer text-2xl text-gray-500" />
      </div>
    </aside>
  );
};

export default Sidebar;
