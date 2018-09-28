export class TodoElement {

    constructor(content) {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('d-flex');
        mainDiv.classList.add('justify-content-between');

        let textDiv = document.createElement('div');
        textDiv.classList.add('justify-content-start');
        textDiv.classList.add('align-self-center');
        
        let textInput = document.createElement('input');
        textInput.value = content;

        textDiv.appendChild(textInput);

        let optionsDiv = document.createElement('div');
        optionsDiv.classList.add('justify-content-end');

        let editButton = document.createElement('button');
        editButton.classList.add('btn');
        editButton.classList.add('btn-warning');
        
        let editImg = document.createElement('i');
        editImg.classList.add('far');
        editImg.classList.add('fa-edit');

        editButton.appendChild(editImg);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('btn');
        deleteButton.classList.add('btn-danger');

        let deleteImg = document.createElement('i');
        deleteImg.classList.add('far');
        deleteImg.classList.add('fa-trash-alt');

        deleteButton.appendChild(deleteImg);

        optionsDiv.appendChild(editButton);
        optionsDiv.appendChild(deleteButton);

        mainDiv.appendChild(textDiv);
        mainDiv.appendChild(optionsDiv);

        this.element = document.createElement("li");
        this.element.classList.add('list-group-item');
        this.element.appendChild(mainDiv);
        this.textInput = textInput;
        this.editButton = editButton;
        this.deleteButton = deleteButton;
    }

    listen() {
        this.editButton.addEventListener('click', evt => this.edit(evt));
        this.deleteButton.addEventListener('click', evt => this.delete(evt));
    }

    edit() {
        
    }

    delete() {
        this.destroy(this);
    }

    getNode() {
        return (this.element);
    }
}