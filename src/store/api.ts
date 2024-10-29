import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async () => {
  const response = await axios.get("https://dummyjson.com/todos"); // Replace with your endpoint
  return response.data;
};

export const useFetchData = () => {
  return useQuery(
    {
      queryKey: ["tasks"],
      queryFn: fetchData,
    },
  );
};
