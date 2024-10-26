import React, { ReactNode } from 'react';
import { RiSearch2Line } from "react-icons/ri";
import { CiDark } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import Sidebar from './Sidebar';

interface LayoutProps {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="basis-10/12">
        <div className="flex justify-between items-center border-b p-4">
          <div className="flex items-center bg-primaryGray px-4 py-2 rounded-lg">
            <input
              type="text"
              placeholder="Search"
              className="w-[15rem] me-4 bg-primaryGray focus:outline-none border-none"
            />
            <RiSearch2Line className="text-xl text-gray-400" />
          </div>
          <div className="flex gap-3">
            <div className="p-2 rounded-lg bg-primaryGray">
              <CiDark className="text-xl text-gray-500" />
            </div>
            <div className="p-2 rounded-lg bg-primaryGray">
              <IoNotificationsOutline className="text-xl text-gray-500" />
            </div>
          </div>
        </div>
        <main className="bg-backgroundColor h-full p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;