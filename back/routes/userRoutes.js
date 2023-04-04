import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  signIn,
  signUp,
  updateUser,
} from "../controllers/userCtrl.js";

const router = express.Router();

// Auth
router.post("/signup", signUp);
router.post("/signin", signIn);

// CRUD User
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
