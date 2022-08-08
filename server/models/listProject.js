import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  nomDuProjet: String,
  details: String,
  
});

const ListProject = mongoose.model("ListProject", projectSchema);

export default ListProject;
