import { images as imagesInfo, buttons as buttonsInfo } from '../../data/db.json'

const buttonGroup = document.createElement('div') // Create a button group element
buttonGroup.classList.add('btn-group') // Add a class to the button group

buttonsInfo.forEach(buttonInfo => {
  const button = createButton(buttonInfo)
  buttonGroup.appendChild(button) // Append the button to the button group
})

function createButton(buttonInfo) {
  const button = document.createElement('i') // Create a button element
  buttonInfo.classList.forEach(className =>
    button.classList.add(className)
  ) // Add classes to the button
  return button
}

export default buttonGroup