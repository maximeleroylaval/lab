import {TodoElement} from './TodoElement.js';

export class TodoList {

    constructor(){
        this.container = document.getElementById("todo-list");
    }

    add(todo) {
        let todoElement = new TodoElement(todo);
        todoElement.destroy = this.remove.bind(this);
        todoElement.listen();
        this.container.appendChild(todoElement.getNode());
    }

    remove(todoElement) {
        this.container.removeChild(todoElement.getNode());
    }
}