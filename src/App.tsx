import "./styles/App.scss";
import { Notes } from "./features/Notes/components/Notes";
import { Route, Routes } from "react-router-dom";
import { Login } from "./features/Login/Login";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
