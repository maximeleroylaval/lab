export class TodoElement {

    constructor(content, id, rmvFnc, updtFnc) {
        this.value = content;
        this.id = id;

        this.element = document.createElement("li");
        this.element.classList.add('list-group-item');
        this.element.appendChild(this.createDiv());
        this.destroy = rmvFnc;
        this.update = updtFnc;
    }

    getNode() {
        return (this.element);
    }

    createDiv() {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('d-flex');

        let text = this.createText();
        let options = this.createOptions();

        mainDiv.appendChild(text);
        mainDiv.appendChild(options);

        return (mainDiv);
    }

    createText() {
        let textDiv = document.createElement('div');
        textDiv.classList.add('col-sm-10');

        let textInput = document.createElement('input');
        textInput.classList.add('form-control');
        textInput.type = 'text';
        textInput.readOnly = true;
        textInput.value = this.value;

        this.textInput = textInput;

        textDiv.appendChild(textInput);

        return (textDiv);
    }

    static createDelete() {
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('btn');
        deleteButton.classList.add('btn-danger');

        let deleteImg = document.createElement('i');
        deleteImg.classList.add('far');
        deleteImg.classList.add('fa-trash-alt');

        deleteButton.appendChild(deleteImg);

        return (deleteButton);
    }

    static createEdit() {
        let editButton = document.createElement('button');
        editButton.classList.add('btn');
        editButton.classList.add('btn-warning');

        let editImg = document.createElement('i');
        editImg.classList.add('far');
        editImg.classList.add('fa-edit');

        editButton.appendChild(editImg);

        return (editButton);
    }

    createOptions() {
        let optionsDiv = document.createElement('div');
        optionsDiv.classList.add('col-sm-2');
        optionsDiv.classList.add('d-flex');
        optionsDiv.classList.add('justify-content-around');

        this.editButton = TodoElement.createEdit();
        this.deleteButton = TodoElement.createDelete();

        optionsDiv.appendChild(this.editButton);
        optionsDiv.appendChild(this.deleteButton);

        return (optionsDiv);
    }

    listen() {
        this.editButton.addEventListener('click', evt => this.edit(evt));
        this.deleteButton.addEventListener('click', evt => this.remove(evt));
    }

    edit() {
        if (this.textInput.readOnly === true) {
            this.textInput.readOnly = false;
            this.editButton.firstChild.classList.remove('fa-edit');
            this.editButton.firstChild.classList.add('fa-save');
        } else {
            this.update(this, () => {
                this.value = this.textInput.value;
                this.textInput.readOnly = true;
                this.editButton.firstChild.classList.remove('fa-save');
                this.editButton.firstChild.classList.add('fa-edit');
            });
        }
    }

    remove() {
        this.destroy(this);
    }
}