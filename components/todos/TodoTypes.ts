export type SingleTodo = {
  id: number;
  link: string;
  todoTitle: string;
  checked: boolean;
  category: string;
  cost: string;
  vendor: string;
  note: string;
  handleEdit: () => void;
};
