import { models } from "../../db.js";

export const createNotesServices = async (
  title,
  content,
  archived,
  actived,
  category
) => {
  try {
    let newNote;

    // Create the note
    newNote = await models.Note.create({ title, content, archived, actived });

    // Find or create the category
    let existingCategory;
    if (category) {
      existingCategory = await Promise.all(
        category.map(async (categoryName) => {
          const cat = await models.Category.findOne({
            where: {
              name: categoryName,
            },
          });
          return cat;
        })
      );
      const filteredCategory = existingCategory.filter((cat) => cat !== null);

      // Associate note with category
      await newNote.addCategory(filteredCategory);
    }

    return newNote;
  } catch (error) {
    console.error("function by create notes", error);
    throw error;
  }
};
