import '../css/style.scss'
import  cardGroup  from './card'
import  buttonGroup  from './button'
import { leftButtonFunc, rightButtonFunc } from './buttonFun'

const app = document.getElementById('app') // Get the root element

app.appendChild(cardGroup) // Append the card group to the root element
cardGroup.appendChild(buttonGroup) // Append the button group to the card group


const leftButton = document.querySelector('.left.btn') // Get the left button
const rightButton = document.querySelector('.right.btn') // Get the right button

leftButton.addEventListener('click', leftButtonFunc)
rightButton.addEventListener('click', rightButtonFunc)

