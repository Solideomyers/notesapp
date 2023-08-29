import createCategoryController from "./createCategoryController";
import deleteCategoryController from "./deleteCategoryController";
import destroyCategoryController from "./destroyCategoryController";
import updateCategoryController from "./updateCategoryController";
import listCategoryController from "./listCategoryController";

export default {
  ...createCategoryController,
  ...updateCategoryController,
  ...listCategoryController,
  ...deleteCategoryController,
  ...destroyCategoryController,
};
