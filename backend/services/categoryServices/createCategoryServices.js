import { models } from "../../db.js";

export const createCategoryServices = async (data) => {
  console.log(models.Category);
  try {
    const newCategory = await models.Category.create(data);
    return newCategory;
  } catch (error) {
    console.error("function by create Category", error);
    throw error;
  }
};
