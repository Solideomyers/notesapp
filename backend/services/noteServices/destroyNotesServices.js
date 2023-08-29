import { models } from "../../db.js";

export const destroyNoteServices = async (id) => {
  //    console.log(Note)

  try {
    const newNote = await models.Note.destroy({ where: { id } });
    return newNote;
  } catch (error) {
    // console.error('function by destroy notes', error);
    throw error;
  }
};
