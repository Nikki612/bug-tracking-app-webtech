import { Sequelize } from "sequelize";

const sequelize=new Sequelize({
    dialect:"sqlite",
    storage:"./backend/database/bugapp.db"
})
sequelize.sync({alter:true}).then(()=>{    //alter true checks if the table has been created,if yes we just update
    console.log("All the models have been synced")
})
export {sequelize};