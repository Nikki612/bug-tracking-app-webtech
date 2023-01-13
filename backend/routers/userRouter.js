import express from "express";
import * as UserController from "../controllers/userController.js";

const router=express.Router();

router.post("/newUser", UserController.insertUserIntoDatabase);
router.get("/users", UserController.getAllUsersFromDB); 
router.get("/users/:userId", UserController.getUserFromDBById); 

export {router as UserRouter};








