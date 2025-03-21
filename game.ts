import {symbols, types, Card} from "./card"

class Game {
    private _funds: number;
    private _playerCards: Card[];
    private _dealerCards: Card[];

    private _playerCardsValue: number;
    private _dealerCardsValue: number;

    constructor() {
        this._funds = 100
        this._playerCards = []
        this._dealerCards = []

        this._playerCardsValue = 0
        this._dealerCardsValue = 0
    }

    get funds() : number {
        return this.funds
    }

    set funds(funds: number) {
        this._funds = funds
    }

    get playerCards() : Card[] {
        return this._playerCards
    }

    set playerCards(cards: Card[]) {
        this._playerCards = cards

    }

    get dealerCards() : Card[] {
        return this._dealerCards
    }

    set dealerCards(cards: Card[]) {
        this._dealerCards = cards

    }

    get playerCardsValue() : number {
        return this._playerCardsValue
    }

    set playerCardsValue(value: number) {
        this._playerCardsValue = value
    }

    get dealerCardsValue() : number {
        return this._dealerCardsValue
    }

    set dealerCardsValue(value: number) {
        this._dealerCardsValue = value
    }

    // funkcija koja dodaje kartu u ruku igrača
    addPlayerCard(card: Card) : void {
        this._playerCards.push(card)
    }

    // funkcija koja dodaje kartu u ruku dilera
    addDealerCard(card: Card) : void {
        this._dealerCards.push(card)
    }

    // funkcija koja računa vrednost karata u ruci igrača
    calculatePlayerCardsValue() : void {
        this._playerCardsValue = 0

        // pravimo niz koji pamti pozicije karata koje su asovi
        let acesPositions: number[] = []

        for (let i = 0; i < this._playerCards.length; i++) {
            if (this._playerCards[i].value === Infinity) {
                acesPositions.push(i)
            } else {
                this._playerCardsValue += this._playerCards[i].value
            }
        }

        // dodelimo sva asova vrednost 11, i onda dinamički smanjujemo asove dok ne bude ukupno manje od 21
        for (let i = 0; i < acesPositions.length; i++) {
            this._playerCardsValue += 11
        }

        let remainingAces = acesPositions.length

        while (this._playerCardsValue > 21 && remainingAces > 0) {
            this._playerCardsValue -= 10
            remainingAces--
        }
    }

    // funkcija koja računa vrednost karata u ruci dilera
    calculateDealerCardsValue() : void {
        this._dealerCardsValue = 0

        // pravimo niz koji pamti pozicije karata koje su asovi
        let acesPositions: number[] = []

        for (let i = 0; i < this._dealerCards.length; i++) {
            if (this._dealerCards[i].value === Infinity) {
                acesPositions.push(i)
            } else {
                this._dealerCardsValue += this._dealerCards[i].value
            }
        }

        // dodelimo sva asova vrednost 11, i onda dinamički smanjujemo asove dok ne bude ukupno manje od 21
        for (let i = 0; i < acesPositions.length; i++) {
            this._dealerCardsValue += 11
        }

        let remainingAces = acesPositions.length

        // kod dilera je drugačija situacija, jer se pravila razlikuju
        
        while (this._dealerCardsValue > 21 && remainingAces > 0) {
            this._dealerCardsValue -= 10
            remainingAces--
        }
    }
}