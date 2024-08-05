import { Sequelize } from "sequelize-typescript";
import { initModels } from "../models/init-models";

const sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: ["./../models"],
});

initModels(sequelize);

export default sequelize;
