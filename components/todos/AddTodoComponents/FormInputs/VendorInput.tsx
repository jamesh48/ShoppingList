import React from "react";
import todoStyles from "@Styles/Todo.module.scss";
import { VendorInputProps } from "../AddTodoTypes";

const VendorInput: React.FC<VendorInputProps> = (props) => {
  return (
    <input
      onFocus={() => props.handleSetSuggestions(true)}
      onBlur={(e) => {
        if (e.relatedTarget || props.noSuggestionsAvailable.current) {
          props.handleSetSuggestions(false);
        }
      }}
      className={todoStyles.addTodo}
      placeholder="Vendor"
      type="text"
      value={props.vendorVal}
      onKeyDown={props.handleKeyDown}
      onChange={props.handleVendorChange}
    />
  );
};
export default VendorInput;
