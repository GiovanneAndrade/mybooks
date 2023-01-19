import { Router } from "express"
import { getCategoriesController, postCategoriesController } from "../controllers/category.controller.js"
 
     
    

const router = Router()

router.get('/categories', getCategoriesController)
router.post('/categories', postCategoriesController)

   
export default router