import { TodoElement } from './TodoElement.js';

export class TodoList {

    constructor(rmvFnc, updtFnc) {
        this.container = document.getElementById("todo-list");
        this.rmvFnc = rmvFnc;
        this.updtFnc = updtFnc;
    }

    add(todo, id) {
        let todoElement = new TodoElement(todo, id, (todoElement) => this.remove(todoElement), (todoElement, callback) => this.update(todoElement, callback));
        todoElement.listen();
        this.container.appendChild(todoElement.getNode());
    }

    load(tasks) {
        tasks.forEach(element => this.add(element.name, element.id));
    }

    remove(todoElement) {
        this.rmvFnc(todoElement, () => {
            this.container.removeChild(todoElement.getNode());
        });
    }

    update(todoElement, callback) {
        this.updtFnc(todoElement, callback);
    }

    clear(){
        this.container.innerHTML = "";
    }
}