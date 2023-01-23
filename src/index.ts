import express, { NextFunction, Request, Response } from "express";
import routers from "./routers/index.js";


    
const app = express();
app.use(express.json());

app.use(routers)


 
app.listen(4000, () => {
  console.log("server listening on port 4000");
});

