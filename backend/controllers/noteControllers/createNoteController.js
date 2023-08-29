import { noteServices } from "../../services/noteServices/index.js";

export const createNoteController = async (req, res) => {
  // console.log(Note)
  const { title, content, archived, actived, category } = req.body;
  // console.log(title, content)
  try {
    const data = {
      title,
      content,
      archived,
      actived,
      category,
    };
    if (!title || !content) {
      return res.status(500).json({ success: false, message: "bad request" });
    }
    const newNote = await noteServices.createNotesServices(
      title,
      content,
      archived,
      actived,
      category
    );

    const response = {
      success: true,
      message: "Create successfully",
      data: newNote,
    };

    return res.status(201).json(response);
  } catch (error) {
    // console.error('noteController', error);
    res.status(500).json({ message: "failed to create note" });
  }
};
