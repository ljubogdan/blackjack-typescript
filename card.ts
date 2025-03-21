export const symbols = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
export const types = ['♠', '♣', '♦', '♥'];

export class Card {
    private _symbol: string;
    private _type: string;
    private _name: string;
    private _value: number;

    constructor(symbol: string, type: string, name: string, value: number) {
        this._symbol = symbol;
        this._type = type;
        this._name = name;
        this._value = value;
    }

    get symbol() {
        return this._symbol;
    }

    get type() {
        return this._type;
    }

    get name() {
        return this._name;
    }

    get value() {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    set name(name: string) {
        this._name = name;
    }

    set type(type: string) {
        this._type = type;
    }

    set symbol(symbol: string) {
        this._symbol = symbol;
    }

    generateAndSetName() : void {
        this._name = this._symbol + this._type
    }

    calculateAndSetValue() : void {
        if (!isNaN(Number(this._symbol))) {
            this._value = Number(this._symbol)
        } else if (this._symbol === 'A') {
            this._value = Infinity
        } else {
            this._value = 10
        }
    }
}