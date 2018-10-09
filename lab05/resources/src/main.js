import { Request } from './Request.js';
import { Cookie } from './Cookie.js';
import { TaskModel } from './TaskModel.js';
import { UserModel } from './UserModel.js';

new Vue({
    el: '#app',

    data: {
        newTodo: '',
        userId: '',
        todoList: []
    },

    created() {
        this.loadUser();
    },

    methods: {
        clearTodo() {
            this.newTodo = '';
        },

        loadUser() {
            if (Cookie.get("user") === "") {
                Request.post('/users', {})
                    .then(response => {
                        this.user = new UserModel(response);
                        Cookie.set("user", JSON.stringify(this.user));
                        this.loadTodos();
                    })
                    .catch(error => console.error('Error:', error));
            } else {
                this.user = JSON.parse(Cookie.get("user"));
                this.loadTodos();
            }
        },

        loadTodos() {
            if (this.user.id === '') {
                this.loadUser();
            } else {
                Request.get('/' + this.user.id + '/tasks')
                .then(response => {
                    response["tasks"].forEach(element => this.todoList.push(new TaskModel(element)));
                })
                .catch(err => console.error(err));
            }
        },

        addTodo() {
            let todo = this.newTodo.trim();
            if (todo === undefined || todo === "")
                alert("Task definition cannot be empty");
            else {
                Request.post('/' + this.user.id + '/tasks', { name: todo })
                    .catch(err => {
                        alert(err);
                        User.load(this);
                    }).then(response => this.todoList.push(new TaskModel(response)));
            }
        },

        editTodo(todo) {
            if (todo.name === undefined || todo.name === "") {
                alert("Task definition cannot be empty");
            } else {
                Request.put('/' + this.user.id + '/tasks/' + todo.id, {
                    name: todo.name
                })
                    .catch(error => {
                        alert(error);
                    });
            }
        },

        deleteTodo(todo) {
            Request.remove('/' + this.user.id + '/tasks/' + todo.id)
                .catch(error => alert(error))
                .then(
                    this.todoList.splice(this.todoList.indexOf(todo), 1)
                );
        }
    }
});