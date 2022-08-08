import mongoose from "mongoose";
import express from "express";
import ListProject from "../models/listProject.js";

const router = express.Router();

export const getProjects = async (req, res) => {
  try {
    await ListProject.find({}).then((result) => {
      res.send(result);
    });
  } catch (error) {
    res.status(404).send("err");
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await ListProject.findById(id);

    res.status(200).json(project);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const {
    nomDuProjet ,
    details,
  } = req.body;

  const newProject = new ListProject({
    nomDuProjet,
    details,
  });

  try {
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const {
    nomDuProjet,
    details,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No project with id: ${id}`);

  const updatedProject = {
    nomDuProjet,
    details,
  };

  await ListProject.findOneAndUpdate(id, updatedProject, { new: true });

  res.json(updatedProject);
};

export const deleteProject = async (req, res) => {
  try {
    await ListProject.findOneAndDelete({ id: req.params.id });

    return res.status(200).send("project deleted");
  } catch (err) {
    return res.status(404).send("project not deleted");
  }
};

export const getProjectByNom = async (req, res) => {
  try {
    let project = await ListProject.findOne({ nomDuProjet: req.params.nomDuProjet });
    res.send(project);
  } catch (err) {
    console.log(err);
  }
};

export default router;
