import express from "express";

import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.js";
import auth from "../middleware/auth.js";
const router = express.Router();

// localhost:5000/tasks

router.get("/listtask",auth, getTasks);
router.get("/task/:id",auth, getTask);
router.post("/newtask", auth, createTask);
router.delete("/deletetask/:id",auth, deleteTask);
router.patch("/updatetask/:id", auth , updateTask);

export default router;
