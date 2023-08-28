import { Category } from "../../db";

export const createCategoryServices = async (data) => {
  //    console.log(Category)
  try {
    const newCategory = await Category.create(data);
    return newCategory;
  } catch (error) {
    // console.error('function by create Category', error);
    throw error;
  }
};
