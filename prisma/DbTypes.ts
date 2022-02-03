import { Todo } from "@prisma/client";

type ID = number;
type Title = string;
type Category = string;
type Cost = string;
type Vendor = string;
type Link = string;
type Note = string;
type Checked = boolean;

export type CreateTodo = (
  title: Title,
  category: Category,
  cost: Cost,
  vendor: Vendor,
  link: Link,
  note: Note,
  checked: Checked
) => Promise<Todo>;

export type UpdateTodo = (
  id: ID,
  checked: Checked,
  category: Category,
  todoTitle: Title,
  cost: Cost,
  vendor: Vendor,
  note: Note
) => Promise<Todo>;

export type GetAllTodos = () => Promise<Todo[]>;

export type DeleteTodo = (id: ID) => Promise<any>;
