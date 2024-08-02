import { Sequelize } from "sequelize-typescript";
import { initModels } from "../models/init-models";

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "user",
    password: "password",
    database: "cashforce_db",
    models: ["./../models"],
});

initModels(sequelize);

export default sequelize;
