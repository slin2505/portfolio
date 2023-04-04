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

// CRUD Project
router.get("/", getAllTag);
router.get("/groupby/:id", getProjectsForOneTag);
router.get("/groupfor/:id", getTagsForOneProject);
router.post("/", createTag);
router.put("/:id", updateTag);
router.delete("/:id", deleteTag);

export default router;
