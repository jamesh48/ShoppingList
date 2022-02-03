import React from "react";
import todoStyles from "@Styles/Todo.module.scss";

interface DisplayedCategoryProps {
  currCategory: string;
  category: string;
}
const DisplayedCategory: React.FC<DisplayedCategoryProps> = (props) => {
  return props.currCategory === "All" ? (
    <h5 className={todoStyles.todoTitle}>{props.category}:</h5>
  ) : null;
};

export default DisplayedCategory;
