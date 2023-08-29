// import { createNotesServices } from "./createNotesServices.js";
// import { deleteNoteServices } from "./deleteNotesServices.js";
// import { updateNotesServices } from "./updateNotesServices.js";
// import { listNoteServices } from "./listNotesServices.js";
// import { listNoteByCatServices } from "./listNotesByCatServices.js";
// import { destroyNoteServices } from "./destroyNotesServices.js";

// export default {
//   ...createNotesServices,
//   ...updateNotesServices,
//   ...listNoteServices,
//   ...listNoteByCatServices,
//   ...deleteNoteServices,
//   ...destroyNoteServices,
// };
import { createNotesServices } from "./createNotesServices.js";
import { deleteNoteServices } from "./deleteNotesServices.js";
import { updateNotesServices } from "./updateNotesServices.js";
import { listNoteServices } from "./listNotesServices.js";
import { listNoteByCatServices } from "./listNotesByCatServices.js";
import { destroyNoteServices } from "./destroyNotesServices.js";

export const noteServices = {
  createNotesServices,
  updateNotesServices,
  listNoteServices,
  listNoteByCatServices,
  deleteNoteServices,
  destroyNoteServices,
};
