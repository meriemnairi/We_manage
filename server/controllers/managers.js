import mongoose from "mongoose";
import express from "express";
import AccountManager from "../models/accountManager.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



const router = express.Router();

export const getManagers = async (req, res) => {
  try {
    await AccountManager.find({}).then((result) => {
      res.send(result);
    });
  } catch (error) {
    res.status(404).send("err");
  }
};

export const getManager = async (req, res) => {
  const { id } = req.params;

  try {
    const manager = await AccountManager.findById(id);

    res.status(200).json(manager);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getManagerByNom = async (req, res) => {
  try {
    let manager = await AccountManager.findOne({ nom: req.params.nom });
    res.send(manager);
  } catch (err) {
    console.log(err);
  }
};

 export const createManager = async (req, res) => {
  
  const {
     nom,
     prenom,
     email,
     poste,
     motDePasse,
     numeroTelephone,
     projet,
     photo,
   } = req.body;

   try{
    const existingManager = await AccountManager.findOne({email});

    if(existingManager) return res.status(404).json({message: "Manager already exists"});

    const hashedMotDePasse = await bcrypt.hash(motDePasse, 12) ;

    const result = await AccountManager.create({
      nom,
      prenom,
      email,
      poste,
      motDePasse: hashedMotDePasse,
      numeroTelephone,
      projet,
      photo,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      "test"
    );
     
    res.status(200).json({result, token});
   }catch(error){
     res.status(500).json({ messange: "something went wrong" });
   }
 };

export const updateManager = async (req, res) => {
  const { id } = req.params;
  const {
    nom,
    prenom,
    email,
    poste,
    motDePasse,
    numeroTelephone,
    projet,
    photo,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No manager with id: ${id}`);

  const updatedManager = { nom,
    prenom,
    email,
    poste,
    motDePasse,
    numeroTelephone,
    projet,
    photo, _id: id };

  await AccountManager.findOneAndUpdate(id, updatedManager, { new: true });

  res.json(updatedManager);
};

export const deleteManager = async (req, res) => {
  try {
    await AccountManager.findOneAndDelete({ id: req.params.id });

    return res.status(200).send("manager deleted");
  } catch (err) {
    return res.status(404).send("manager not deleted");
  }
};


export const loginManager = async (req, res) => {
  const { email, motDePasse } = req.body;
  try {
    const existingManager = await AccountManager.findOne({ email });

    if (!existingManager)
      return res.status(404).json({ message: "user n'existe pas" });
    const isPasswordCorrect = await bcrypt.compare(
      motDePasse,
      existingManager.motDePasse
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "mot de passe incorrecte" });

    const token = jwt.sign(
      { email: existingManager.email, id: existingManager._id },
      "test");

    res.status(200).json({ result: existingManager, token });
  } catch (error) {
    res.status(500).json({ messange: "something went wrong" });
  }
};

export const updateMpManager = async (req, res) => {
        
        console.log(req.params.id)
        
        let {motDePasse } = req.body
      
        try {
            let updatedManager = await AccountManager.findOneAndUpdate(req.params.id)
            const hashedMotDePasse = await bcrypt.hash(motDePasse, 12) ;
            updatedManager.motDePasse = hashedMotDePasse;
            await updatedManager.save();
            let payload = {
                id: updatedManager._id,
            }
            let token = jwt.sign(payload, "test");
            res.status(200).json({ result: updatedManager, token });
        } catch (error) {
            res.status(500).json({ messange: "something went wrong" });
        }
   
    }

  



export default router;
