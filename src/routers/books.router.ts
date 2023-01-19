import { Router } from "express";
import {
  allBooksController,
  deleteBooksController,
  getBooksController,
  postBooksController,
  updateBooksController,
} from "../controllers/books.controller.js";

const router = Router();

router.get("/books", getBooksController);
router.post("/books", postBooksController);
router.put("/books/:id", updateBooksController);
router.delete("/books/:id", deleteBooksController);
router.get("/books/all", allBooksController);

export default router;
