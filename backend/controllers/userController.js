import { User } from "../models/user.js";
import {Op} from "sequelize"

//INSERT INTO METHOD

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

/*const getUserFromDBById=async (req,res)=>{
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
}; */

export
{
    insertUserIntoDatabase,
    getAllUsersFromDB
    //getUserFromDBById
};