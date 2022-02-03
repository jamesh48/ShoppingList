import React from "react";
import todoStyles from "@Styles/Todo.module.scss";
import { SingleTodo } from "../TodoTypes";
import DisplayedTodoDelete from "./DisplayedTodoDelete";
import DisplayedTodoCheckbox from "./DisplayedTodoCheckbox";
import DisplayedCostAndVendor from "./DisplayedCostAndVendor";
import DisplayedNote from "./DisplayedNote";
import DisplayedProduct from "./DisplayedProduct";
import DisplayedCategory from "./DisplayedCategory";
import DisplayedEditButton from "./DisplayedEditButton";

interface DisplayedTodoProps {
  currCategory: string;
  handleEdit: () => void;
  handleClick: (e: any) => Promise<void>;
  handleDelete: () => void;
  handleNoteRevealed: () => void;
  todo: SingleTodo;
  noteRevealed: boolean;
}
const DisplayedTodo: React.FC<DisplayedTodoProps> = (props) => {
  const todoContainer = React.useRef(null);
  return (
    <div className={todoStyles.todoContainer} ref={todoContainer}>
      <DisplayedEditButton handleEdit={props.handleEdit} />
      <DisplayedTodoCheckbox
        handleClick={props.handleClick}
        checked={props.todo.checked}
      />

      <div className={todoStyles.todoTitleContainer}>
        <DisplayedCategory
          currCategory={props.currCategory}
          category={props.todo.category}
        />
        <DisplayedProduct todoTitle={props.todo.todoTitle} link={props.todo.link} />
        <DisplayedCostAndVendor vendor={props.todo.vendor} cost={props.todo.cost} />
        <DisplayedNote
          note={props.todo.note}
          handleNoteRevealed={props.handleNoteRevealed}
          noteRevealed={props.noteRevealed}
        />
      </div>
      <DisplayedTodoDelete handleDelete={props.handleDelete} />
    </div>
  );
};

export default DisplayedTodo;
