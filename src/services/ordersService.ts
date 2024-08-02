import { orders } from "../models/orders";
import { buyers } from "../models/buyers";

export class OrdersService {
    public async getAllOrders(): Promise<orders[]> {
        return orders.findAll({
            include: [
                {
                    model: buyers,
                    as: "buyer",
                    attributes: ["id", "name"],
                },
            ],
        });
    }
}
