// import { createCategoryServices } from "./createCategoryServices.js";
// import { deleteCategoryServices } from "./deleteCategoryServices.js";
// import { destroyCategoryServices } from "./destroyCategoryServices.js";
// import { updateCategoryServices } from "./updateCategoryServices.js";
// import { listCategoryServices } from "./listCategoryServices.js";

// export default {
//   ...createCategoryServices,
//   ...updateCategoryServices,
//   ...listCategoryServices,
//   ...deleteCategoryServices,
//   ...destroyCategoryServices,
// };
import { createCategoryServices } from "./createCategoryServices.js";
import { deleteCategoryServices } from "./deleteCategoryServices.js";
import { destroyCategoryServices } from "./destroyCategoryServices.js";
import { updateCategoryServices } from "./updateCategoryServices.js";
import { listCategoryServices } from "./listCategoryServices.js";

export const categoryServices = {
  createCategoryServices,
  updateCategoryServices,
  listCategoryServices,
  deleteCategoryServices,
  destroyCategoryServices,
};
