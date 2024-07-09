import { todos } from "../lib/db.js"

export function ToDoItem(item) {
    const box = document.createElement('div')
    const head_item = document.createElement('div')
    const span = document.createElement('span')
    const btn_del = document.createElement('button')
    const edit = document.createElement('button')
    const time = document.createElement('span')
    const dialog = document.querySelector('dialog')

    box.classList.add('box')
    head_item.classList.add('head_item')
    span.innerHTML = item.title
    btn_del.innerHTML = "delete"
    edit.innerHTML = "edit"
    time.innerHTML = item.time

    box.append(head_item, time)
    head_item.append(span, btn_del, edit)


    if (item.isDone === true) {
        span.classList.add('done')
    }


    btn_del.ondblclick = () => {
        const idx = todos.indexOf(item)

        todos.splice(idx, 1)
        box.remove()
    }

    span.onclick = () => {
        if (item.isDone === false) {
            span.classList.add('done')
            item.isDone = true
        } else {
            item.isDone = false
            span.classList.remove('done')
        }
    }

    edit.onclick = () => {
        openAndSave(item,span)
    }

    function openAndSave(item, span) {
        const dialog = document.querySelector('dialog')
        const form_dialog = document.forms.namedItem('changeItem')
        dialog.showModal()

        form_dialog.onsubmit = (e) => {
            e.preventDefault()

            span.innerHTML = new FormData(e.target).get('title')
            item.title = new FormData(e.target).get('title')

            e.target.reset()

            dialog.close()
        }

    }

    return box
}