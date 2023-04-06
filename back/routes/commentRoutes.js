import express from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  getOneComment,
  updateComment,
} from "../controllers/commentCtrl.js";

const router = express.Router();

// CRUD Comment
router.get("/", getAllComments);
router.get("/:id", getOneComment);
router.post("/", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;
