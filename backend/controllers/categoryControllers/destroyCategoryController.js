import { destroyCategoryServices } from "../../services/categoryServices";

export const destroyCategoryController = async (req, res) => {
  // console.log(Category)
  const { id } = req.params;
  // console.log(title, content)
  try {
    //   const body = req.body
    if (!id) {
      return res.status(500).json({ success: false, message: "id invalid" });
    }
    const destroyCategory = await destroyCategoryServices(id);

    const response = {
      success: true,
      message: "destroy successfully",
      data: destroyCategory,
    };

    return res.status(201).json(response);
  } catch (error) {
    // console.error('destroyCategoryController', error);
    res.status(500).json({ message: "failed to destroy Category" });
  }
};
