import React from "react";
import todoStyles from "@Styles/Todo.module.scss";
interface TodoInputProps {
  newTodoVal: string;
  handleTodoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TodoInput: React.FC<TodoInputProps> = (props) => {
  return (
    <input
      className={todoStyles.addTodo}
      type="text"
      placeholder="Add Todo"
      onChange={props.handleTodoChange}
      value={props.newTodoVal}
    />
  );
};

export default TodoInput;