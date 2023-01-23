import { Router } from "express";
import {
  allBooksController,
  deleteBooksController,
  getBooksController,
  postBooksController,
  updateBooksController,
} from "../controllers/books.controller.js";
import { idBooksMiddlewares } from "../middlewares/books.middlewares.js";
import postBooksSchema from "../schemas/books.schemas.js";
import { validateSchema } from "../schemas/shemaValidation.js";

const router = Router();

router.get("/books", getBooksController);
router.post("/books", validateSchema(postBooksSchema), postBooksController);
router.put("/books/:id",idBooksMiddlewares, validateSchema(postBooksSchema), updateBooksController);
router.delete("/books/:id", idBooksMiddlewares, deleteBooksController);
router.get("/books/all/:fil", allBooksController);
 

export default router;
