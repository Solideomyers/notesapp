import { Note, Category } from "../../db";

export const listNoteByCatServices = async (category) => {
  //    console.log(Note)
  try {
    const newNote = await Note.findAll({
      where: { archived: false },
      include: {
        model: Category,
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
