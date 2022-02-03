import { CreateTodo, DeleteTodo, GetAllTodos, UpdateTodo } from "./DbTypes";
import prisma from "./index";

export const getAllTodos: GetAllTodos = async () => {
  const allTodos = await prisma.todo.findMany();
  await prisma.$disconnect();
  return allTodos;
};

export const updateTodo: UpdateTodo = async (
  id,
  checked,
  category,
  todoTitle,
  cost,
  vendor,
  note
) => {
  const updatedTodo = await prisma.todo.update({
    where: { id: id },
    data: { checked, category, todoTitle, cost, vendor, note }
  });
  await prisma.$disconnect();
  return updatedTodo;
};

export const createTodo: CreateTodo = async (
  title,
  category,
  cost,
  vendor,
  link,
  note,
  checked
) => {
  const newTodo = await prisma.todo.create({
    data: {
      todoTitle: title,
      category: category,
      cost: cost,
      vendor: vendor,
      link,
      note: note,
      checked: checked
    }
  });
  await prisma.$disconnect();
  return newTodo;
};

export const deleteTodo: DeleteTodo = async (id) => {
  await prisma.todo.delete({ where: { id: id } });
  const allTodos = await getAllTodos();
  await prisma.$disconnect();
  return allTodos;
};
