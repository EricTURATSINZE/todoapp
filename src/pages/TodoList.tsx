import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { VscSettings } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { PiLinkSimpleLight } from "react-icons/pi";
import { PiRowsFill } from "react-icons/pi";
import { CiGrid41 } from "react-icons/ci";
import { SlLockOpen } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import AvatarStack from "../components/AvatarStack";
import TodoCard from "../components/TodoCard";
import { useFetchData } from "../store/api";
import { AppState, setTasks } from "../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Task } from "../types/task";
import { useTranslation } from "react-i18next";
import NewTask from "../components/NewTask";
import { contributors, TabOption } from "../utils/constants";
import Tabs from "../components/tabs";

const TodoList: React.FC = () => {
  const { data, error, isLoading } = useFetchData();
  const [newTask, setNewTask] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState<TabOption>("all");
  const [searchText, setSearchText] = useState<string>("");
  const appState: AppState = useSelector((state: RootState) => state.app);
  const [selectedTasks, setSelectedTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (data?.todos?.length > 0) {
      dispatch(setTasks(data.todos));
      setSelectedTasks(data.todos);
    }
  }, [data, dispatch]);

  useEffect(() => {
    setSelectedTasks(appState.tasks);
  }, [appState.tasks]);

  const filterTasks = (tab: TabOption) => {
    if (tab === "all") {
      setSelectedTasks(appState.tasks);
    } else if (tab === "todo") {
      setSelectedTasks(appState.tasks.filter((task) => !task.completed));
    } else if (tab === "completed") {
      setSelectedTasks(appState.tasks.filter((task: Task) => task.completed));
    }
    setSelectedTab(tab);
  };

  return (
    <Layout>
      <div className="flex items-center justify-between">
        <span className="dark:text-gray-400 text-gray-400 text-sm">
          {"Workspace  >  Creative  >  "}{" "}
          <span className="text-black font-semibold dark:text-gray-200">
            {t("creativeWebsite")}
          </span>
        </span>
        <div className="flex flex-col items-end">
          <span className="font-semibold text-sm dark:text-gray-200">
            {t("from23April")}
          </span>
          <div className="flex items-center">
            <div className="h-2 w-2 me-2 rounded-full bg-green-500 flex-shrink-0"></div>
            <span className="text-gray-400 font-semibold text-sm">
              {t("updated12MinAgo")}
            </span>
          </div>
        </div>
      </div>
      <header className="text-3xl font-semibold mt-2 mb-4 dark:text-gray-200">
        {t("websiteDesign")}
      </header>
      <div className="flex items-center justify-between my-2">
        <div className="flex gap-2 items-center">
          <SlLockOpen className="dark:text-gray-200" />
          <span className="font-semibold ms-2 dark:text-gray-200">
            {t("limitedAccess")}
          </span>
          <IoIosArrowDown className="dark:text-gray-200" />
          <div className="h-7 w-px bg-gray-300 flex-shrink-0 mx-1"></div>
          <div>
            <AvatarStack images={contributors} />
          </div>
          <IoIosAddCircle className="text-3xl text-primaryColor" />
        </div>
        <div className="flex gap-2 items-center">
          <PiLinkSimpleLight className="cursor-pointer text-xl text-primaryColor" />
          <div className="h-7 w-px bg-gray-300 flex-shrink-0 mx-1"></div>
          <div className="bg-primaryColor rounded-lg p-1">
            <PiRowsFill className="cursor-pointer text-xl text-white dark:text-gray-300" />
          </div>
          <CiGrid41 className="cursor-pointer text-2xl text-primaryColor" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 my-4 rounded-2xl bg-white dark:bg-darkComponent">
        <Tabs selectedTab={selectedTab} setSelectedTab={filterTasks} />
        <div className="flex gap-4 my-4 lg:my-0">
          <button className="flex items-center gap-2 rounded-lg border dark:border-gray-400 px-3 py-1 hover:bg-primaryColor hover:text-white">
            <VscSettings className="text-xl dark:text-gray-200" />
            <span className="text-sm dark:text-gray-200">
              {t("filterAndSort")}
            </span>
          </button>
          <button
            className="flex items-center gap-2 rounded-lg border dark:border-gray-400 px-3 py-1 dark:text-gray-200 hover:bg-primaryColor hover:text-white"
            onClick={() => setNewTask(true)}
          >
            <IoMdAdd className="text-xl" />
            <span className="text-sm">{t("newTask")}</span>
          </button>
        </div>
      </div>
      <section className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-4">
        <span>Hello</span>
        {selectedTasks.map((task: Task, index: number) => (
          <TodoCard
            key={task.id + "" + index}
            title={`${t("task")} - ${task.todo.split(" ")[0]}`}
            task={task}
            hasImage={index % 4 === 0}
            status={
              task.completed
                ? t("completed")
                : index % 2 === 0
                ? t("todo")
                : t("inProgress")
            }
            contributors={contributors.slice(1, (index % 3) + 2)}
          />
        ))}
      </section>
      {newTask && (
        <NewTask isOpen={newTask} onClose={() => setNewTask(false)} />
      )}
    </Layout>
  );
};

export default TodoList;
