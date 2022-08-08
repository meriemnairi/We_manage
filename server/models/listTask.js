import mongoose from "mongoose";



const taskSchema = mongoose.Schema({
  titre : String,
  creePar : String,
  assigneeA : String,
  deadline : Date,
  etat : String,
  description: String,
  comment: String,
  document: String,
});

const ListTask = mongoose.model("ListTask", taskSchema);

export default ListTask;
