import React from "react";
import todoStyles from "@Styles/Todo.module.scss";
import { CategoryInputProps } from "../AddTodoTypes";

const CategoryInput: React.FC<CategoryInputProps> = (props) => {
  return (
    <input
      onFocus={() => props.handleSetSuggestions(true)}
      onBlur={(e) => {
        if (e.relatedTarget || props.noSuggestionsAvailable.current) {
          props.handleSetSuggestions(false);
        }
      }}
      className={todoStyles.addTodo}
      type="text"
      placeholder="Category"
      onKeyDown={props.handleKeyDown}
      onChange={props.handleCategoryChange}
      value={props.categoryVal}
    />
  );
};

export default CategoryInput;
