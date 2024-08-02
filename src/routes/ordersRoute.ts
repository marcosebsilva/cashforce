import { Router } from "express";
import { OrdersController } from "../controllers/ordersController";
import { OrdersService } from "../services/ordersService";

const router = Router();

const orderService = new OrdersService();
const ordersController = new OrdersController(new OrdersService());

router.get("/", ordersController.getAllOrders.bind(ordersController));

export default {
    router,
    path: "/orders",
};
