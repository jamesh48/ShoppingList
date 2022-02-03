// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { deleteTodo } from "@controllers";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const allTodosAfterDelete = await deleteTodo(req.body.id);
  res.status(200).json(allTodosAfterDelete);
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb"
    }
  }
};
