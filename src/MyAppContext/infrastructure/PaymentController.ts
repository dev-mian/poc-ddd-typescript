import {Request, Response} from "express"
import { Payment } from "../domain/entities/Payment"


export default class PaymentController {
    index(req: Request, res: Response) {
        const payment1 = new Payment(12)
        const payment2 = new Payment(24)
        const payments = [payment1.amount, payment2.amount]
        return res.json(payments)
    }
}