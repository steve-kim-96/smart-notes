import { mockNotes } from "./assets/mockNotes";
import "./styles/App.scss";
import { Note } from "./features/Notes/components/Note/Note";

export const App = () => {
  return (
    <div className="App">
      {mockNotes.map((note) => {
        return <Note {...note} />;
      })}
    </div>
  );
};
