import { images as imagesInfo, buttons as buttonsInfo } from '../../data/db.json'

const cardGroup = document.createElement('div') // Create a card group element
cardGroup.classList.add('card-group') // Add a class to the card

imagesInfo.forEach(imageInfo => {
  const card = createCard(imageInfo)
  cardGroup.appendChild(card) // Append the card to the card group
})

function createCard(imageInfo) {
  const card = document.createElement('div') // Create a card element
  card.classList.add('card') // Add a class to the card
  card.style.backgroundImage = `url(${imageInfo.url})` // Set the background image of the card
  return card
}

export default cardGroup
// export { cardGroup }