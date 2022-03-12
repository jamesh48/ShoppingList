import React from 'react';
import todoStyles from '@Styles/Todo.module.scss';
import { Button } from '@mui/material';
interface DisplayedTodoDeleteProps {
  handleDelete: () => void;
}

const DisplayedTodoDelete: React.FC<DisplayedTodoDeleteProps> = (props) => {
  return (
    <Button variant="outlined" onClick={props.handleDelete} color="error">
      delete
    </Button>
  );
};

export default DisplayedTodoDelete;
