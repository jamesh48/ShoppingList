import React from "react";
import axios from "axios";
import { SingleTodo } from "./TodoTypes";
import EditingTodo from "./EditingTodoComponents/EditingTodo";
import DisplayedTodo from "./DisplayedTodoComponents/DisplayedTodo";
import { UpdateEditingValues } from "./TodoUtils";

interface TodoProps {
  updateAllTodosCallback: (updatedTodos: SingleTodo[]) => void;
  updateTodoCallback: (updatedTodo: SingleTodo, index: number) => void;
  index: number;
  currCategory: string;
  todo: SingleTodo;
}

const Todo: React.FC<TodoProps> = (props) => {
  const [noteRevealed, setNoteRevealed] = React.useState(false);
  const [editing, setEditing] = React.useState(false);
  const [editingCost, setEditingCost] = React.useState(props.todo.cost);
  const [editingCategoryVal, setEditingCategoryVal] = React.useState(props.todo.category);
  const [editingTodoTitle, setEditingTodoTitle] = React.useState(props.todo.todoTitle);
  const [editingVendor, setEditingVendor] = React.useState(props.todo.vendor);
  const [editingNote, setEditingNote] = React.useState(props.todo.note);

  React.useEffect(() => {
    setEditing(false);
  }, [props.currCategory]);

  UpdateEditingValues(
    setEditingCategoryVal,
    setEditingTodoTitle,
    setEditingCost,
    setEditingVendor,
    setEditingNote,
    props.todo.category,
    props.todo.todoTitle,
    props.todo.cost,
    props.todo.vendor,
    props.todo.note
  );

  // Editing Values change on prop change
  React.useEffect(() => {
    setEditingNote(props.todo.note);
  }, [props.todo.note]);

  React.useEffect(() => {
    setEditingCategoryVal(props.todo.category);
  }, [props.todo.category]);

  const handleEditingVendor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingVendor(e.target.value);
  };

  const handleEditingCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingCost(e.target.value);
  };

  const handleEditingCategoryVal = (e: any) => {
    setEditingCategoryVal(e.target.value);
  };

  const handleEditingTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingTodoTitle(e.target.value);
  };

  const handleEditingNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditingNote(e.target.value);
  };

  const handleNoteRevealed = () => {
    setNoteRevealed((x) => !x);
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    const { data } = await axios({
      url: "/api/updateTodo",
      method: "POST",
      data: {
        id: props.todo.id,
        checked: e.target.checked,
        category: editingCategoryVal,
        todoTitle: editingTodoTitle,
        cost: editingCost,
        vendor: editingVendor,
        note: editingNote
      }
    });
    props.updateTodoCallback(data, props.todo.id);
    setEditing(false);
  };

  const handleDelete = async () => {
    const { data } = await axios({
      url: "/api/deleteTodo",
      method: "DELETE",
      data: { id: props.todo.id }
    });

    props.updateAllTodosCallback(data);
  };

  const handleEdit = () => {
    setEditing((x) => !x);
  };

  return editing ? (
    <EditingTodo
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleEditingCategoryVal={handleEditingCategoryVal}
      handleEditingTodoTitle={handleEditingTodoTitle}
      handleEditingCost={handleEditingCost}
      handleEditingVendor={handleEditingVendor}
      handleEditingNote={handleEditingNote}
      handleClick={handleClick}
      editingCategoryVal={editingCategoryVal}
      editingTodoTitle={editingTodoTitle}
      editingCost={editingCost}
      editingVendor={editingVendor}
      editingNote={editingNote}
      currCategory={props.currCategory}
      todo={props.todo}
    />
  ) : (
    <DisplayedTodo
      handleClick={handleClick}
      handleEdit={handleEdit}
      handleNoteRevealed={handleNoteRevealed}
      handleDelete={handleDelete}
      currCategory={props.currCategory}
      todo={props.todo}
      noteRevealed={noteRevealed}
    />
  );
};

export default Todo;
