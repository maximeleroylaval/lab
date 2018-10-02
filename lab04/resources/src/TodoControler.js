import { TodoList } from './TodoList.js';
import { Request } from './Request.js';
import { User } from './User.js'

export class TodoControler {

    constructor() {
        this.textInput = document.getElementById("todo-new-input");
        this.buttonAdd = document.getElementById("todo-new-add");
        this.buttonClear = document.getElementById("todo-new-clear");
        this.todoList = new TodoList((todoElement, callback) => this.remove(todoElement, callback), (todoElement, callback) => this.update(todoElement, callback));
    }

    listen() {
        this.buttonAdd.addEventListener('click', evt => this.add(evt));
        this.buttonClear.addEventListener('click', evt => this.clear(evt));
    }

    add() {
        let reqManager = new Request();
        let todo = this.textInput.value;
        todo = todo.trim();
        if (todo === undefined || todo === "")
            alert("Task definition cannot be empty");
        else {
            reqManager.post('/' + this.userId + '/tasks', {name: todo})
                .catch(err => {
                    alert(err);
                    User.load(this);
                }).then(response => this.todoList.add(response["name"], response["id"]));
        }
    }

    clear() {
        this.textInput.value = "";
    }

    run(){
        User.load(this);
    }


    remove(todoElement, callback){
        let reqManager = new Request();
        reqManager.remove('/' + this.userId + '/tasks/' + todoElement.id).catch(error => alert(error)).then(callback);
    }

    update(todoElement, callback){
        if (todoElement.textInput.value === undefined|| todoElement.textInput.value === "") {
            alert("Task definition cannot be empty");
        } else {
            let reqManager = new Request();
            reqManager.put('/' + this.userId + '/tasks/' + todoElement.id, {name: todoElement.textInput.value}).catch(error => {alert(error); todoElement.textInput.value = todoElement.value}).then(callback());
        }
    }

    load(userId) {
        this.todoList.clear();
        this.userId = userId;
        let reqManager = new Request();
        reqManager.get('/' + this.userId + '/tasks').then(response => {this.todoList.load(response["tasks"])}).catch(err => console.error(err));
    }

}