import express from "express";
import {
  createProject,
  deleteProject,
  getAllProject,
  getOneProject,
  updateProject,
} from "../controllers/projectCtrl.js";
import multerMiddleware from "../middlewares/multer.js";

const router = express.Router();

// CRUD Project
router.get("/", getAllProject);
router.get("/:id", getOneProject);
router.post("/", multerMiddleware, createProject);
router.put("/:id", multerMiddleware, updateProject);
router.delete("/:id", deleteProject);

export default router;
