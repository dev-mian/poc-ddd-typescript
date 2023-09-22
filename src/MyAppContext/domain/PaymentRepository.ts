import { Payment } from "./entities/Payment";

export interface PaymentRepository {
    save(payment: Payment): void;
}