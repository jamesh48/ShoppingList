import React from 'react';
import { CategoryInputProps } from '../AddTodoTypes';
import { Autocomplete, TextField } from '@mui/material';

const CategoryInput = (props: CategoryInputProps): JSX.Element => (
  <Autocomplete
    options={props.categorySuggestions}
    disableClearable={true}
    popupIcon={null}
    size="small"
    value={props.formik.values.category}
    sx={{ flex: 1 }}
    onChange={(e, value) => props.formik.setFieldValue('category', value)}
    isOptionEqualToValue={(option, value) => {
      return option.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }}
    renderInput={(params) => {
      return (
        <>
          <TextField
            {...params}
            name="category"
            placeholder="Category"
            onChange={props.formik.handleChange}
            value={props.formik.values.category}
            sx={{
              textAlign: 'center',
              outline: 'none',
              backgroundColor: '#FFF',
            }}
          ></TextField>
        </>
      );
    }}
  />
);

export default CategoryInput;
