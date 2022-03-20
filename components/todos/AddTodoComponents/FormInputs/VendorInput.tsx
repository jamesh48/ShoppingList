import React from 'react';
import todoStyles from '@Styles/Todo.module.scss';
import { VendorInputProps } from '../AddTodoTypes';
import { Autocomplete, TextField } from '@mui/material';

const VendorInput = (props: VendorInputProps): JSX.Element => (
  <Autocomplete
    options={props.vendorSuggestions}
    popupIcon={null}
    disableClearable={true}
    className={todoStyles.addTodo}
    size="small"
    sx={{ flex: 1 }}
    value={props.formik.values.vendor}
    onChange={(_e, value) => props.formik.setFieldValue('vendor', value)}
    isOptionEqualToValue={(option, value) => {
      return option.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }}
    renderInput={(params) => {
      return (
        <TextField
          {...params}
          placeholder="Vendor"
          name="vendor"
          value={props.formik.values.vendor}
          onChange={props.formik.handleChange}
          sx={{
            textAlign: 'center',
            outline: 'none',
            backgroundColor: '#FFF',
          }}
        ></TextField>
      );
    }}
  />
);

export default VendorInput;
