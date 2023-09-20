export class Payment {
    #amount: number

    constructor(amount: number) {
        this.#amount = amount
    }

    get amount(): number {
        return this.#amount
    }
}