import { Project } from "../models/project.js";
import {Op} from "sequelize"

//INSERT INTO METHOD

const insertUserIntoDatabase=async (req,res)=>{

    try{
        const receivedProject=req.body;
        await Project.create(receivedProject);
        res.status(200).json("Object has been added to DB!"); //for success 
    }
    catch(err){
        return res.status(500).json(err) //for client error
    }
}

const getAllUsersFromDB=async (req,res)=>{

    try{
        const projects=await Project.findAll();
        return res.status(200).json(projects);

    }
    catch(err)
    {
        res.status(500).json(err) 
    }
}

export
{
    insertUserIntoDatabase,
    getAllUsersFromDB
}