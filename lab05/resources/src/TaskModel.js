export class TaskModel {
    constructor(response) {
        this.id = response.id;
        this.name = response.name;
    }
}