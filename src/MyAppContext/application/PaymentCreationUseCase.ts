import { PaymentRepository } from "../domain/PaymentRepository";
import { Payment } from "../domain/entities/Payment";
import { FilePaymentRepository } from "../infrastructure/FilePaymentRepository";

export class PaymentCreationUseCase {
    private readonly paymentRepository: PaymentRepository

    constructor() {
        //TODO: dependency inyection
        this.paymentRepository = new FilePaymentRepository()
    }

    run(amount: number) {
        const payment = new Payment(amount)

        this.paymentRepository.save(payment)
    }
}