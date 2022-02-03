// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import { createTodo } from "../../prisma/controllers";
import { createTodo } from "@controllers";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const response = await createTodo(
    req.body.newTitle,
    req.body.categoryVal,
    req.body.costVal,
    req.body.vendorVal,
    req.body.linkVal,
    req.body.noteVal,
    req.body.checked
  );
  res.status(200).json(response);
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb"
    }
  }
};
