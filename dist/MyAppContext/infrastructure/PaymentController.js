"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Payment_amount;
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    constructor(amount) {
        _Payment_amount.set(this, void 0);
        __classPrivateFieldSet(this, _Payment_amount, amount, "f");
    }
    get amount() {
        return __classPrivateFieldGet(this, _Payment_amount, "f");
    }
}
_Payment_amount = new WeakMap();
class PaymentController {
    index(req, res) {
        const payment1 = new Payment(12);
        const payment2 = new Payment(24);
        const payments = [payment1.amount, payment2.amount];
        return res.json(payments);
    }
}
exports.default = PaymentController;
