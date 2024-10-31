import React, { ReactNode, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { CiDark } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import Sidebar, { navItems } from "./Sidebar";
import en from "../assets/uk.png";
import fr from "../assets/fr.png";
import { useDarkMode } from "../hooks/useDarkMode";
import i18n from "../i18n";
import store from "store";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="flex h-[100vh] overflow-y-hidden">
      <Sidebar />
      {/* Main content area */}
      {/* <div className="w-full relative"> */}
      {/* Hamburger icon for small screens */}

      {/* Overlay menu for small screens */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-start pt-20 pl-6 bg-black text-white">
          <button onClick={toggleMenu} className="absolute top-6 left-6">
            <FiX size={24} />
          </button>
          <div className="absolute top-6 right-6 p-2 rounded-lg bg-black">
            <CiDark
              className="cursor-pointer text-xl text-white dark:text-white"
              onClick={toggleDarkMode}
            />
          </div>
          <div className="flex gap-3 mb-6 items-center">
            <figure className="">
              <img
                src={i18n.language === "en" ? en : fr}
                alt="English"
                className="w-6 h-5 rounded"
              />
            </figure>
            <select
              name="theme"
              id="theme"
              value={i18n.language}
              className="px-2 py-1 pr-4 rounded-lg outline-none bg-black focus:outline-none"
              onChange={(selectedValue) => {
                store.set("language", selectedValue.target.value);
                i18n.changeLanguage(selectedValue.target.value);
              }}
            >
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
          </div>

          <nav className="space-y-4 text-center flex flex-col items-start">
            {navItems.map((item) => (
              <NavLink
                className="flex gap-3"
                key={item.name}
                to={item.path}
                onClick={toggleMenu}
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
      {/* </div> */}
      <div className="w-full">
        <div className="flex justify-between items-center border-b dark:border-b-gray-700 p-2 md:p-4  dark:bg-darkComponent">
          <div className="md:hidden p-4">
            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <div className="flex items-center bg-primaryGray dark:bg-darkComponentAccent px-4 py-2 rounded-lg">
            <input
              type="text"
              placeholder={t("search")}
              className="w-[12rem] me-4 bg-primaryGray dark:bg-darkComponentAccent focus:outline-none border-none"
            />
            <RiSearch2Line className="text-xl text-gray-400" />
          </div>
          <div className="flex gap-3 items-center">
            <figure className="hidden sm:block">
              <img
                src={i18n.language === "en" ? en : fr}
                alt="English"
                className="w-6 h-5 rounded"
              />
            </figure>
            <select
              name="theme"
              id="theme"
              value={i18n.language}
              className="hidden sm:block px-2 py-1 pr-4 rounded-lg outline-none focus:outline-none bg-primaryGray dark:text-gray-300 dark:bg-darkComponentAccent"
              onChange={(selectedValue) => {
                store.set("language", selectedValue.target.value);
                i18n.changeLanguage(selectedValue.target.value);
              }}
            >
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
            <div className="hidden sm:block p-2 rounded-lg bg-primaryGray dark:bg-darkComponentAccent">
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
