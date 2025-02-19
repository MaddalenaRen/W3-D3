const pageForm = document.getElementById('task-list-form')
const listContainer = document.getElementById('saved-elements')

const nameInput = document.getElementById('name')
pageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const elemento = {
        name: nameInput.value
    }
    console.log('elemento', elemento)

    const cardList = document.createElement('li')
    cardList.innerText = elemento.name

    cardList.addEventListener('click', () => {
        cardList.classList.toggle('completed')
    })

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Elimina'
    deleteButton.addEventListener('click', (e) => { cardList.classList('line-trough') })

    cardList.appendChild(deleteButton)
    listContainer.appendChild(cardList)



})

