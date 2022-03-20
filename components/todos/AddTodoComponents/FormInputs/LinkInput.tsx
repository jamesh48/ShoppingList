import React from 'react';
import todoStyles from '@Styles/Todo.module.scss';
import { LinkInputProps } from '../AddTodoTypes';
import { TextField } from '@mui/material';

const LinkInput: React.FC<LinkInputProps> = (props) => (
  <TextField
    sx={{
      flex: 1,
      outline: 'none',
      backgroundColor: '#FFF',
      textAlign: 'center',
    }}
    name="link"
    size="small"
    placeholder="Link (Opt.)"
    type="text"
    value={props.formik.values.link}
    onChange={props.formik.handleChange}
  />
);

export default LinkInput;
