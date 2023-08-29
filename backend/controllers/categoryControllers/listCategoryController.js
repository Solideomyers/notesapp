import { categoryServices } from "../../services/categoryServices/index.js";

export const listCategoryController = async (req, res) => {
  // console.log(title, content)
  try {
    const newCategory = await categoryServices.listCategoryServices();
    if (!newCategory) {
      return res.status(500).json({ success: false, message: "bad request" });
    }
    const response = {
      success: true,
      message: "List successfully",
      data: newCategory,
    };

    return res.status(201).json(response);
  } catch (error) {
    // console.error('CategoryController', error);
    res.status(500).json({ message: "failed to list Category" });
  }
};
