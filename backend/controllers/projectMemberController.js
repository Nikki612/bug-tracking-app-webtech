import { ProjectMember } from "../models/projectMember.js";
import {Op} from "sequelize"

// INSERT INTO METHOD
const insertPMIntoDatabase=async (req,res)=>{
    try {
        const pm = await ProjectMember.create({
            projectId:req.body.projectId,
            userId: req.body.userId,
            memberType: req.body.memberType
        });
        res.status(201).json({data: pm});
    } catch(err) {
        res.status(500).json(err) 
    }
}

// GET ALL
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

// GET BY ID
const getPMFromDBById=async (req,res)=>{
    try{
        const projectMember=await projectMember.findByPk(req.params.id);
        if(projectMember)
        {
            return res.status(200).json(projectMember);
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
const updatePMFromDBById = async (req, res)=>{
    try {
        const projectMember=await projectMember.findByPk(req.params.id);
        if(projectMember) {
            const updatedPM = await projectMember.update(req.body);
            return res.status(200).json(updatedPM);
        } else {
            return res
            .status(404)
            .json({error: 'Project Member with id ${req.params.id} not found'});
        }
    } catch(err) {
        res.status(500).json(err);
    }
}

// DELETE
const deletePM = async (req, res) => {
    try {
      const projectMember = await projectMember.findByPk(req.params.id);
      if (projectMember) {
        await projectMember.destroy();
        return res.status(200).json("Entity deleted successfully!");
      } else {
        return res
          .status(404)
          .json({ error: `Project Member with id ${req.params.id} not found` });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

export
{
    insertPMIntoDatabase,
    getAllPMFromDB,
    getPMFromDBById,
    updatePMFromDBById,
    deletePM
}