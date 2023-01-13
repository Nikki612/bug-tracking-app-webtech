import express from "express";
import * as UserController from "../controllers/userController.js";

const router=express.Router();

router.post("/newUser", UserController.insertUserIntoDatabase); // insert
router.get("/users", UserController.getAllUsersFromDB);  // get all
router.get("/users/:userId", UserController.getUserFromDBById); // get by id
router.put("/users/:userId", UserController.updateUSerFromDBById); // update by id
router.delete("/users/:userId", UserController.deleteUser); // delete

export {router as UserRouter};