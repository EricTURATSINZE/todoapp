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
import { MdMoreVert } from "react-icons/md";
import AvatarStack from "../components/AvatarStack";
import TodoCard from "../components/TodoCard";
import img1 from "../assets/img1.png";
import { useFetchData } from "../store/api";
import { AppState, setTasks } from "../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Task } from "../types/task";
import { useTranslation } from "react-i18next";
import NewTask from "../components/NewTask";
import { contributors, TabOption } from "../utils/constants";
import Tabs from "../components/tabs";

const Tasks: React.FC = () => {
  const { data, error, isLoading } = useFetchData();
  const [newTask, setNewTask] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState<TabOption>("all");
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
      <div className="flex items-center justify-between px-6 mt-4 rounded-2xl bg-white dark:bg-darkComponent">
        <Tabs selectedTab={selectedTab} setSelectedTab={filterTasks} />
        <div className="flex gap-4">
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
      <section className="grid grid-cols-4 my-4">
        {/* <TodoCard
          title="Footer Design"
          subTitle="Landing Page UI"
          status="To do"
          contributors={contributors.slice(2, 5)}
        />
        <div className="p-4 me-4 bg-white dark:bg-darkComponent rounded-2xl my-3">
          <figure className="width-full h-[10rem] mb-4 rounded-lg">
            <img className="rounded-lg h-full w-full" src={img1} alt="img1" />
          </figure>
          <div className="flex items-center justify-between">
            <div className="flex bg-orange-50 dark:bg-[#594123] text-orange-500 rounded-md px-2 items-center gap-2">
              To do
            </div>
            <MdMoreVert className="text-xl text-gray-500" />
          </div>
          <span className="block text-xl mt-2 font-semibold dark:text-gray-200">
            Footer Design
          </span>
          <span className="block mb-3 text-sm text-gray-400 font-semibold">
            Landing Page UI
          </span>
          <hr className="dark:border-gray-600" />
          <div className="flex items-center justify-between mt-3">
            <div>
              <AvatarStack maxVisible={3} images={contributors.slice(0, 3)} />
            </div>
          </div>
        </div>
        <TodoCard
          title="Footer Design"
          subTitle="Landing Page UI"
          status="In progress"
          contributors={contributors.slice(0, 2)}
        />
        <TodoCard
          title="Footer Design"
          subTitle="Landing Page UI"
          status="Completed"
          contributors={contributors.slice(0, 2)}
        />
        <TodoCard
          title="Footer Design"
          subTitle="Landing Page UI"
          status="Completed"
          contributors={contributors.slice(0, 2)}
        /> */}
        {selectedTasks.map((task: Task, index: number) => (
          <TodoCard
            key={task.id + "" + index}
            title={`${t("task")} ${index + 1} - ${task.todo.split(" ")[0]}`}
            task={task}
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

export default Tasks;
