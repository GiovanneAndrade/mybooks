import { Router } from "express"
import { getAuthorController, postAuthorController } from "../controllers/author.controller.js"
 
 
 

const router = Router()

router.get('/author', getAuthorController)
router.post('/author', postAuthorController)
 

   
export default router