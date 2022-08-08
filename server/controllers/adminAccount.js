import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/adminAccount.js";

export const createAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ username });

    if (existingAdmin)
      return res.status(404).json({ message: "admin already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await Admin.create({
      username,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { username: result.username, id: result._id },
      "test"
    );

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ messange: "something went wrong" });
  }
};

export const getAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await Admin.findById(id);

    res.status(200).json(admin);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingAdmin = await Admin.findOne({ username });

    if (!existingAdmin)
      return res.status(404).json({ message: "user n'existe pas" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingAdmin.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "mot de passe incorrecte" });

    const token = jwt.sign(
      { username: existingAdmin.username, id: existingAdmin._id },
      "test"
    );

    res.status(200).json({ result: existingAdmin, token });
  } catch (error) {
    res.status(500).json({ messange: "something went wrong" });
  }
};

export const updateAdmin = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No manager with id: ${id}`);
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const updatedAdmin = {
      username,
      password: hashedPassword,
      _id: id,
    };
    await Admin.findOneAndUpdate(id, updatedAdmin, { new: true });
    const token = jwt.sign(
      { username: updatedAdmin.username, id: updatedAdmin._id },
      "test"
    );

    res.status(200).json({ result: updatedAdmin, token });
  } catch (error) {
    res.status(500).json({ messange: "something went wrong" });
  }
};
