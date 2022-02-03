import React from "react";
import todoStyles from "@Styles/Todo.module.scss";
import { SingleTodo } from "../TodoTypes";
import EditingTodoInput from "./EditingTodoInput";
interface EditingTodoProps {
  handleEdit: () => void;
  handleDelete: () => void;
  handleClick: (e: any) => void;
  handleEditingCategoryVal: (e: any) => void;
  handleEditingTodoTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditingCost: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditingVendor: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditingNote: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  editingCategoryVal: string;
  editingTodoTitle: string;
  editingCost: string;
  editingVendor: string;
  editingNote: string;
  currCategory: string;
  todo: SingleTodo;
}
const EditingTodo: React.FC<EditingTodoProps> = (props) => {
  return (
    <div
      className={todoStyles.todoContainer}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <a
        onClick={props.handleEdit}
        className={`${todoStyles.todoEditLink} ${
          props.currCategory === "All" && todoStyles.todoEditLinkEditing
        }`}
      >
        Cancel
      </a>
      <form className={todoStyles.todoTitleContainer} onSubmit={props.handleClick}>
        <div className={todoStyles.costAndVendor}>
          {props.currCategory === "All" && (
            <EditingTodoInput
              editingVal={props.editingCategoryVal}
              handleChange={props.handleEditingCategoryVal}
              placeholder="Category"
            />
          )}
          <EditingTodoInput
            editingVal={props.editingTodoTitle}
            handleChange={props.handleEditingTodoTitle}
            placeholder="Title"
          />
        </div>
        <div className={todoStyles.costAndVendor}>
          <EditingTodoInput
            editingVal={props.editingCost}
            handleChange={props.handleEditingCost}
            placeholder="Cost"
          />
          <EditingTodoInput
            editingVal={props.editingVendor}
            handleChange={props.handleEditingVendor}
            placeholder="Vendor"
          />
        </div>
        <textarea
          className={`${todoStyles.todoEditInput} ${todoStyles.todoEditTextArea}`}
          value={props.editingNote}
          onChange={props.handleEditingNote}
        ></textarea>
        <input
          type="submit"
          className={`${todoStyles.todoEditInput} ${todoStyles.todoEditSubmit}`}
        />
      </form>
      <input
        type="button"
        className={todoStyles.todoDelete}
        onClick={props.handleDelete}
        value="delete"
      />
    </div>
  );
};

export default EditingTodo;
