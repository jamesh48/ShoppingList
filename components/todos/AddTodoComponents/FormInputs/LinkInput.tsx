import React from "react";
import todoStyles from "@Styles/Todo.module.scss";
import { LinkInputProps } from "../AddTodoTypes";

const LinkInput: React.FC<LinkInputProps> = (props) => {
  return (
    <input
      style={{ width: "100%" }}
      className={todoStyles.addTodo}
      placeholder="Link"
      type="text"
      value={props.linkVal}
      onChange={props.handleLinkChange}
    />
  );
};

export default LinkInput;
