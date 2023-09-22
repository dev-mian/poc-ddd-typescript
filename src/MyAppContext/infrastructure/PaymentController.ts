import { Request, Response } from "express"
import { Controller } from "./Controller"
import { PaymentCreationUseCase } from "../application/PaymentCreationUseCase"

export default class PaymentController implements Controller {
    private paymentCreation: PaymentCreationUseCase

    constructor() {
        //TODO: dependency inyection
        this.paymentCreation = new PaymentCreationUseCase()
    }

    run(req: Request, res: Response): void | Promise<void> {
        //TODO: validate request data
        let paymentAmount = 180.50 // TODO: get values from request

        this.paymentCreation.run(paymentAmount)
        
        res.status(201)
    }
}