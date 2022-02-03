// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Todo } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTodos } from "@controllers";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Todo[]>) {
  const allTodos = await getAllTodos();
  res.status(200).json(allTodos);
}
