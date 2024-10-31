import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabOption } from "../utils/constants";
import { useSelector } from "react-redux";
import { AppState } from "../store/appSlice";
import { RootState } from "../store";

const Tabs: React.FC<{
  selectedTab: TabOption;
  setSelectedTab: (value: TabOption) => void;
}> = ({ selectedTab, setSelectedTab }) => {
  const { t } = useTranslation();
  const appState: AppState = useSelector((state: RootState) => state.app);

  const getTabClasses = (tab: TabOption) =>
    `flex items-center gap-1 px-4 py-4 cursor-pointer ${
      selectedTab === tab
        ? "border-b-4 border-primaryColor rounded-t-lg text-orange rounded-tl-lg rounded-tr-lg"
        : "border-b-4 border-transparent text-gray-500 dark:text-gray-200"
    }`;

  return (
    <div className="flex flex-col md:flex-row gap-4 border-b border-gray-200 dark:border-gray-700">
      <div
        className={getTabClasses("all")}
        onClick={() => setSelectedTab("all")}
      >
        <span>{t("allTasks")}</span>
        <div className="px-2 rounded-md bg-gray-100 dark:bg-gray-600">
          {appState.tasks.length}
        </div>
      </div>
      <div
        className={getTabClasses("todo")}
        onClick={() => setSelectedTab("todo")}
      >
        <span>{t("todo")}</span>
        <div className="px-2 rounded-md bg-gray-100 dark:bg-darkComponentAccent dark:text-gray-300">
          {appState.tasks.filter((task) => !task.completed).length}
        </div>
      </div>
      <div
        className={getTabClasses("completed")}
        onClick={() => setSelectedTab("completed")}
      >
        <span>{t("completed")}</span>
        <div className="px-2 rounded-md bg-gray-100 dark:bg-darkComponentAccent dark:text-gray-300">
          {appState.tasks.filter((task) => task.completed).length}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
