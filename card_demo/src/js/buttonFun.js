import  cardGroup  from './card'
import  buttonGroup  from './button'

const leftButton = document.querySelector('.left.btn') // Get the left button
const rightButton = document.querySelector('.right.btn') // Get the right button

// console.log(leftButton, rightButton) // Log the buttons to the console;

function leftButtonFunc(event) {
  console.log(event);
  console.log('left button clicked');
  event.preventDefault()
  const cardList = document.querySelectorAll('.card')
  cardGroup.insertBefore(cardList[0],buttonGroup)
}
function rightButtonFunc(event) {
  console.log(event);
  console.log('right button clicked');
  event.preventDefault()
  const cardList = document.querySelectorAll('.card')
  cardGroup.insertBefore(cardList[cardList.length-1], cardList[0])
}

export { leftButtonFunc, rightButtonFunc }