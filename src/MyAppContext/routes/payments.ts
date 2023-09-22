import express from "express"
import PaymentController from "../infrastructure/PaymentController"

const paymentController = new PaymentController

export const paymentRouter = express.Router()

paymentRouter.get("/", paymentController.run)