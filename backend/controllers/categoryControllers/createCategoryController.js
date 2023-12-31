import { categoryServices } from "../../services/categoryServices/index.js";

export const createCategoryController = async (req, res) => {
  const { name, actived } = req.body;
  console.log("categoryServices: ", categoryServices);

  try {
    const data = {
      name,
      actived,
    };

    const newCategory = await categoryServices.createCategoryServices(data);
    if (!newCategory) {
      return res.status(500).json({ success: false, message: "bad request" });
    }
    const response = {
      success: true,
      message: "Create successfully",
      data: newCategory,
    };

    return res.status(201).json(response);
  } catch (error) {
    console.error("CategoryController", error);
    res.status(500).json({ message: "failed to create Category" });
  }
};
