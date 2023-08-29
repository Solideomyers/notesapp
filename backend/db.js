import dotenv from "dotenv";
import Sequelize from "sequelize";
import { Note } from "./models/Note.js";
import { Category } from "./models/Category.js";
dotenv.config();

const { DB_USER, DB_HOST, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/notesweb`,
  {
    logging: false,
    native: false,
  }
);

const NoteModel = Note(sequelize);
const CategoryModel = Category(sequelize);

CategoryModel.belongsToMany(NoteModel, {
  through: "categoryNote",
});
NoteModel.belongsToMany(CategoryModel, {
  through: "categoryNote",
});

export const models = { ...sequelize.models };
export const conn = sequelize;
