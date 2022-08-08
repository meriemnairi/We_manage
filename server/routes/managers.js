import express from "express";

import {
  getManagers,
  getManager,
  getManagerByNom,
  createManager,
  deleteManager,
  updateManager,
  loginManager,
  updateMpManager,
} from "../controllers/managers.js";

//const  authorization = require('../middleware/auth')
//const  auth  = require('../middleware/auth')

import auth from "../middleware/auth.js";
const router = express.Router();

// localhost:5000/managers

router.get("/listmanager", getManagers);
router.get("/manager/:id", getManager);
router.get("/managerByNom/:nom", getManagerByNom);
router.post("/newmanager", createManager);
router.delete("/deletemanager/:id", deleteManager);
router.patch("/updatemanager/:id", updateManager);
router.post("/loginManager", loginManager);
router.patch("/updateMp/:id", updateMpManager);
export default router;
