import express from "express";

import {
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
  getProjectByNom,
} from "../controllers/projects.js";
import auth from "../middleware/auth.js";
const router = express.Router();

// localhost:5000/projects

router.get("/listproject",auth, getProjects);
router.get("/project/:id", auth ,getProject);
router.post("/newproject", auth, createProject);
router.delete("/deleteproject/:id",auth,  deleteProject);
router.patch("/updateproject/:id", auth, updateProject);
router.get("/projectByNom/:nomDuProjet", getProjectByNom);
export default router;
