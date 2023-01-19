import  express  from "express";
 
 import authorRouter from './routers/author.router.js'
import booksRouter from './routers/books.router.js'
import categoriesRouter from './routers/category.router.js'

const app = express();
app.use(express.json());
 

app.use(booksRouter)
app.use(authorRouter)
app.use(categoriesRouter)




app.listen(4000, ()=>{
  console.log('server listening on port 4000')
})


