import React from "react";
import todoStyles from "@Styles/Todo.module.scss";

interface DisplayedProductProps {
  todoTitle: string;
  link: string;
}
const DisplayedProduct: React.FC<DisplayedProductProps> = (props) => {
  return props.link ? (
    <a
      className={`${todoStyles.todoTitle} ${todoStyles.todoTitleLink}`}
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      {props.todoTitle}
    </a>
  ) : (
    <p className={`${todoStyles.todoTitle}`}>
      {props.todoTitle}
    </p>
  );
};

export default DisplayedProduct;
