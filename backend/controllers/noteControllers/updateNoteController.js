import { noteServices } from "../../services/noteServices/index.js";

export const updateNoteController = async (req, res) => {
  // console.log(Note)
  const { id } = req.params;
  try {
    if (!body || !id) {
      return res.status(500).json({ success: false, message: "bad request" });
    }
    const body = req.body;
    // console.log(body)

    const updateNote = await noteServices.updateNotesServices(body, id);

    const response = {
      success: true,
      message: "Update successfully",
      data: updateNote,
    };

    return res.status(201).json(response);
  } catch (error) {
    // console.error('updateNoteController', error);
    res.status(500).json({ message: "failed to update note" });
  }
};
