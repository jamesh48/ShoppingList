import React from 'react';
import todoStyles from '@Styles/Todo.module.scss';
import { Typography } from '@mui/material';
import { DisplayTodoStyles } from './DisplayTodo.mui';

interface DisplayedCategoryProps {
  currCategory: string;
  category: string;
}
const DisplayedCategory = (props: DisplayedCategoryProps): JSX.Element | null => {
  return props.currCategory === 'All' ? (
    <Typography
      sx={DisplayTodoStyles.todoTitle}
    >{`${props.category}:`}</Typography>
  ) : null;
};

export default DisplayedCategory;
