import React from "react";
import AvatarStack from "./AvatarStack";
import { MdMoreVert } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

interface TaskCardProps {
  title: string;
  subTitle: string;
  status: string;
  contributors: string[];
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  subTitle,
  contributors,
  status,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-500 bg-green-50 dark:bg-[#1d3621]";
      case "In progress":
        return "text-blue-500 bg-blue-50 dark:bg-[#1f213b]";
      case "To do":
        return "text-orange-500 bg-orange-50 dark:bg-[#4a371f]";
      default:
        return "text-orange-500 bg-orange-50 dark:bg-[#594123]";
    }
  };
  return (
    <div className="p-4 mx-4 h-fit bg-white dark:bg-darkComponent rounded-2xl my-3">
      <div className="flex items-center justify-between">
        <div
          className={`flex bg-orange-50 ${getStatusColor(
            status
          )} rounded-md px-2 items-center gap-2`}
        >
          {status}
        </div>
        <MdMoreVert className="text-xl text-gray-500" />
      </div>
      <span className="block text-xl mt-2 font-semibold dark:text-gray-200">
        {title}
      </span>
      <span className="block mb-3 text-sm text-gray-400 font-semibold">
        {subTitle}
      </span>
      <hr className="dark:border-gray-600" />
      <div className="flex items-center justify-between mt-3">
        <div className="flex justify-between items-center w-full">
          <AvatarStack maxVisible={3} images={contributors.slice(0, 3)} />
          <div className="flex items-center">
            <AiOutlineMessage className="text-xl text-gray-500 me-2" />
            <span className="text-gray-500">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
