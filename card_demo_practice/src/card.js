import { info } from "sass"

export class CardGroup {
  #dom = null
  #cards = null
  constructor(cards) {
    this.#cards = cards
  }

  build = () => {
    this.#dom = document.createElement('div')
    this.#dom.classList.add('card-group')
    this.#cards.forEach(card => {
      this.#dom.appendChild(new Card(card).build())
    })
    return this.#dom
  }
  get dom() {
    return this.#dom
  }
}

class Card {
  #dom = null 
  #info = null
  constructor(info) {
    this.#info = info
  }

  build = () => {
    this.#dom = document.createElement('img')
    this.#dom.classList.add('card')
    this.#dom.style.backgroundImage = `url(${this.#info.url})`
  }
}