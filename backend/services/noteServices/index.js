import createNotesServices from "./createNotesServices";
import deleteNotesServices from "./deleteNotesServices";
import updateNotesServices from "./updateNotesServices";
import listNotesServices from "./listNotesServices";
import listNotesByCatServices from "./listNotesByCatServices";
import destroyNotesServices from "./destroyNotesServices";

export default {
  ...createNotesServices,
  ...updateNotesServices,
  ...listNotesServices,
  ...listNotesByCatServices,
  ...deleteNotesServices,
  ...destroyNotesServices,
};
