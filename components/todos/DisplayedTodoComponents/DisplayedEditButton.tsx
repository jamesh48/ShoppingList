import React from 'react';
import { Link } from '@mui/material';
import { DisplayTodoStyles } from './DisplayTodo.mui';
interface DisplayedEditButtonProps {
  handleEdit: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
const DisplayedEditButton = (props: DisplayedEditButtonProps): JSX.Element => {
  return (
    <Link sx={{ ...DisplayTodoStyles.todoEditLink }} onClick={props.handleEdit}>
      Edit
    </Link>
  );
};

export default DisplayedEditButton;
