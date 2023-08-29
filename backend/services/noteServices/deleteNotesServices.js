import { models } from "../../db.js";

export const deleteNoteServices = async (id) => {
  //    console.log(Note)

  try {
    const newNote = await models.Note.findByPk(id);

    await newNote.set({ actived: false });

    newNote.save();

    return newNote;
  } catch (error) {
    // console.error('function by delete notes', error);
    throw error;
  }
};
