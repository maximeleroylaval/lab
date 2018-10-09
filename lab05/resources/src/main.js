import { Request } from './Request.js';
import { Cookie } from './Cookie.js';

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
            if (Cookie.get("user_id") === "") {
                Request.post('/users', {})
                    .then(response => {
                        Cookie.set("user_id", response.id);
                        this.userId = userId;
                        this.loadTodos();
                    })
                    .catch(error => console.error('Error:', error));
            } else {
                let userId = Cookie.get("user_id");
                this.userId = userId;
                this.loadTodos();
            }
        },

        loadTodos() {
            if (this.userId === '') {
                this.loadUser();
            } else {
                Request.get('/' + this.userId + '/tasks')
                .then(response => {
                    response["tasks"].forEach(element => this.todoList.push({
                        "name" : element.name, 
                        "id" : element.id
                    }));
                })
                .catch(err => console.error(err));
            }
        },

        addTodo() {
            let todo = this.newTodo.trim();
            if (todo === undefined || todo === "")
                alert("Task definition cannot be empty");
            else {
                Request.post('/' + this.userId + '/tasks', { name: todo })
                    .catch(err => {
                        alert(err);
                        User.load(this);
                    }).then(response => this.todoList.push({
                        "name": response["name"],
                        "id": response["id"]
                    }));
            }
        },

        editTodo(todo) {
            if (todo.name === undefined|| todo.name === "") {
                alert("Task definition cannot be empty");
            } else {
                Request.put('/' + this.userId + '/tasks/' + todo.id, {
                    name: todo.name
                })
                    .catch(error => {
                        alert(error);
                    })
                    .then(
                        
                    );
            }
        },

        deleteTodo(todo) {
            Request.remove('/' + this.userId + '/tasks/' + todo.id)
                .catch(error => alert(error))
                .then(
                    this.todoList.splice(this.todoList.indexOf(todo), 1)
                );
        }
    }
});