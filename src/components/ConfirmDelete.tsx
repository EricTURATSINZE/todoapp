import React, { useState } from "react";
import { useCreateTask } from "../store/api";
import { useDispatch } from "react-redux";
import { addTask } from "../store/appSlice";
import deleteSvg from "../assets/delete.svg";
import { toast } from "react-toastify";

interface ConfirmDeleteProps {
  content: string;
  onDelete: Function;
  deleting: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({
  isOpen,
  onClose,
  content,
  onDelete,
  deleting,
}) => {
  const [todo, setTodo] = useState("");
  const createMutation = useCreateTask();
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleDelete = () => {
    onDelete();
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
        <h1 className="text-2xl font-bold mb-4 text-center">Confirm Delete</h1>
        <figure className="flex justify-center items-center">
          <img src={deleteSvg} alt="Delete" className="w-[13rem] h-[15rem]" />
        </figure>
        <div className="w-full text-center">
          <span>{content}</span>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={onClose}
            className="w-[30%] py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="w-[30%] py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
