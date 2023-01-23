import { Request, Response, Router } from "express";
import {
  getAuthorController,
  postAuthorController,
} from "../controllers/author.controller.js";
import postAuthorSchema from "../schemas/author.schema.js";
import { validateSchema } from "../schemas/shemaValidation.js";

const router = Router();

router.get("/author",  getAuthorController);
router.post("/author", validateSchema(postAuthorSchema), postAuthorController);
 

export default router;
