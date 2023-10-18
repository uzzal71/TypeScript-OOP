export class CheckingAccount { // field
    private _blance = 0;
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    get balance() { // get block
        return this._blance;
    }

    set balance(val: number) { // set block
        this._blance = val;
    }

    deposit(amount: number) { // function
        this._blance += amount;
    }

    withdrawal(amount: number) { // function
        this._blance -= amount;
    }
}