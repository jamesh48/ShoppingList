import React from "react";
import todoStyles from "@Styles/Todo.module.scss";

interface DisplayedTodoDeleteProps {
  handleDelete: () => void;
}

const DisplayedTodoDelete: React.FC<DisplayedTodoDeleteProps> = (props) => {
  return (
    <input
      type="button"
      className={todoStyles.todoDelete}
      onClick={props.handleDelete}
      value="delete"
    />
  );
};

export default DisplayedTodoDelete;
