import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        if (typeof amount !== "number") {
            throw new Error('Amount must be a number')
        }
        this._amount = amount;
        if (currency instanceof Currency) {
            this._currency = currency;
        }
        else {
            throw new Error("currency must be an instance of Currency");
        }
    }
    get amount() {
        return this._amount;
    }
    set amount(value) {
        if (typeof value !== "number") {
            throw new Error('Amount must be a number')
        }
        this._amount = value;
    }
    get currency() {
        return this._currency;
    }
    set currency(value) {
        if (value instanceof Currency) {
            this._currency = value;
        }
        else {
            throw new Error("currency must be an instance of Currency");
        }
    }
    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }
    static convertPrice(amount, conversionRate) {
        if (typeof amount !== "number" || typeof conversionRate !== "number") {
            throw new Error('amount or converionRate must ne a number');
        }
        return amount * conversionRate;
    }
}
