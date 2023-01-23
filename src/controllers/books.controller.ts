import * as allBooks from "../repositores/books.repository.js";
import { Request, Response } from "express";

async function getBooksController(req: Request, res: Response) {
  try {
    const result = await allBooks.getBooksRepository();
    return res.send(result.rows);
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
}

async function postBooksController(req: Request, res: Response) {
  const {
    name,
    description,
    classification,
    authorId,
  }: {
    name: string;
    description: string;
    classification: number;
    authorId: number;
  } = req.body;
  try {
    await allBooks.postBooksRepository({
      name,
      description,
      classification,
      authorId,
    });
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
}

async function updateBooksController(req: Request, res: Response) {
  const { id } = req.params;
  const bookId = Number(id);
  const {
    name,
    description,
    classification,
    authorId,
  }: {
    name: string;
    description: string;
    classification: number;
    authorId: number;
  } = req.body;
  try {
    await allBooks.updateBooksRepository({
      name,
      description,
      classification,
      authorId,
      bookId,
    });
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
}

async function deleteBooksController(req: Request, res: Response) {
  const { id } = req.params;
  const bookId = Number(id);
  try {
    await allBooks.deleteBooksRepository({ bookId });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
}
async function allBooksController(req: Request, res: Response) {
  const { fil } = req.params
  try {
    const result = await allBooks.allBooksRepository({fil});
    const ordersList = result.rows.map((i) => ({
      author: i.author,

      books: {
        id: i.id,
        name: i.name,
        classification: i.classification,
        description: i.description,
      },
    }));
    return res.send(ordersList);
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
}

export {
  getBooksController,
  postBooksController,
  updateBooksController,
  deleteBooksController,
  allBooksController,
};
