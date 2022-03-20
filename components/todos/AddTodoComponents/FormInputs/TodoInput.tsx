import React from 'react';
import todoStyles from '@Styles/Todo.module.scss';
import { TextField } from '@mui/material';
import { FormikConfig, FormikProps } from 'formik';
interface TodoInputProps {
  formik: FormikProps<{
    category: string;
    vendor: string;
    todo: string;
    note: string;
    cost: string;
    link: string;
  }>;
}
const TodoInput: React.FC<TodoInputProps> = (props) => (
  <TextField
    className={todoStyles.addTodo}
    sx={{
      textAlign: 'center',
      flex: 1,
      outline: 'none',
      backgroundColor: '#FFF',
    }}
    name="todo"
    placeholder="Add Todo"
    size="small"
    onChange={props.formik.handleChange}
    value={props.formik.values.todo}
  />
);

export default TodoInput;
