import { Router } from "express"
import { getCategoriesController, postCategoriesController } from "../controllers/category.controller.js"
import postCategorySchema from "../schemas/category.schamas.js"
import { validateSchema } from "../schemas/shemaValidation.js"
 
     
    

const router = Router()

router.get('/categories', getCategoriesController)
router.post('/categories', validateSchema(postCategorySchema), postCategoriesController)

   
export default router