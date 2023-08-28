import { Note, Category } from "../../db";

export const listNoteServices = async (
  archived = false,
  actived = true,
  category
) => {
  try {
    const whereClause = {
      archived,
      actived,
    };

    if (category) {
      whereClause["$Category.name$"] = category;
    }

    const newNote = await Note.findAll({
      where: whereClause,
      include: Category,
    });

    return newNote;
  } catch (error) {
    // console.error('function by list notes', error);
    throw error;
  }
};
