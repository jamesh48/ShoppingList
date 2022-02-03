import React from "react";
import todoStyles from "@Styles/Todo.module.scss";
interface DisplayedEditButtonProps {
  handleEdit: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
const DisplayedEditButton: React.FC<DisplayedEditButtonProps> = (props) => {
  return (
    <a className={`${todoStyles.todoEditLink}`} onClick={props.handleEdit}>
      Edit
    </a>
  );
};

export default DisplayedEditButton;
