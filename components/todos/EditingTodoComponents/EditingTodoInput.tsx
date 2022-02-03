import React from "react";
import todoStyles from "@Styles/Todo.module.scss";

interface EditingTodoInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editingVal: string;
  placeholder: "Category" | "Title" | "Vendor" | "Cost" | "Note";
}

const EditingTodoInput: React.FC<EditingTodoInputProps> = (props) => (
  <input
    className={todoStyles.todoEditInput}
    type="text"
    value={props.editingVal}
    onChange={props.handleChange}
    placeholder={props.placeholder}
  />
);

export default EditingTodoInput;
