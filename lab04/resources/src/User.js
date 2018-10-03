import { Request } from './Request.js';
import { Cookie } from './Cookie.js';

export class User {

    static load(todos) {
        if (Cookie.get("user_id") === "") {
            Request.post('/users', {}).then(response => {Cookie.set("user_id", response.id); todos.load(response.id)})
                .catch(error => console.error('Error:', error));
        } else {
            let userId = Cookie.get("user_id");
            todos.load(userId);
        }
        todos.listen();
    }
}