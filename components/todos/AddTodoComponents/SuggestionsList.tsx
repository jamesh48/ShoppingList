import React from "react";
import { SuggestionsListProps } from "./AddTodoTypes";
import todoStyles from "../../../styles/Todo.module.scss";
const SuggestionsList: React.FC<SuggestionsListProps> = (props) => {
  if (props.showSuggestions && props.itemValue) {
    if (props.filteredSuggestions.length) {
      return (
        <ul className={todoStyles.suggestions}>
          {props.filteredSuggestions.map((suggestion, index) => {
            let className;
            // Flag the active suggestion with a class
            if (index === props.activeSuggestion) {
              className = todoStyles.suggestionActive;
            }
            return (
              <li className={className} key={suggestion} onClick={props.handleClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <div className={todoStyles.noSuggestions} ref={props.noSuggestionsAvailable}>
          <em>No suggestions available.</em>
        </div>
      );
    }
  } else {
    return null;
  }
};

export default SuggestionsList;
