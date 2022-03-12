import React from 'react';
import todoStyles from '@Styles/Todo.module.scss';
import { Box, Typography } from '@mui/material';
import { DisplayTodoStyles } from './DisplayTodo.mui';

interface DisplayedCostAndVendorProps {
  vendor: string;
  cost: string;
}
const DisplayedCostAndVendor: React.FC<DisplayedCostAndVendorProps> = (
  props
) => {
  return (
    <Box sx={DisplayTodoStyles.costAndVendor}>
      {props.vendor && (
        <Typography sx={DisplayTodoStyles.todoTitle}>{props.vendor}</Typography>
      )}
      {props.vendor && (
        <Typography sx={DisplayTodoStyles.todoTitle}>/</Typography>
      )}
      {props.cost && (
        <Typography sx={DisplayTodoStyles.todoTitle}>{props.cost}</Typography>
      )}
    </Box>
  );
};

export default DisplayedCostAndVendor;
