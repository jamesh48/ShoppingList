import React from "react";
import todoStyles from "../../../styles/Todo.module.scss";
import { AddTodoProps } from "./AddTodoTypes";
import CategoryInput from "./FormInputs/CategoryInput";
import TodoInput from "./FormInputs/TodoInput";
import CostInput from "./FormInputs/CostInput";
import VendorInput from "./FormInputs/VendorInput";
import LinkInput from "./FormInputs/LinkInput";
import SuggestionsList from "./SuggestionsList";

const AddTodo: React.FC<AddTodoProps> = (props) => {
  const [newTodoVal, setNewTodoVal] = React.useState("");
  const [categoryVal, setCategoryVal] = React.useState("");
  const [noteVal, setNoteVal] = React.useState("");
  const [costVal, setCostVal] = React.useState("");
  const [vendorVal, setVendorVal] = React.useState("");
  const [linkVal, setLinkVal] = React.useState("");

  const noCategorySuggestionsAvailable = React.useRef(null);
  const noVendorSuggestionsAvailable = React.useRef(null);
  // Autocomplete- Category
  const [activeCategorySuggestion, setActiveCategorySuggestion] = React.useState(0);
  const [filteredCategorySuggestions, setFilteredCategorySuggestions] = React.useState([
    ""
  ]);
  const [showCategorySuggestions, setShowCategorySuggestions] = React.useState(false);

  // Autocomplete- Vendor
  const [activeVendorSuggestion, setActiveVendorSuggestion] = React.useState(0);
  const [filteredVendorSuggestions, setFilteredVendorSuggestions] = React.useState([""]);
  const [showVendorSuggestions, setShowVendorSuggestions] = React.useState(false);

  React.useEffect(() => {
    if (props.currCategory.trim() !== "All") {
      setCategoryVal(props.currCategory);
    } else {
      setCategoryVal("");
    }
  }, [props.currCategory]);

  const handleTodoChange = (e: any) => {
    setNewTodoVal(e.target.value);
  };

  const handleCostChange = (e: any) => {
    setCostVal(e.target.value);
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkVal(e.target.value);
  };

  const handleNoteChange = (e: any) => {
    setNoteVal(e.target.value);
  };

  const handleVendorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    const filteredSuggestions = props.vendors.filter(
      (vendor) => vendor.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setActiveVendorSuggestion(0);
    setFilteredVendorSuggestions(filteredSuggestions);
    setShowVendorSuggestions(true);
    setVendorVal(userInput);
  };

  const handleCategoryChange = (e: any) => {
    const userInput = e.currentTarget.value;
    const filteredSuggestions = props.categories.filter(
      (category) => category.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setActiveCategorySuggestion(0);
    setFilteredCategorySuggestions(filteredSuggestions);
    setShowCategorySuggestions(true);
    setCategoryVal(userInput);
  };

  const handleVendorKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      setActiveVendorSuggestion(0);
      setShowVendorSuggestions(false);
      setVendorVal(filteredVendorSuggestions[activeVendorSuggestion]);
    } else if (e.keyCode === 38) {
      if (activeVendorSuggestion === 0) {
        return;
      }
      setActiveVendorSuggestion((x) => x - 1);
    } else if (e.keyCode === 40) {
      if (activeVendorSuggestion - 1 === filteredVendorSuggestions.length) {
        return;
      }
      setActiveVendorSuggestion((x) => x + 1);
    }
  };

  const handleCategoryKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      setActiveCategorySuggestion(0);
      setShowCategorySuggestions(false);
      setCategoryVal(filteredCategorySuggestions[activeCategorySuggestion]);
    } else if (e.keyCode === 38) {
      if (activeCategorySuggestion === 0) {
        return;
      }
      setActiveCategorySuggestion((x) => x - 1);
    } else if (e.keyCode === 40) {
      if (activeCategorySuggestion - 1 === filteredCategorySuggestions.length) {
        return;
      }
      setActiveCategorySuggestion((x) => x + 1);
    }
  };

  const handleSetCategorySuggestions = (indicator: boolean) => {
    setShowCategorySuggestions(indicator);
  };

  const handleSetVendorSuggestions = (indicator: boolean) => {
    setShowVendorSuggestions(indicator);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (categoryVal.trim() !== "") {
      props.addNewTodoCallback(
        newTodoVal,
        categoryVal,
        costVal,
        vendorVal,
        linkVal,
        noteVal
      );
      setNewTodoVal("");
      setCategoryVal("");
      setCostVal("");
      setLinkVal("");
      setVendorVal("");
      setNoteVal("");
    } else {
      alert("Please enter a category");
    }
  };

  const handleCategorySuggestionClick = (e: any) => {
    setShowCategorySuggestions(false);
    setActiveCategorySuggestion(0);
    setFilteredCategorySuggestions([]);
    setCategoryVal(e.currentTarget.innerText);
  };

  const handleVendorSuggestionClick = (e: any) => {
    setShowVendorSuggestions(false);
    setActiveVendorSuggestion(0);
    setFilteredVendorSuggestions([]);
    setVendorVal(e.currentTarget.innerText);
  };

  return (
    <form onSubmit={handleSubmit} className={todoStyles.addTodoForm}>
      <div className={todoStyles.addTodoFormInputContainer}>
        <CategoryInput
          handleCategoryChange={handleCategoryChange}
          handleKeyDown={handleCategoryKeyDown}
          handleSetSuggestions={handleSetCategorySuggestions}
          categoryVal={categoryVal}
          noSuggestionsAvailable={noCategorySuggestionsAvailable}
        />
        <SuggestionsList
          handleClick={handleCategorySuggestionClick}
          showSuggestions={showCategorySuggestions}
          itemValue={categoryVal}
          filteredSuggestions={filteredCategorySuggestions}
          activeSuggestion={activeCategorySuggestion}
          noSuggestionsAvailable={noCategorySuggestionsAvailable}
        />
        <TodoInput newTodoVal={newTodoVal} handleTodoChange={handleTodoChange} />
        <VendorInput
          vendorVal={vendorVal}
          handleVendorChange={handleVendorChange}
          handleSetSuggestions={handleSetVendorSuggestions}
          handleKeyDown={handleVendorKeyDown}
          noSuggestionsAvailable={noVendorSuggestionsAvailable}
        />
        <SuggestionsList
          handleClick={handleVendorSuggestionClick}
          showSuggestions={showVendorSuggestions}
          itemValue={vendorVal}
          filteredSuggestions={filteredVendorSuggestions}
          activeSuggestion={activeVendorSuggestion}
          noSuggestionsAvailable={noVendorSuggestionsAvailable}
        />
        <CostInput costVal={costVal} handleCostChange={handleCostChange} />
        <LinkInput linkVal={linkVal} handleLinkChange={handleLinkChange} />
      </div>
      <textarea
        className={todoStyles.addNote}
        placeholder="Add Note..."
        onChange={handleNoteChange}
        value={noteVal}
      ></textarea>
      <input type="submit" className={todoStyles.submitButton}></input>
    </form>
  );
};

export default AddTodo;
