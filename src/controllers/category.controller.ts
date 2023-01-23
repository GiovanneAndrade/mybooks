import * as allCategories from "../repositores/category.repository.js";
import { Request, Response } from "express";
    
async function getCategoriesController(req: Request, res: Response) {
  try {
    const result = await allCategories.getCategoriesRepository();
    return res.send(result.rows);
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
}

async function postCategoriesController(req: Request, res: Response) {

  const {
    name,
  }: {
    name: string;
  } = req.body;
  const result = await allCategories.consultCategoriesRepository({name});

  if(result.rows.length > 0) return res.status(404).send('categoria ja existe')
  try {
    await allCategories.postCategoriesRepository({
      name,
    });
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
}

export { getCategoriesController, postCategoriesController };
