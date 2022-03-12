import React from 'react';
import todoStyles from '@Styles/Todo.module.scss';
import { SingleTodo } from '../TodoTypes';
import DisplayedTodoDelete from './DisplayedTodoDelete';
import DisplayedTodoCheckbox from './DisplayedTodoCheckbox';
import DisplayedCostAndVendor from './DisplayedCostAndVendor';
import DisplayedNote from './DisplayedNote';
import DisplayedProduct from './DisplayedProduct';
import DisplayedCategory from './DisplayedCategory';
import DisplayedEditButton from './DisplayedEditButton';
import { DisplayTodoStyles } from './DisplayTodo.mui';
import { Box } from '@mui/material';
interface DisplayedTodoProps {
  currCategory: string;
  handleEdit: () => void;
  handleCheckboxUpdate: any;
  handleDelete: () => void;
  handleNoteRevealed: () => void;
  todo: SingleTodo;
  noteRevealed: boolean;
}
const DisplayedTodo = (props: DisplayedTodoProps) => {
  const todoContainer = React.useRef(null);
  return (
    <Box sx={DisplayTodoStyles.todoContainer} ref={todoContainer}>
      <DisplayedEditButton handleEdit={props.handleEdit} />
      <DisplayedTodoCheckbox
        handleCheckboxUpdate={props.handleCheckboxUpdate}
        checked={props.todo.checked}
      />

      <Box sx={DisplayTodoStyles.todoTitleContainer}>
        <DisplayedCategory
          currCategory={props.currCategory}
          category={props.todo.category}
        />
        <DisplayedProduct
          todoTitle={props.todo.todoTitle}
          link={props.todo.link}
        />
        <DisplayedCostAndVendor
          vendor={props.todo.vendor}
          cost={props.todo.cost}
        />
        <DisplayedNote
          note={props.todo.note}
          handleNoteRevealed={props.handleNoteRevealed}
          noteRevealed={props.noteRevealed}
        />
      </Box>
      <DisplayedTodoDelete handleDelete={props.handleDelete} />
    </Box>
  );
};

export default DisplayedTodo;
