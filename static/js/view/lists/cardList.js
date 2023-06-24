export class Card {
    constructor(id, title) {
      this.singleCard.document.createElement('div')
    }
    appendTo(parentElement) {
        parentElement.insertBefore(this.singleCard, parentElement.lastChild);
    }

    getNode() {
        return this.singleCard;
    }
}

export function showCardList () {

}