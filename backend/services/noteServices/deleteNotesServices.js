import { Note } from "../../db";

export const deleteNoteServices = async (id) => {
  //    console.log(Note)

  try {
    const newNote = await Note.findByPk(id);

    await newNote.set({ actived: false });

    newNote.save();

    return newNote;
  } catch (error) {
    // console.error('function by delete notes', error);
    throw error;
  }
};
