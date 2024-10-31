import { useFetchData } from "../store/api";
import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import store from "../store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

const mockUseFetchData = useFetchData as jest.Mock;

// Mock fetchTodos API call
jest.mock("../store/api");

describe("Todo List Component", () => {
  // it("renders a list of todos", async () => {
  //   mockUseFetchData.mockReturnValue({
  //     data: [
  //       {
  //         id: 1,
  //         todo: "Test To Do",
  //         completed: false,
  //         userId: 5,
  //       },
  //     ],
  //     error: null,
  //     isLoading: false,
  //   });
  //   render(
  //     <Provider store={store}>
  //   <QueryClientProvider client={queryClient}>
  //     <BrowserRouter>
  //       <TodoList />
  //       <ToastContainer autoClose={1000} closeOnClick />
  //     </BrowserRouter>
  //   </QueryClientProvider>
  // </Provider>
  //   );
  //   expect(screen.getByText("Test Todo")).toBeInTheDocument();
  // });
});
