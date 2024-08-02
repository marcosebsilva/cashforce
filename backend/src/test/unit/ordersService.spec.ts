import { OrdersService } from "../../services/ordersService";
import { orders } from "../../models/orders";
jest.mock("../../models/orders");

// there's not much to test on this get operations, but i think it shows that i can do it
// This is also the reason why this looks the same as the controllers 
describe("OrderServices", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should return a list of items", async () => {
        // setup
        const EXPECTED_RESPONSE_VALUE = ["egg1", "egg2"];
        orders.findAll = jest.fn().mockResolvedValue(EXPECTED_RESPONSE_VALUE);
        
        const service = new OrdersService();
        const result = await service.getAllOrders();

        // assertion
        expect(orders.findAll).toHaveBeenCalled();
        expect(result).toEqual(EXPECTED_RESPONSE_VALUE);
    });

    it("should throw a error if anything happens with sequelize", async () => {
        // setup
        const error = new Error("An error occurred");
        
        orders.findAll = jest.fn().mockRejectedValue(error);

        const service = new OrdersService();
        // assertion
        await expect(service.getAllOrders()).rejects.toThrow(error);
        expect(orders.findAll).toHaveBeenCalled();
    })
});