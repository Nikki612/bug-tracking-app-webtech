import { DataTypes} from "sequelize";
import {sequelize} from "../sequelize.js";

const Project=sequelize.define(
    "Project",
    {
        projectId:
        {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:
        {
            type:DataTypes.STRING,
            allowNull: false,
        },
        description:
        {
            type:DataTypes.STRING,
            allowNull: false
        },
        repository:
        {
            type:DataTypes.STRING,
            allowNull: false,
            isUrl: true
        }
    }
)

export {Project};