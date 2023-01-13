import { DataTypes} from "sequelize";
import {sequelize} from "../sequelize.js";

const ProjectMember=sequelize.define(
    "ProjectMember",
    {
        projectId:
        {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false,
        },
        userId:
        {
            type:DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        memberType:
        {
            type:DataTypes.STRING,
            allowNull: false
        }
    }
)

export {ProjectMember};