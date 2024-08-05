import 'dotenv/config';
import express from "express";
import sequelize from "./config/database";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const port = process.env.PORT || 8000;

// config
app.use(express.json());
app.use(cors())
sequelize.sync();

// loads all routes from the routes folder into the app
const routesPath = path.join(__dirname, "routes");
fs.readdirSync(routesPath).forEach((file) => {
    const route = require(path.join(routesPath, file)).default;
    app.use(route.path, route.router);
});

// start the server
app.listen(port, () => console.log(`Up and running on ${port}.`));

export default app;
