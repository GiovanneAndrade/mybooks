import { NextFunction, Request, Response } from "express";
 
import * as allBooks from "../repositores/books.repository.js";

async function idBooksMiddlewares(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const result = await allBooks.idBooksRepository({id});
if(result.rows.length === 0) return res.status(401).send('id não existe')
 
  next();
}
export { idBooksMiddlewares };
