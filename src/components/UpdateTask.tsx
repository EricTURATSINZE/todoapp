import React, { useEffect, useState } from "react";
import { useCreateTask, useUpdateTask } from "../store/api";
import { useDispatch, useSelector } from "react-redux";
import { addTask, AppState, setTasks } from "../store/appSlice";
import { on } from "events";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Task } from "../types/task";
import { RootState } from "../store";

interface UpdateTaskProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task;
}

const UpdateTask: React.FC<UpdateTaskProps> = ({ isOpen, onClose, task }) => {
  const [todo, setTodo] = useState("");
  const [completed, setCompleted] = useState(false);
  const updateMutation = useUpdateTask();
  const dispatch = useDispatch();
  const appState: AppState = useSelector((state: RootState) => state.app);
  const { t } = useTranslation();

  useEffect(() => {
    setTodo(task.todo);
    setCompleted(task.completed);
  }, []);

  if (!isOpen) return null;

  const handleUpdate = () => {
    var updatedTodo = {
      todo,
      completed,
      userId: 5,
    };
    updateMutation.mutate(
      { id: task.id, data: updatedTodo },
      {
        onSuccess: (data) => {
          var oldTasks = appState.tasks.slice();
          var index = oldTasks.findIndex((t) => t.id === task.id);
          oldTasks[index] = data;
          dispatch(setTasks(oldTasks));
          toast.success(`Task ${todo} updated successfully`, {
            position: "top-center",
            autoClose: 2000,
          });
          onClose();
        },
        onError: (error) => {
          console.error("Error updating task:", error);
          toast.error(`Error updating task ${todo}, please try again!`);
        },
      }
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg px-6 py-10 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-12 text-center">
          {t("updateTodo")}
        </h2>
        <label>{t("task")}</label>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder={t("enterYourTodo")}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-indigo-500"
        />
        <label>Status</label>
        <select
          name="completed"
          id="completed"
          value={`${completed}`}
          onChange={(e) => setCompleted(e.target.value === "true")}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-indigo-500"
        >
          <option value="false">{t("todo")}</option>
          <option value="true">{t("completed")}</option>
        </select>

        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={onClose}
            className="w-[30%] py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            {t("cancel")}
          </button>
          <button
            onClick={handleUpdate}
            className="w-[30%] py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {updateMutation.isPending ? t("saving") : t("save")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
