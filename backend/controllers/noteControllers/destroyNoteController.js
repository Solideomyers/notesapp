import { noteServices } from "../../services/noteServices/index.js";

export const destroyNoteController = async (req, res) => {
  // console.log(Note)
  const { id } = req.params;
  // console.log(title, content)
  try {
    //   const body = req.body
    if (!id) {
      return res.status(500).json({ success: false, message: "id invalid" });
    }
    const destroyNote = await noteServices.destroyNoteServices(id);

    const response = {
      success: true,
      message: "destroy successfully",
      data: destroyNote,
    };

    return res.status(201).json(response);
  } catch (error) {
    // console.error('destroyNoteController', error);
    res.status(500).json({ message: "failed to destroy note" });
  }
};
