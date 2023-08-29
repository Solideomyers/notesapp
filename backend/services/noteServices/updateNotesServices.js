import { models } from "../../db.js";

export const updateNotesServices = async (data, id) => {
  try {
    const note = await models.Note.findByPk(id);

    if (data && data.category) {
      const existingCategories = await Promise.all(
        data.category.map(async (categoryName) => {
          const cat = await models.Category.findOne({
            where: {
              name: categoryName,
            },
          });
          return cat;
        })
      );

      const filteredCategories = existingCategories.filter(
        (cat) => cat !== null
      );

      // Update the categories associated with the note
      await note.setCategories(filteredCategories);
    }

    // Update the note's data
    await note.update(data);

    return note;
  } catch (error) {
    // console.error('function by update notes', error);
    throw error;
  }
};
