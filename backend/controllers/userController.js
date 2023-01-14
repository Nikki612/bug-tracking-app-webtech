import { User } from "../models/user.js";
import {Op} from "sequelize"
import { Project } from "../models/project.js";

// INSERT INTO METHOD
const insertUserIntoDatabase=async (req,res)=>{
    try {
      const user = await User.create({
          id:req.body.id,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role
      });
      res.status(201).json({data: user});
  } catch(err) {
      res.status(500).json(err) 
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

// GET PROJECTS BY USER ID
const getProjectsByUserID = async (req, res, next) => {
    try {
      const userId = req.params.id;
      const projects = await Project.findAll({
        where: { userId },
        include: [
          {
            model: Project,
            as: 'project',
          },
        ],
      });
      if (projects.length === 0)
        res.status(404).json({ message: 'No projects found.' });
      else res.status(200).json({ data: projects });
    } catch (error) {
      next(error);
    }
  };

// GET PROJECTS WHERE THE USER IS TESTER
const getProjectsTester = async (req, res, next) => {
    try {
      const userId = req.params.id;
      const userRole = req.params.role==='tester';
      const projects = await Project.findAll({
        where: { userId },
        where: { userRole },
        include: [
          {
            model: Project,
            as: 'project',
          },
        ],
      });
      if (projects.length === 0)
        res.status(404).json({ message: 'No projects found.' });
      else res.status(200).json({ data: projects });
    } catch (error) {
      next(error);
    }
  };

export
{
    insertUserIntoDatabase,
    getAllUsersFromDB,
    getUserFromDBById,
    updateUSerFromDBById,
    deleteUser,
    getProjectsByUserID,
    getProjectsTester
};