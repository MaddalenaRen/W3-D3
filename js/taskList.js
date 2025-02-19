const pageForm = document.getElementById('task-list-form')
const listContainer = document.getElementById('saved-elements')

const nameInput = document.getElementById('name')
pageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const taskName = nameInput.value.trim()

    if (!taskName) {
        alert('Il campo non può essere vuoto!')
        return
    }
    const elemento = {
        name: nameInput.value
    }
    console.log('elemento', elemento)

    const cardList = document.createElement('li')
    cardList.innerText = elemento.name

    cardList.addEventListener('click', () => {
        cardList.classList.toggle('completed')
        cardList.classList('line-trough')
    })

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', (e) => { cardList.remove() })

    cardList.appendChild(deleteButton)
    listContainer.appendChild(cardList)



})

