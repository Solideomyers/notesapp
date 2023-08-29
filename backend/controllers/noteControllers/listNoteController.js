import { listNoteServices } from "../../services/noteServices";

export const listNoteController = async (req, res) => {
  const { actived = "true", archived = "false", category } = req.query;
  // console.log(title, content)
  try {
    const isActived = actived === "true";
    const isArchived = archived === "true";

    const newNote = await listNoteServices(isArchived, isActived, category);

    if (newNote.length === 0) {
      return res.status(200).json({ message: "There is not note" });
    }

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
