import express from "express";
import * as UserController from "../controllers/userController.js";

const router=express.Router();

router.post("/newUser", UserController.insertUserIntoDatabase);
router.get("/users", UserController.getAllUsersFromDB); // select *
router.get("/users/:userId", UserController.getUserFromDBById); //select from where pk=moveiId

export {router as UserRouter};








