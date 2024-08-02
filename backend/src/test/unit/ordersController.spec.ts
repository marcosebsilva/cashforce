import { OrdersController } from "../../controllers/ordersController";
import { OrdersService } from "../../services/ordersService";
import { NextFunction, Request, Response } from "express";
import "@types/jest";

describe("OrdersController", () => {
    const mockService = new OrdersService();

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should return a list of items", async () => {
        // setup
        const EXPECTED_RESPONSE_VALUE = ["item1", "item2"];
        mockService.getAllOrders = jest.fn().mockResolvedValue(EXPECTED_RESPONSE_VALUE);

        const mockRequest = {} as Request;
        const mockResponse = {
            send: jest.fn(() => {}),
        } as unknown as Response;

        const mockNext: NextFunction = jest.fn();
        const controller = new OrdersController(mockService);

        // assertion
        await controller.getAllOrders(mockRequest, mockResponse, mockNext);
        expect(mockService.getAllOrders).toHaveBeenCalled();
        expect(mockResponse.send).toHaveBeenCalledWith(EXPECTED_RESPONSE_VALUE);
    });

    it("should call next with an error if getAllOrders throws an error", async () => {
        // setup
        const error = new Error("An error occurred");
        mockService.getAllOrders = jest.fn().mockRejectedValue(error);
        const mockRequest = {} as Request;
        const mockResponse = {
            send: jest.fn(),
        } as unknown as Response;

        const mockNext: NextFunction = jest.fn();
        const controller = new OrdersController(mockService);

        // assertion
        await controller.getAllOrders(mockRequest, mockResponse, mockNext);
        expect(mockService.getAllOrders).toHaveBeenCalled();
        expect(mockNext).toHaveBeenCalledWith(error);
    })
});
