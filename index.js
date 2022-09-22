import './style.scss'

const addFunction = (event) => {
    event.preventDefault()

    let inputText = document.querySelector("#inputlist")
    let newItem = document.createElement('div')
    newItem.classList.add('box')
    newItem.innerHTML = `<input class="checkbox" type="checkbox">
                        <span id="text">${inputText.value}</span>
                        <button class="delete-btn">Delete</button>`

    document.querySelector('.list').append(newItem)

    deleteFunction()
    checkboxFunction()
}

const deleteFunction = () => {
    let deleteButtons = document.querySelectorAll(".delete-btn")

    deleteButtons.forEach(deleteButton => {
        deleteButton.onclick = () => {
            deleteButton.parentNode.remove()
        }
    })
}

const checkboxFunction = () => {
    let checkboxes = document.querySelectorAll(".checkbox")

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', event => {
            checkbox.nextElementSibling.style.textDecoration = "none"

            if (event.currentTarget.checked) {
                checkbox.nextElementSibling.style.textDecoration = "line-through"
            }
        })
    })
}

let form = document.querySelector("#add-new-todo")
form.addEventListener("submit", addFunction, false)