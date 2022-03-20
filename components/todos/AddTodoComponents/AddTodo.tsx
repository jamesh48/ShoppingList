import React, { useEffect } from 'react';
import todoStyles from '../../../styles/Todo.module.scss';
import { AddTodoProps } from './AddTodoTypes';
import CategoryInput from './FormInputs/CategoryInput';
import TodoInput from './FormInputs/TodoInput';
import CostInput from './FormInputs/CostInput';
import VendorInput from './FormInputs/VendorInput';
import LinkInput from './FormInputs/LinkInput';
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddTodoSchema = Yup.object().shape({
  category: Yup.string().required('Category is required'),
  todo: Yup.string().required('Todo is required'),
  vendor: Yup.string().required('Vendor is required'),
  cost: Yup.string(),
  link: Yup.string(),
  note: Yup.string(),
});

const AddTodo = (props: AddTodoProps): JSX.Element => {
  const [newTodoVal, setNewTodoVal] = React.useState('');
  const [categoryVal, setCategoryVal] = React.useState('');
  const [vendorVal, setVendorVal] = React.useState('');
  const [noteVal, setNoteVal] = React.useState('');
  const [costVal, setCostVal] = React.useState('');
  const [linkVal, setLinkVal] = React.useState('');

  const initialValues = {
    category: '',
    vendor: '',
    todo: '',
    note: '',
    cost: '',
    link: '',
  };

  React.useEffect(() => {
    if (props.currCategory.trim() !== 'All') {
      setCategoryVal(props.currCategory);
    } else {
      setCategoryVal('');
    }
  }, [props.currCategory]);

  const handleCostChange = (e: any) => {
    setCostVal(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (categoryVal.trim() !== '') {
      props.addNewTodoCallback({
        newTodoVal,
        categoryVal,
        costVal,
        vendorVal,
        linkVal,
        noteVal,
      });
      setNewTodoVal('');
      setCategoryVal('');
      setCostVal('');
      setLinkVal('');
      setVendorVal('');
      setNoteVal('');
    } else {
      alert('Please enter a category');
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: AddTodoSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit} className={todoStyles.addTodoForm}>
      <Box className={todoStyles.addTodoFormInputContainer}>
        <Box sx={{ display: 'flex' }}>
          <CategoryInput
            formik={formik}
            categorySuggestions={props.categories}
          />
          <TodoInput formik={formik} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <VendorInput formik={formik} vendorSuggestions={props.vendors} />
        <CostInput costVal={costVal} handleCostChange={handleCostChange} />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <LinkInput formik={formik} />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <TextField
          placeholder="Add Note..."
          name="note"
          onChange={formik.handleChange}
          value={formik.values.note}
          size="medium"
          rows={5}
          sx={{
            overflow: 'auto',
            fontSize: 'vmax',
            backgroundColor: 'ivory',
            flex: 1,
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          InputProps={{
            sx: {
              height: '100%',
              padding: '5px 10px',
            },
          }}
          multiline={true}
        ></TextField>
      </Box>
      ;
      <Box sx={{ display: 'flex' }}>
        <Button
          type="submit"
          sx={{
            flex: 1,
            backgroundColor: '#FFF',
            '&:hover': {
              backgroundColor: 'green',
              color: 'ivory',
            },
          }}
          disabled={!(formik.dirty && formik.isValid)}
          variant="outlined"
          className={todoStyles.submitButton}
        >
          Add Todo
        </Button>
      </Box>
    </form>
  );
};

export default AddTodo;
