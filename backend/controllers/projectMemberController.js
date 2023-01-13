import { ProjectMember } from "../models/projectMember.js";
import {Op} from "sequelize"

//INSERT INTO METHOD

const insertPMIntoDatabase=async (req,res)=>{

    try{
        const receivedProjectMember=req.body;
        await ProjectMember.create(receivedProjectMember);
        res.status(200).json("Object has been added to DB!"); //for success 
    }
    catch(err){
        return res.status(500).json(err) //for client error
    }
}

const getAllPMFromDB=async (req,res)=>{

    try{
        const projectMembers=await ProjectMember.findAll();
        return res.status(200).json(projectMembers);

    }
    catch(err)
    {
        res.status(500).json(err) 
    }
}

export
{
    insertPMIntoDatabase,
    getAllPMFromDB
}