import { listNoteByCatServices } from "../../services/noteServices";

export const listNoteByCatController = async (req, res) => {
  const { category } = req.query;
  try {
    if (!category) {
      return res.status(500).json({ success: false, message: "bad request" });
    }
    const newNote = await listNoteByCatServices(category);

    const response = {
      success: true,
      message: "List successfully",
      data: newNote,
    };

    return res.status(201).json(response);
  } catch (error) {
    // console.error('noteController', error);
    res.status(500).json({ message: "failed to list note" });
  }
};
