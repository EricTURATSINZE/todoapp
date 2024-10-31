import { render, screen } from "@testing-library/react";
import store from "../store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
// import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

describe("Application UI", () => {
  it("Application starts and renders dashboard page", async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Dashboard />
            {/* <ToastContainer autoClose={1000} closeOnClick /> */}
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    );

    expect(await screen.findByText("Dashboard")).toBeInTheDocument();
  });
});
