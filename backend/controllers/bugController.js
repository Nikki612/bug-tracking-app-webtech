import { Bug } from "../models/bug.js";
import {Op} from "sequelize"

//INSERT INTO METHOD

const insertBugIntoDatabase=async (req,res)=>{

    try{
        const receivedBug=req.body;
        await Bug.create(receivedBug);
        res.status(200).json("Object has been added to DB!"); //for success 
    }
    catch(err){
        return res.status(500).json(err) //for client error
    }
}

const getAllBugsFromDB=async (req,res)=>{

    try{
        const bugs=await Bug.findAll();
        return res.status(200).json(bugs);

    }
    catch(err)
    {
        res.status(500).json(err) 
    }
}

const getBugFromDBById=async (req,res)=>{
    try{
        const bug=await Bug.findByPk(req.params.id);
        if(user)
        {
            return res.status(200).json(bug);
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

export
{
    insertBugIntoDatabase,
    getAllBugsFromDB,
    getBugFromDBById
};