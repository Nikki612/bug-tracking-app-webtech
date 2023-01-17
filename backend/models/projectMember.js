import { DataTypes} from "sequelize";
import {sequelize} from "../sequelize.js";

const ProjectMember=sequelize.define(
    "ProjectMember",
    {
        projectMemberId:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        projectId:
        {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            allowNull: false,
            unique: false
        },
        userId:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },
        memberType:
        {
            type:DataTypes.STRING,
            allowNull: false
        }
    }
)

export {ProjectMember};