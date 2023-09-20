"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRouter = void 0;
const express_1 = __importDefault(require("express"));
const PaymentController_1 = __importDefault(require("../infrastructure/PaymentController"));
const paymentController = new PaymentController_1.default;
exports.paymentRouter = express_1.default.Router();
exports.paymentRouter.get("/", paymentController.index);
