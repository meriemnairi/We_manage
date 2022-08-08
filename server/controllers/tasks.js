import mongoose from "mongoose";
import express from "express";
import ListTask from "../models/listTask.js";

const router = express.Router();

export const getTasks = async (req, res) => {
  try {
    await ListTask.find({}).then((result) => {
      res.send(result);
    });
  } catch (error) {
    res.status(404).send("err");
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await ListTask.findById(id);

    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const {
    titre,
    creePar,
    assigneeA,
    deadline,
    etat,
    description,
    comment,
    document,
  } = req.body;

  const newTask = new ListTask({
    titre,
    creePar,
    assigneeA,
    deadline,
    etat,
    description,
    comment,
    document,
  });

  try {
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const {
    titre,
    creePar,
    assigneeA,
    deadline,
    etat,
    description,
    comment,
    document,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Task with id: ${id}`);

  const updatedTask = {
    titre,
    creePar,
    assigneeA,
    deadline,
    etat,
    description,
    comment,
    document,
  };

  await ListTask.findOneAndUpdate(id, updatedTask, { new: true });

  res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  try {
    await ListTask.findOneAndDelete({ id: req.params.id });

    return res.status(200).send("Task deleted");
  } catch (err) {
    return res.status(404).send("Task not deleted");
  }
};

export default router;
