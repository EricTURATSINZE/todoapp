import React, { ReactNode } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { CiDark } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import Sidebar from "./Sidebar";
import { useDarkMode } from "../hooks/useDarkMode";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="flex h-[100vh] overflow-y-hidden">
      <Sidebar />
      <div className="w-full">
        <div className="flex justify-between items-center border-b dark:border-b-gray-700 p-4 dark:bg-darkComponent">
          <div className="flex items-center bg-primaryGray dark:bg-darkComponentAccent px-4 py-2 rounded-lg">
            <input
              type="text"
              placeholder="Search"
              className="w-[15rem] me-4 bg-primaryGray dark:bg-darkComponentAccent focus:outline-none border-none"
            />
            <RiSearch2Line className="text-xl text-gray-400" />
          </div>
          <div className="flex gap-3">
            <div className="p-2 rounded-lg bg-primaryGray dark:bg-darkComponentAccent">
              <CiDark
                className="cursor-pointer text-xl text-gray-500 dark:text-white"
                onClick={toggleDarkMode}
              />
            </div>
            <div className="cursor-pointer p-2 rounded-lg bg-primaryGray dark:bg-darkComponentAccent">
              <IoNotificationsOutline className="text-xl text-gray-500 dark:text-white" />
            </div>
          </div>
        </div>
        <main className="h-[90vh] overflow-y-scroll bg-backgroundColor dark:bg-darkBackground px-8 py-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
