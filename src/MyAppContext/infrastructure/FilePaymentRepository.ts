import { PaymentRepository } from "../domain/PaymentRepository";
import { Payment } from "../domain/entities/Payment";

export class FilePaymentRepository implements PaymentRepository {
    save(payment: Payment): void {
        console.log(payment.amount);
    }
}