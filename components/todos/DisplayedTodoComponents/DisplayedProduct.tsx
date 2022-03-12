import React from 'react';
import todoStyles from '@Styles/Todo.module.scss';
import { Typography, Link } from '@mui/material';
import { DisplayTodoStyles } from './DisplayTodo.mui';

interface DisplayedProductProps {
  todoTitle: string;
  link: string;
}
const DisplayedProduct: React.FC<DisplayedProductProps> = (props) => {
  return props.link ? (
    <Link
      sx={DisplayTodoStyles.todoTitle}
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      {props.todoTitle}
    </Link>
  ) : (
    <Typography sx={DisplayTodoStyles.todoTitle}>{props.todoTitle}</Typography>
  );
};

export default DisplayedProduct;
