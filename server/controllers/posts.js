import PostManager from "../models/postManager.js";

export const getPosts = async (req, res) => {
  try {
    const postManagers = await PostManager.find();

    console.log(postManagers);

    res.status(200).json(postManagers);
  } catch (error) {
    res.status(400).json({ manager: error.manager });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostManager(post);
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ manager: error.manager });
  }
};
