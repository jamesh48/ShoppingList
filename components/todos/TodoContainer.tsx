import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodoComponents/AddTodo';
import todoStyles from '@Styles/Todo.module.scss';
import { SingleTodo } from './TodoTypes';
import axios from 'axios';
import CategoryTab from './CategoryTab';
import RunningTotal from 'components/RunningTotal/RunningTotal';
import {
  Mutation,
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';

const TodoContainer = (): JSX.Element => {
  const queryClient = useQueryClient();

  const getTodos = async () => {
    const { data } = await axios({ url: '/api/getAllTodos' });
    return data;
  };

  const postTodo = useMutation(
    async ({
      newTodoVal: newTitle,
      categoryVal,
      costVal,
      vendorVal,
      linkVal,
      noteVal,
    }: {
      newTodoVal: string;
      categoryVal: string;
      costVal: string;
      vendorVal: string;
      linkVal: string;
      noteVal: string;
    }) => {
      await axios({
        url: '/api/createTodo',
        method: 'POST',
        data: {
          newTitle,
          categoryVal,
          noteVal,
          costVal,
          vendorVal,
          linkVal,
          checked: false,
        },
      });
    },

    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const {
    data: todos,
    isLoading,
    isSuccess,
  } = useQuery<SingleTodo[]>('todos', getTodos);

  const [displayedTodos, setDisplayedTodos] = React.useState<SingleTodo[]>([]);
  const [categories, setCategories] = React.useState(['All']);
  const [currCategory, setCurrCategory] = React.useState('All');

  React.useEffect(() => {
    if (isSuccess) {
      if (currCategory !== 'All') {
        const filteredTodos = todos.filter((x) => x.category === currCategory);
        console.log(filteredTodos.length);
        setDisplayedTodos(filteredTodos);
      } else {
        setDisplayedTodos(todos);
      }
    }
  }, [isSuccess, todos, currCategory]);

  React.useEffect(() => {
    if (isSuccess) {
      const resultCategories = todos
        .map((x: SingleTodo) => {
          return x.category;
        })
        .filter((x: string, i: number, a: string[]) => a.indexOf(x) === i);
      setCategories(['All', ...resultCategories]);
    }
  }, [isSuccess, todos]);

  const categoryCallback = (category: string) => {
    setCurrCategory(category);
  };

  if (isLoading) {
    return <div>Is loading....</div>;
  }

  const calculateRunningTotal = todos?.reduce<{ cost: string }[]>(
    (checkedTodos, { checked, cost }) => {
      if (checked === true) {
        checkedTodos.push({ cost });
      }
      return checkedTodos;
    },
    []
  );

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
      <RunningTotal checkedTodos={calculateRunningTotal || []} />
      <div className={todoStyles.todosMain}>
        <div
          className={`${todoStyles.todosContainer} ${
            todos?.some((x) => x.checked) && todoStyles.todosContainerReduced
          }`}
        >
          {displayedTodos
            .sort((a, b) => {
              if (a.checked && !b.checked) {
                return -1;
              }

              if (b.checked && !a.checked) {
                return 1;
              }

              if (a.category < b.category) {
                return -1;
              }

              if (b.category < a.category) {
                return 1;
              }
              return 0;
            })
            .map((todo, index) => (
              <Todo
                key={index}
                currCategory={currCategory}
                index={index}
                todo={todo}
                queryClient={queryClient}
              />
            ))}
        </div>
        <AddTodo
          addNewTodoCallback={postTodo.mutate}
          currCategory={currCategory}
          categories={categories}
          vendors={
            todos
              ?.map((x) => x.vendor)
              .filter((x, i, a) => a.indexOf(x) === i) || []
          }
        />
      </div>
    </div>
  );
};

export default TodoContainer;
