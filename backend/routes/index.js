import express from "express";
import { categoryRouter } from "./categoryRoutes.js";
import { noteRouter } from "./notesRoutes.js";

const router = express.Router();

router.use("/notes", noteRouter);
router.use("/categories", categoryRouter);
export default router;
