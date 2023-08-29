import { noteServices } from "../../services/noteServices/index.js";

export const deleteNoteController = async (req, res) => {
  // console.log(Note)
  const { id } = req.params;
  // console.log(title, content)
  try {
    //   const body = req.body
    if (!id) {
      return res.status(500).json({ success: false, message: "id invalid" });
    }
    const deleteNote = await noteServices.deleteNoteServices(id);

    const response = {
      success: true,
      message: "delete successfully",
      data: deleteNote,
    };

    return res.status(201).json(response);
  } catch (error) {
    // console.error('deleteNoteController', error);
    res.status(500).json({ message: "failed to delete note" });
  }
};
