import React from "react";
import todoStyles from "@Styles/Todo.module.scss";
interface DisplayedNoteProps {
  note: string;
  noteRevealed: boolean;
  handleNoteRevealed: (e: React.MouseEvent<HTMLParagraphElement>) => void;
}

const DisplayedNote: React.FC<DisplayedNoteProps> = (props) => {
  return props.noteRevealed ? (
    <p className={todoStyles.todoNote} onClick={props.handleNoteRevealed}>
      {props.note}
    </p>
  ) : props.note ? (
    <p
      className={`${todoStyles.todoNote} ${todoStyles.invisibleNote}`}
      onClick={props.handleNoteRevealed}
    ></p>
  ) : null;
};

export default DisplayedNote;
