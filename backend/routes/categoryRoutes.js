import { Router } from "express";
// import {
//   createCategoryController,
//   updateCategoryController,
//   deleteCategoryController,
//   listCategoryController,
//   destroyCategoryController,
// } from "../controllers/categoryControllers/";
import { createCategoryController } from "../controllers/categoryControllers/createCategoryController.js";
import { updateCategoryController } from "../controllers/categoryControllers/updateCategoryController.js";
import { deleteCategoryController } from "../controllers/categoryControllers/deleteCategoryController.js";
import { destroyCategoryController } from "../controllers/categoryControllers/destroyCategoryController.js";
import { listCategoryController } from "../controllers/categoryControllers/listCategoryController.js";
// import { controllers } from '../controllers/categoryControllers/'

export const categoryRouter = Router();

categoryRouter.post("/", createCategoryController);
categoryRouter.patch("/:id", updateCategoryController);
categoryRouter.delete("/:id", destroyCategoryController);
categoryRouter.post("/:id", deleteCategoryController);
categoryRouter.get("/", listCategoryController);
