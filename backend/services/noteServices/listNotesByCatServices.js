import { models } from "../../db.js";

export const listNoteByCatServices = async (category) => {
  //    console.log(Note)
  try {
    const newNote = await models.Note.findAll({
      where: { archived: false },
      include: {
        model: models.Category,
        where: { name: category },
      },
    });
    // console.log(newNote)
    return newNote;
  } catch (error) {
    // console.error('function by list notes', error);
    throw error;
  }
};
