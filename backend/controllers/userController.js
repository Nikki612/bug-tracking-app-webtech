import { User } from "../models/user.js";
import {Op} from "sequelize"

// INSERT INTO METHOD
const insertUserIntoDatabase=async (req,res)=>{

    try{
        const receivedUser=req.body;
        await User.create(receivedUser);
        res.status(200).json("Object has been added to DB!"); //for success 
    }
    catch(err){
        return res.status(500).json(err) //for client error
    }
}

// GET ALL
const getAllUsersFromDB=async (req,res)=>{

    try{
        const users=await User.findAll();
        return res.status(200).json(users);

    }
    catch(err)
    {
        res.status(500).json(err) 
    }
}

// GET BY ID
const getUserFromDBById=async (req,res)=>{
    try{
        const user=await User.findByPk(req.params.id);
        if(user)
        {
            return res.status(200).json(user);
        }
        else
        {
            return res.status(404).json({error:"Not Found"});
        }
    }
    catch(err){
        res.status(500).json(err);
    }
};

// UPDATE BY ID
const updateUSerFromDBById = async (req, res)=>{
    try {
        const user = await User.findByPk(req.params.id);
        if(user) {
            const updatedUser = await user.update(req.body);
            return res.status(200).json(updatedUser);
        } else {
            return res
            .status(404)
            .json({error: 'User with id ${req.params.id} not found'});
        }
    } catch(err) {
        res.status(500).json(err);
    }
}

// DELETE
const deleteUser = async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        await user.destroy();
        return res.status(200).json("Entity deleted successfully!");
      } else {
        return res
          .status(404)
          .json({ error: `User with id ${req.params.id} not found` });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

export
{
    insertUserIntoDatabase,
    getAllUsersFromDB,
    getUserFromDBById,
    updateUSerFromDBById,
    deleteUser
};