import React, { useState } from "react";
import { useCreateTask } from "../store/api";
import { useDispatch } from "react-redux";
import { addTask } from "../store/appSlice";
import { on } from "events";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

interface NewTaskProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewTask: React.FC<NewTaskProps> = ({ isOpen, onClose }) => {
  const [todo, setTodo] = useState("");
  const createMutation = useCreateTask();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleSave = () => {
    var newTodo = {
      todo,
      completed: false,
      userId: 5,
    };
    createMutation.mutate(newTodo, {
      onSuccess: (data) => {
        dispatch(addTask(data));
        toast.success(`Task ${todo} created successfully`, {
          position: "top-center",
          autoClose: 2000,
        });
        onClose();
      },
      onError: (error) => {
        console.error("Error creating task:", error);
        toast.error(`Error creating task ${todo}, please try again!`);
      },
    });
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
          {t("createNewTodo")}
        </h2>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder={t("enterYourTodo")}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-indigo-500"
        />

        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={onClose}
            className="w-[30%] py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            {t("cancel")}
          </button>
          <button
            onClick={handleSave}
            className="w-[30%] py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {createMutation.isPending ? t("saving") : t("save")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
