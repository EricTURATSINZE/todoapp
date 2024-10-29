import React, { ReactNode } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { CiDark } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import Sidebar from "./Sidebar";
import en from "../assets/uk.png";
import fr from "../assets/fr.png";
import { useDarkMode } from "../hooks/useDarkMode";
import i18n from "../i18n";
import store from "store";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="flex h-[100vh] overflow-y-hidden">
      <Sidebar />
      <div className="w-full">
        <div className="flex justify-between items-center border-b dark:border-b-gray-700 p-4 dark:bg-darkComponent">
          <div className="flex items-center bg-primaryGray dark:bg-darkComponentAccent px-4 py-2 rounded-lg">
            <input
              type="text"
              placeholder={t("search")}
              className="w-[15rem] me-4 bg-primaryGray dark:bg-darkComponentAccent focus:outline-none border-none"
            />
            <RiSearch2Line className="text-xl text-gray-400" />
          </div>
          <div className="flex gap-3 items-center">
            <figure>
              <img
                src={i18n.language === "en" ? en : fr}
                alt="English"
                className="w-6 h-5 rounded"
              />
            </figure>
            <select
              name="theme"
              id="theme"
              className="px-2 py-1 pr-4 rounded-lg outline-none focus:outline-none bg-primaryGray dark:bg-darkComponentAccent"
              onChange={(selectedValue) => {
                store.set("language", selectedValue.target.value);
                i18n.changeLanguage(selectedValue.target.value);
              }}
            >
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
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
