import { Project } from "../models/project.js";
import {Op} from "sequelize"

//INSERT INTO METHOD
const insertProjectIntoDatabase=async (req,res)=>{

    try{
        const receivedProject=req.body;
        await Project.create(receivedProject);
        res.status(200).json("Object has been added to DB!"); //for success 
    }
    catch(err){
        return res.status(500).json(err) //for client error
    }
}

// GET ALL
const getAllProjectsFromDB=async (req,res)=>{

    try{
        const projects=await Project.findAll();
        return res.status(200).json(projects);

    }
    catch(err)
    {
        res.status(500).json(err) 
    }
}

// GET BY ID
const getProjectFromDBById=async (req,res)=>{
    try{
        const project =await Project.findByPk(req.params.id);
        if(project)
        {
            return res.status(200).json(project);
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
const updateProjectFromDBById = async (req, res)=>{
    try {
        const project=await Project.findByPk(req.params.id);
        if(project) {
            const updatedProject = await project.update(req.body);
            return res.status(200).json(updatedProject);
        } else {
            return res
            .status(404)
            .json({error: 'Project with id ${req.params.id} not found'});
        }
    } catch(err) {
        res.status(500).json(err);
    }
}

// DELETE
const deleteProject = async (req, res) => {
    try {
      const project = await Project.findByPk(req.params.id);
      if (project) {
        await project.destroy();
        return res.status(200).json("Entity deleted successfully!");
      } else {
        return res
          .status(404)
          .json({ error: `Project with id ${req.params.id} not found` });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

export
{
    insertProjectIntoDatabase,
    getAllProjectsFromDB,
    getProjectFromDBById,
    updateProjectFromDBById,
    deleteProject
}