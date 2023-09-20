class Payment {
    #id: number

    constructor(id: number) {
        this.#id = id
    }

    get id() {
        return this.#id
    }
}

interface PaymentRepository {
    getById(id: number): Payment
}

class TestPaymentRepository implements PaymentRepository {
    getById(id: number): Payment {
        return new Payment(id)
    }
}

const repository = new TestPaymentRepository()

const payment = repository.getById(12)

console.log(payment.id)