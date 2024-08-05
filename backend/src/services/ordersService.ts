import { orders } from "../models/orders";
import { buyers } from "../models/buyers";
import { mapUsersNfeList, UsersNfeList } from "../mappers/UserNfeList";
import { providers } from "../models/providers";

export class OrdersService {
    public async getAllOrders(): Promise<UsersNfeList[]> {
        const result = await orders.findAll({
            include: [
                {
                    model: buyers,
                    as: "buyer",
                    attributes: ["id", "name"],
                },
                {
                    model: providers,
                    as: "provider",
                    attributes: ["id", "name"],
                }
            ],
        });

        return mapUsersNfeList(result);
    }
}
