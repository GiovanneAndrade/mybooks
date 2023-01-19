import { Router } from "express";
import { getExempleController } from "../controllers/exemple.controller";
var router = Router();
router.get('/exemple', getExempleController);
export default router;
