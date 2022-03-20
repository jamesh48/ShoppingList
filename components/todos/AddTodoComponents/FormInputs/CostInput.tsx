import React from 'react';
import todoStyles from '@Styles/Todo.module.scss';
import { CostInputProps } from '../AddTodoTypes';
import { TextField } from '@mui/material';

const CostInput: React.FC<CostInputProps> = (props) => {
  return (
    <TextField
      placeholder="Cost"
      type="text"
      value={props.costVal}
      onChange={props.handleCostChange}
      size="small"
      sx={{
        flex: 1,
        textAlign: 'center',
        outline: 'none',
        backgroundColor: '#FFF',
      }}
    />
  );
};
export default CostInput;
