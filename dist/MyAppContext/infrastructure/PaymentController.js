"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentCreationUseCase_1 = require("../application/PaymentCreationUseCase");
class PaymentController {
    constructor() {
        //TODO: dependency inyection
        this.paymentCreation = new PaymentCreationUseCase_1.PaymentCreationUseCase();
    }
    run(req, res) {
        //TODO: validate request data
        let paymentAmount = 180.50; // TODO: get values from request
        this.paymentCreation.run(paymentAmount);
        res.status(201);
    }
}
exports.default = PaymentController;
