import './style.scss'
import { CardGroup } from './card'
import { images } from '../data/images'

export const dom = document.getElementById('app')
const cardGroup = new CardGroup(images)
cardGroup.build()
dom.appendChild(cardGroup.dom)