import { TodoList } from './TodoList.js';

export class TodoControler {

    constructor() {
        this.textInput = document.getElementById("todo-new-input");
        this.buttonAdd = document.getElementById("todo-new-add");
        this.buttonClear = document.getElementById("todo-new-clear");
        this.todoList = new TodoList();
    }

    listen() {
        this.buttonAdd.addEventListener('click', evt => this.add(evt));
        this.buttonClear.addEventListener('click', evt => this.clear(evt));
    }

    add() {
        let todo = this.textInput.value;
        this.todoList.add(todo);
    }

    clear() {
        this.textInput.value = "";
    }
}