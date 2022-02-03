// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { updateTodo } from "@controllers";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const updatedTodo = await updateTodo(
    req.body.id,
    req.body.checked,
    req.body.category,
    req.body.todoTitle,
    req.body.cost,
    req.body.vendor,
    req.body.note
  );
  res.status(200).json(updatedTodo);
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb"
    }
  }
};
