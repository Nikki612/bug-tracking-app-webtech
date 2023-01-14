import express from "express";
import * as UserController from "../controllers/userController.js";
import { User } from "../models/user.js";

const router=express.Router();

router.post("/newUser", UserController.insertUserIntoDatabase); // insert
router.get("/users", UserController.getAllUsersFromDB);  // get all
router.get("/users/:userId", UserController.getUserFromDBById); // get by id
router.put("/users/:userId", UserController.updateUSerFromDBById); // update by id
router.delete("/users/:userId", UserController.deleteUser); // delete

router.get("/users/:userId/projects", UserController.getProjectsByUserID) // get projects by user Id

router.get("users/:userId/projects/tester", UserController.getProjectsTester) // get projects where user role is tester

export {router as UserRouter};