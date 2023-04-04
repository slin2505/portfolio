import express from "express";
import {
  getLikeforProject,
  likedByUser,
  likeDislikeProject,
} from "../controllers/projectLikeCtrl.js";

const router = express.Router();

// Like routing
router.get("/getLikes", getLikeforProject);
router.get("/likedByUser", likedByUser);
router.post("/likeDislike", likeDislikeProject);

export default router;
