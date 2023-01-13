import express from "express";
import * as ProjectController from "../controllers/projectControler.js";

const router=express.Router();

router.post("/newProject", ProjectController.insertProjectIntoDatabase); // insert
router.get("/projects", ProjectController.getAllProjectsFromDB);  // get all
router.get("/projects/:projectId", ProjectController.getProjectFromDBById); // get by id
router.put("/projects/:projectId", ProjectController.updateProjectFromDBById); // update by id
router.delete("/projects/:projectId", ProjectController.deleteProject); // delete

export {router as ProjectRouter};