import { deleteCategoryServices } from "../../services/categoryServices";

export const deleteCategoryController = async (req, res) => {
  // console.log(Category)
  const { id } = req.params;
  // console.log(title, content)
  try {
    //   const body = req.body

    if (!id) {
      return res.status(500).json({ success: false, message: "id invalid" });
    }
    const deleteCategory = await deleteCategoryServices(id);
    const response = {
      success: true,
      message: "delete successfully",
      data: deleteCategory,
    };

    return res.status(201).json(response);
  } catch (error) {
    // console.error('deleteCategoryController', error);
    res.status(500).json({ message: "failed to delete Category" });
  }
};
