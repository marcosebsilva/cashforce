import { Request, Response, NextFunction } from "express";
import { OrdersService } from "../services/ordersService";

export class OrdersController {
    constructor(private service: OrdersService) {
        this.service = service;
    }
    public async getAllOrders(req: Request, res: Response, next: NextFunction) {
        try {
            const buyers = await this.service.getAllOrders();
            res.send(buyers);
        } catch (error) {
            next(error);
        }
    }
}
