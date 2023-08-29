import { models } from "../../db.js";

export const updateCategoryServices = async (data, id) => {
  //    console.log(Category)

  try {
    const newCategory = await models.Category.update(data, { where: { id } });
    return newCategory;
  } catch (error) {
    // console.error('function by update Categorys', error);
    throw error;
  }
};
