import createCategoryServices from "./createCategoryServices";
import deleteCategoryServices from "./deleteCategoryServices";
import destroyCategoryServices from "./destroyCategoryServices";
import updateCategoryServices from "./updateCategoryServices";
import listCategoryServices from "./listCategoryServices";

export default {
  ...createCategoryServices,
  ...updateCategoryServices,
  ...listCategoryServices,
  ...deleteCategoryServices,
  ...destroyCategoryServices,
};
