import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Messages from "../pages/Messages";
import Tasks from "../pages/TodoList";
import Overview from "../pages/Overview";
import Files from "../pages/Files";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/files" element={<Files />} />
      <Route path="/" element={<Tasks />} />
      <Route path="/overview" element={<Overview />} />
    </Routes>
  );
};

export default MainRouter;
