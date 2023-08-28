import { Category, Note } from "../../db";

export const listCategoryServices = async () => {
  //    console.log(Category)
  try {
    const newCategory = await Category.findAll({
      include: { model: Note, as: "Notes", attributes: ["id", "title"] },
    });
    // console.log(newCategory)
    return newCategory;
  } catch (error) {
    // console.error('function by list Categorys', error);
    throw error;
  }
};
