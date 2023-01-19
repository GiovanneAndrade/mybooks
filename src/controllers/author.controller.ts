import * as allAuthor from "../repositores/author.repository.js";
import { Request, Response } from "express";

async function getAuthorController(req: Request, res: Response) {
  try {
    const result = await allAuthor.getAuthorRepository();
    return res.send(result.rows);
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
}

async function postAuthorController(req: Request, res: Response) {
  const {
    name,
    idade,
  }: {
    name: string;
    idade: number;
  } = req.body;
  try {
    await allAuthor.postAuthorRepository({
      name,
      idade,
    });
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
}

export { getAuthorController, postAuthorController };
