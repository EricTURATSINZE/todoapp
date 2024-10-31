import { useMutation, useQuery } from "@tanstack/react-query";
import HttpRequest from "../utils/HttpRequest";

const fetchData = async () => {
  return await HttpRequest.get("https://dummyjson.com/todos");
};

const createTask = async (data: any) => {
  return await HttpRequest.post("https://dummyjson.com/todos/add", data);
};

const updateTask = async ({id, data}: {data: any, id: number}) => {
  return await HttpRequest.update(`https://dummyjson.com/todos/${id}`, data);
};

const deleteTask = async (id: number) => {
  return await HttpRequest.delete(`https://dummyjson.com/todos/${id}`);
};

export const useFetchData = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchData,
  });
};

export const useCreateTask = () => {
  return useMutation({
    mutationFn: createTask,
  });
};

export const useUpdateTask = () => {
  return useMutation({
    mutationFn: updateTask,
  });
};

export const useDeleteTask = () => {
  return useMutation({ mutationFn: deleteTask });
};
