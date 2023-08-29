import { Router } from "express";
// import {
//   createNoteController,
//   updateNoteController,
//   deleteNoteController,
//   listNoteController,
//   listNoteByCatController,
//   destroyNoteController,
// } from "../controllers/noteControllers";
import { createNoteController } from "../controllers/NoteControllers/createNoteController.js";
import { updateNoteController } from "../controllers/NoteControllers/updateNoteController.js";
import { deleteNoteController } from "../controllers/NoteControllers/deleteNoteController.js";
import { destroyNoteController } from "../controllers/NoteControllers/destroyNoteController.js";
import { listNoteController } from "../controllers/NoteControllers/listNoteController.js";
import { listNoteByCatController } from "../controllers/NoteControllers/listNoteByCatController.js";

export const noteRouter = Router();

noteRouter.post("/", createNoteController);
noteRouter.patch("/:id", updateNoteController);
noteRouter.post("/:id", deleteNoteController);
noteRouter.delete("/:id", destroyNoteController);
noteRouter.get("/", listNoteController);
noteRouter.get("/bycategory", listNoteByCatController);
//?category=categoria%203
// export default noteRouter;
