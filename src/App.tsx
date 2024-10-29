import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routes";
import './i18n';

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
