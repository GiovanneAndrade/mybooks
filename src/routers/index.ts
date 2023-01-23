import { Router } from "express";
import authorRouter from "../routers/category.router.js";
import booksRouter from "../routers/books.router.js";
import categoriesRouter from "../routers/author.router.js";

const router = Router();

router.use(booksRouter);
router.use(authorRouter);
router.use(categoriesRouter);

export default router;
