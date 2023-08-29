import createNoteController from "./createNoteController";
import deleteNoteController from "./deleteNoteController";
import destroyNoteController from "./destroyNoteController";
import updateNoteController from "./updateNoteController";
import listNoteController from "./listNoteController";
import listNoteByCatController from "./listNoteByCatController";

export default {
  ...createNoteController,
  ...updateNoteController,
  ...listNoteController,
  ...listNoteByCatController,
  ...deleteNoteController,
  ...destroyNoteController,
};
