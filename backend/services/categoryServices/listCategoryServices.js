import { models } from "../../db.js";

export const listCategoryServices = async () => {
  //    console.log(Category)
  try {
    const newCategory = await models.Category.findAll({
      include: { model: models.Note, as: "Notes", attributes: ["id", "title"] },
    });
    // console.log(newCategory)
    return newCategory;
  } catch (error) {
    // console.error('function by list Categorys', error);
    throw error;
  }
};
