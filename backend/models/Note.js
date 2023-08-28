import { DataTypes } from "sequelize";

export const Note = (sequelize) => {
  const Note = sequelize.define("Note", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    archived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    actived: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
  });

  return Note;
};
