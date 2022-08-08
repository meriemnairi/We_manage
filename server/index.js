import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import managerRoutes from "./routes/managers.js";
import projectRoutes from "./routes/projects.js";
import taskRoutes from "./routes/tasks.js";
import adminRoutes from "./routes/adminAccount.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/managers", managerRoutes);
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/admin", adminRoutes);


// https://www.mongodb.com/cloud/atlas




const CONNECTION_URL =
  "mongodb+srv://WeManage:PFE2022@cluster0.zbpn9.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log("Server running on port : 5000"))
  )
  .catch((error) => console.log(error.message));
