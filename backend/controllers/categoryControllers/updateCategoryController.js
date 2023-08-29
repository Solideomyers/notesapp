import { updateCategoryServices } from "../../services/categoryServices";

export const updateCategoryController = async (req, res) => {
  // console.log(Category)
  const { id } = req.params;
  // console.log(title, content)
  try {
    const body = req.body;
    if (!id) {
      return res.status(500).json({ success: false, message: "id invalid" });
    }
    const updateCategory = await updateCategoryServices(body, id);

    const response = {
      success: true,
      message: "Update successfully",
      data: updateCategory,
    };

    return res.status(201).json(response);
  } catch (error) {
    // console.error('updateCategoryController', error);
    res.status(500).json({ message: "failed to update Category" });
  }
};
