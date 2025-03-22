import "./styles/App.scss";
import { Notes } from "./features/Notes/components/Notes";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Notes />} />
      </Routes>
    </>
  );
};
