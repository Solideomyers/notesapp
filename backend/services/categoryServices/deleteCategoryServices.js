import { models } from "../../db.js";

export const deleteCategoryServices = async (id) => {
  //    console.log(Category)

  try {
    const newCategory = await models.Category.findByPk(id);
    await newCategory.set({ actived: false });
    newCategory.save();
    return newCategory;
  } catch (error) {
    // console.error('function by delete Categorys', error);
    throw error;
  }
};
