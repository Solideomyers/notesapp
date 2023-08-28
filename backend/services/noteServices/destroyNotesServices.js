import { Note } from "../../db";

export const destroyNoteServices = async (id) => {
  //    console.log(Note)

  try {
    const newNote = await Note.destroy({ where: { id } });
    return newNote;
  } catch (error) {
    // console.error('function by destroy notes', error);
    throw error;
  }
};
