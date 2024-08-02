import express from "express";
import sequelize from "./config/database";
const app = express();
const port = process.env.PORT || 3000;
import fs from "fs";
import path from "path";

// config
app.use(express.json());
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
