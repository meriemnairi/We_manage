import express from "express";
import auth from "../middleware/auth.js";

import {
  loginAdmin,
  updateAdmin,
  getAdmin,
  createAdmin,
} from "../controllers/adminAccount.js";

//const  authorization = require('../middleware/auth')
//const  auth  = require('../middleware/auth')

const router = express.Router();

router.post("/adminAccount", createAdmin);
router.get("/adminprofile/:id", getAdmin);
router.post("/loginAdmin", loginAdmin);
router.patch("/updateAdmin/:id", updateAdmin);

export default router;