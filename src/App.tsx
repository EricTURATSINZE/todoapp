import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routes";
import './i18n';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
      <ToastContainer autoClose={1000} closeOnClick />
    </BrowserRouter>
  );
}

export default App;
