import "../../../../styles/Note.scss";

type Props = { id: string; title: string; description: string; author: string };

export const Note = ({ id, title, description, author }: Props) => {
  return (
    <div key={id} data-test-id={id} className="note-card">
      <span className="note-title">{title}</span>
      <span className="note-description">{description}</span>
      <span>Author: {author}</span>
    </div>
  );
};
