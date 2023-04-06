import express from "express";
import {
  createTag,
  deleteTag,
  getAllTag,
  getProjectsForOneTag,
  getTagsForOneProject,
  updateTag,
} from "../controllers/tagCtrl.js";

const router = express.Router();

// CRUD Tag
router.get("/", getAllTag);
router.get("/groupBy/:name", getProjectsForOneTag);
router.get("/groupFor/:name", getTagsForOneProject);
router.post("/", createTag);
router.put("/:id", updateTag);
router.delete("/:id", deleteTag);

export default router;
