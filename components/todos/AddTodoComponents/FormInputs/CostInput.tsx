import React from "react";
import todoStyles from "@Styles/Todo.module.scss";
import { CostInputProps } from "../AddTodoTypes";

const CostInput: React.FC<CostInputProps> = (props) => {
  return (
    <input
      className={todoStyles.addTodo}
      placeholder="Cost"
      type="text"
      value={props.costVal}
      onChange={props.handleCostChange}
    />
  );
};
export default CostInput;
