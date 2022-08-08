import mongoose from "mongoose";

const managerSchema = mongoose.Schema({
  nom: String,
  prenom: String,
  email: String,
  poste: String,
  motDePasse: String,
  numeroTelephone: String,
  projet: String,
  photo: String,
});

const AccountManager = mongoose.model("AccountManager", managerSchema);

export default AccountManager;
