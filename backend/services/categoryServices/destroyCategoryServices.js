import { models } from "../../db.js";

export const destroyCategoryServices = async (id) => {
  //    console.log(Category)

  try {
    const newCategory = await models.Category.destroy({ where: { id } });
    return newCategory;
  } catch (error) {
    // console.error('function by destroy Categorys', error);
    throw error;
  }
};
