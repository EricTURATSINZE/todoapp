import React from "react";
import Layout from "../components/Layout";
import { VscSettings } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { PiLinkSimpleLight } from "react-icons/pi";
import { PiRowsFill } from "react-icons/pi";
import { CiGrid41 } from "react-icons/ci";
import { SlLockOpen } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

const Tasks: React.FC = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between">
        <span>Workspace Creative Creative Website</span>
        <span>From 23 April</span>
      </div>
      <h1 className="text-3xl font-semibold my-3">Website Design</h1>
      <div className="flex items-center justify-between my-4">
        <div className="flex gap-2 items-center">
          <SlLockOpen />
          <span>Limited access</span>
          <IoIosArrowDown />
          <span>TODO</span>
          <IoIosAddCircle className="text-3xl text-primaryColor" />
        </div>
        <div className="flex gap-2 items-center">
          <PiLinkSimpleLight className="text-xl text-primaryColor" />
          <PiRowsFill className="text-3xl text-primaryColor" />
          <CiGrid41 className="text-3xl text-primaryColor" />
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white">
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-primaryColor">
            <span>All Tasks</span>
            <div className="px-2 rounded-md bg-gray-100">23</div>
          </div>
          <div className="flex items-center gap-1">
            <span>To do</span>
            <div className="px-2 rounded-md bg-gray-100">3</div>
          </div>
          <div className="flex items-center gap-1">
            <span>In Progress</span>
            <div className="px-2 rounded-md bg-gray-100">6</div>
          </div>
          <div className="flex items-center gap-1">
            <span>Completed</span>
            <div className="px-2 rounded-md bg-gray-100">14</div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2 rounded-xl border px-3 py-1">
            <VscSettings className="text-2xl" />
            <div>Filter & Sort</div>
          </div>
          <div className="flex gap-2 rounded-xl border px-3 py-1">
            <IoMdAdd className="text-2xl" />
            <div>New Task</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
