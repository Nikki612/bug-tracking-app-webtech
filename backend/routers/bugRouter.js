import express from "express";
import * as BugController from "../controllers/bugController.js";

const router=express.Router();

router.post("/newBug", BugController.insertBugIntoDatabase); // insert
router.get("/bugs", BugController.getAllBugsFromDB);  // get all
router.get("/bugs/:bugId", BugController.getBugFromDBById); // get by id
router.put("/bugs/:bugId", BugController.updateBugFromDBById); // update by id
router.delete("/bugs/:bugId", BugController.deleteBug); // delete

export {router as BugRouter};