import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return sayHello()

    default:
      return res.status(400).send("No method provider");

    async function sayHello() {
      return res.json({
        log: "Hello World"
      })
    }

  }
}

export default handler;
