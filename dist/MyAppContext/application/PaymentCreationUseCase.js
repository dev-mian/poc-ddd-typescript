"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCreationUseCase = void 0;
const Payment_1 = require("../domain/entities/Payment");
const FilePaymentRepository_1 = require("../infrastructure/FilePaymentRepository");
class PaymentCreationUseCase {
    constructor() {
        //TODO: dependency inyection
        this.paymentRepository = new FilePaymentRepository_1.FilePaymentRepository();
    }
    run(amount) {
        const payment = new Payment_1.Payment(amount);
        this.paymentRepository.save(payment);
    }
}
exports.PaymentCreationUseCase = PaymentCreationUseCase;
