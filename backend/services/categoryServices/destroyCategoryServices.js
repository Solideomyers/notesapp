import { Category } from "../../db";

export const destroyCategoryServices = async (id) => {
  //    console.log(Category)

  try {
    const newCategory = await Category.destroy({ where: { id } });
    return newCategory;
  } catch (error) {
    // console.error('function by destroy Categorys', error);
    throw error;
  }
};
