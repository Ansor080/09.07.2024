import {
    todos
} from "./lib/db.js"
import {
    reload
} from "./lib/utils.js"
import {
    ToDoItem
} from "./components/ToDo.js"

const container = document.querySelector('.container')
const form = document.querySelector('.todo form')

form.onsubmit = (e) => {
    e.preventDefault()

    const todo = {
        id: crypto.randomUUID(),
        title: new FormData(e.target).get('title'),
        time: new Date().toLocaleTimeString(),
        isDone: false
    }

    todos.push(todo)
    reload(todos, ToDoItem, container)
}

reload(todos, ToDoItem, container)