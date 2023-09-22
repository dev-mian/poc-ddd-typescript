"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilePaymentRepository = void 0;
class FilePaymentRepository {
    save(payment) {
        console.log(payment.amount);
    }
}
exports.FilePaymentRepository = FilePaymentRepository;
