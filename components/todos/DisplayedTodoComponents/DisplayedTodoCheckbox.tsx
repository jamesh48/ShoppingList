import React from 'react';
import todoStyles from '@Styles/Todo.module.scss';
import { Checkbox } from '@mui/material';

interface DisplayedTodoCheckboxProps {
  checked: boolean;
  handleCheckboxUpdate: any;
}

const DisplayedTodoCheckbox: React.FC<DisplayedTodoCheckboxProps> = (props) => (
  <Checkbox
    onClick={() => props.handleCheckboxUpdate(!props.checked)}
    onChange={() => {}}
    checked={props.checked}
  />
);

export default DisplayedTodoCheckbox;
