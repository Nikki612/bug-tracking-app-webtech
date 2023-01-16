import { DataTypes} from "sequelize";
import {sequelize} from "../sequelize.js";

const User=sequelize.define(
    "User",
    {
        id:
        {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email:
        {
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail:true
        },
        password:
        {
            type:DataTypes.STRING,
            allowNull: false
        }
    }
)

export {User};