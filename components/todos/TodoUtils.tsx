/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

export const UpdateEditingValues = (
  setEditingCategoryVal: (todoCategory: string) => void,
  setEditingTodoTitle: (todoTitle: string) => void,
  setEditingCost: (todoCost: string) => void,
  setEditingVendor: (todoVendor: string) => void,
  setEditingNote: (todoNote: string) => void,
  todoCategory: string,
  todoTitle: string,
  todoCost: string,
  todoVendor: string,
  todoNote: string
) => {
  // Editing Values change on prop change
  React.useEffect(() => {
    setEditingCategoryVal(todoCategory);
  }, [todoCategory]);

  React.useEffect(() => {
    setEditingTodoTitle(todoTitle);
  }, [todoTitle]);

  React.useEffect(() => {
    setEditingCost(todoCost);
  }, [todoCost]);

  React.useEffect(() => {
    setEditingVendor(todoVendor);
  }, [todoVendor]);

  React.useEffect(() => {
    setEditingNote(todoNote);
  }, [todoNote]);
};
