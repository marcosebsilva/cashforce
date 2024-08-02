import express from "express";
import swaggerUi from "swagger-ui-express";
import { docs } from "./config/swagger";
import sequelize from "./config/database";
const app = express();
const port = process.env.PORT || 3000;

// config
app.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));
app.use(express.json());

sequelize.sync();

app.listen(port, () => console.log(`Up and running on ${port}.`));
