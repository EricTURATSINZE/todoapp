import React, { useEffect, useRef, useState } from "react";
import AvatarStack from "./AvatarStack";
import { MdMoreVert, MdEdit, MdDelete } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import ConfirmDelete from "./ConfirmDelete";
import { useDeleteTask } from "../store/api";
import { Task } from "../types/task";
import { useDispatch, useSelector } from "react-redux";
import { AppState, setTasks } from "../store/appSlice";
import { RootState } from "../store";
import { toast } from "react-toastify";
import UpdateTask from "./UpdateTask";

interface TaskCardProps {
  title: string;
  task: Task;
  status: string;
  contributors: string[];
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  task,
  contributors,
  status,
}) => {
  const [anchorEl, setAnchorEl] = useState<SVGElement | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [updateTask, setUpdateTask] = useState<boolean>(false);
  const deleteMutation = useDeleteTask();
  const appState: AppState = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const toggleMenu = (event: React.MouseEvent<SVGElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const closeMenu = () => setAnchorEl(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const deleteTaskHandler = () => {
    deleteMutation.mutate(task.id, {
      onSuccess: (data) => {
        // remove task with id
        var newTasks = appState.tasks.filter((element: Task) => element.id !== task.id);
        dispatch(setTasks(newTasks));
        toast.success(`Task deleted successfully`, {
          position: "top-center",
          autoClose: 2000,
        });
        setConfirmDelete(false);
      },
      onError: (error) => {
        toast.error(`Error deleting task, please try again!`);
      },
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
      case "Terminé":
        return "text-green-500 bg-green-50 dark:bg-[#1d3621]";
      case "In progress":
      case "En cours":
        return "text-blue-500 bg-blue-50 dark:bg-[#1f213b]";
      case "To do":
      case "À faire":
        return "text-orange-500 bg-orange-50 dark:bg-[#4a371f]";
      default:
        return "text-orange-500 bg-orange-50 dark:bg-[#594123]";
    }
  };

  return (
    <>
      <div className="p-4 mx-4 h-fit bg-white dark:bg-darkComponent rounded-2xl my-3">
        <div className="flex items-center justify-between">
          <div
            className={`flex bg-orange-50 ${getStatusColor(
              status
            )} rounded-md px-2 items-center gap-2`}
          >
            {status}
          </div>
          <MdMoreVert
            className="cursor-pointer text-xl text-gray-500"
            onClick={toggleMenu}
          />
          {anchorEl && (
            <div
              ref={menuRef}
              className="absolute bg-white dark:bg-darkComponent shadow-lg rounded-md w-32"
              style={{
                top: anchorEl.getBoundingClientRect().bottom + window.scrollY,
                left:
                  anchorEl.getBoundingClientRect().left - 100 + window.scrollX,
              }}
            >
              <button
                className="flex items-center px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => {
                  setUpdateTask(true);
                  closeMenu();
                }}
              >
                <MdEdit className="mr-2 text-gray-600 dark:text-gray-300" />
                <span>Update</span>
              </button>
              <button
                className="flex items-center px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => {
                  setConfirmDelete(true);
                  closeMenu();
                }}
              >
                <MdDelete className="mr-2 text-red-600" />
                <span>Delete</span>
              </button>
            </div>
          )}
        </div>
        <span className="block text-xl mt-2 font-semibold dark:text-gray-200">
          {title}
        </span>
        <span className="block mb-3 text-sm text-gray-400 font-semibold">
          {task.todo}
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
      {confirmDelete && (
        <ConfirmDelete
          content={`Delete task "${task.todo}" ?`}
          onDelete={deleteTaskHandler}
          deleting={deleteMutation.isPending}
          isOpen={confirmDelete}
          onClose={() => setConfirmDelete(false)}
        />
      )}
      {updateTask && (
        <UpdateTask
          task={task}
          isOpen={updateTask}
          onClose={() => setUpdateTask(false)}
        />
      )}
    </>
  );
};

export default TaskCard;
