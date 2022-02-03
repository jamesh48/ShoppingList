import React from "react";
import todoStyles from "@Styles/Todo.module.scss";

interface DisplayedTodoCheckboxProps {
  checked: boolean;
  handleClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const DisplayedTodoCheckbox: React.FC<DisplayedTodoCheckboxProps> = (props) => (
  <input
    type="checkbox"
    className={todoStyles.todoCheckbox}
    onClick={props.handleClick}
    onChange={() => {}}
    checked={props.checked}
  />
);

export default DisplayedTodoCheckbox;
