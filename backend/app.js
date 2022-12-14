import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sequelize } from "./sequelize.js";
import { UserRouter } from "./routers/userRouter.js";
import {User} from "./models/user.js";
import {Bug} from "./models/bug.js";
import {Project} from "./models/project.js";
import {ProjectMember} from "./models/projectmember.js";

const port=5001;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api",UserRouter)
app.listen(port,async ()=>{
    try {
        sequelize.authenticate();
        console.log("Authentication successful!");
        
    } catch (error) {
        console.error("Unable to connect to the database", error);
    }
});
console.log("API is running at port: ",port);

//TODO: TABLE RELATIONSHIPS

