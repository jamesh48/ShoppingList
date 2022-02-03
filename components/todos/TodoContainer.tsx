import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodoComponents/AddTodo";
import todoStyles from "@Styles/Todo.module.scss";
import { SingleTodo } from "./TodoTypes";
import axios from "axios";
import CategoryTab from "./CategoryTab";
import RunningTotal from "components/RunningTotal/RunningTotal";

const TodoContainer: React.FC<{}> = () => {
  const [todos, setTodos] = React.useState<SingleTodo[]>([]);
  const [displayedTodos, setDisplayedTodos] = React.useState<SingleTodo[]>([]);
  const [categories, setCategories] = React.useState(["All"]);
  const [currCategory, setCurrCategory] = React.useState("All");

  React.useEffect(() => {
    if (currCategory !== "All") {
      const filteredTodos = todos.filter((x) => x.category === currCategory);
      console.log(filteredTodos.length);
      setDisplayedTodos(filteredTodos);
    } else {
      setDisplayedTodos(todos);
    }
  }, [todos, currCategory]);

  React.useEffect(() => {
    const resultCategories = todos
      .map((x: SingleTodo) => {
        return x.category;
      })
      .filter((x: string, i: number, a: string[]) => a.indexOf(x) === i);
    setCategories(["All", ...resultCategories]);
  }, [todos]);

  React.useEffect(() => {
    const getTodos = async () => {
      const { data } = await axios({ method: "GET", url: "/api/getAllTodos" });
      setTodos(data);
    };
    getTodos();
  }, []);

  const addNewTodoCallback = async (
    newTitle: string,
    categoryVal: string,
    costVal: string,
    vendorVal: string,
    linkVal: string,
    noteVal: string
  ) => {
    console.log("linkVal:", linkVal);
    console.log("noteVal:", noteVal);
    const { data } = await axios({
      url: "/api/createTodo",
      method: "POST",
      data: {
        newTitle,
        categoryVal,
        noteVal,
        costVal,
        vendorVal,
        linkVal,
        checked: false
      }
    });

    let prevTodos = todos.slice();
    prevTodos.push(data);

    setTodos(prevTodos);
  };

  const updateTodoCallback = (updatedTodo: SingleTodo, todoId: number) => {
    let prevTodos = todos.slice();
    for (let i = 0; i < prevTodos.length; i++) {
      if (prevTodos[i].id === todoId) {
        prevTodos.splice(i, 1, updatedTodo);
      }
    }
    setTodos(prevTodos);
  };

  const updateAllTodosCallback = (updatedTodos: SingleTodo[]) => {
    setTodos(updatedTodos);
  };

  const categoryCallback = (category: string) => {
    setCurrCategory(category);
  };

  return (
    <div className={todoStyles.parentContainer}>
      <h1 className={todoStyles.todoHeader}>Shopping List</h1>
      <div className={todoStyles.categoryTabContainer}>
        {categories.map((category, index) => {
          return (
            <CategoryTab
              key={index}
              category={category}
              categoryCallback={categoryCallback}
            />
          );
        })}
      </div>
      <RunningTotal
        checkedTodos={todos.reduce<{ cost: string }[]>(
          (checkedTodos, { checked, cost }) => {
            if (checked === true) {
              checkedTodos.push({ cost });
            }
            return checkedTodos;
          },
          []
        )}
      />
      <div className={todoStyles.todosMain}>
        <div className={`${todoStyles.todosContainer} ${todos.some((x) => x.checked) && todoStyles.todosContainerReduced}`}>
          {displayedTodos.map((todo, index) => (
            <Todo
              key={index}
              currCategory={currCategory}
              index={index}
              todo={todo}
              updateTodoCallback={updateTodoCallback}
              updateAllTodosCallback={updateAllTodosCallback}
            />
          ))}
        </div>
        <AddTodo
          addNewTodoCallback={addNewTodoCallback}
          currCategory={currCategory}
          categories={categories}
          vendors={todos.map((x) => x.vendor).filter((x, i, a) => a.indexOf(x) === i)}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
