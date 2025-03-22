import { mockNotes } from "../../../assets/mockNotes";
import { Note } from "./Note/Note";
import "../../../styles/Notes.scss";

export const Notes = () => {
  return (
    <div className="notes-container">
      {mockNotes.map((note) => {
        return <Note {...note} />;
      })}
    </div>
  );
};
