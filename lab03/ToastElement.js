export class ToastElement {

    constructor(content) {
        this.content = content;
        this.element = document.createElement("div");
        this.element.classList.add('toast-element');
        this.element.appendChild(document.createTextNode(content));
        setTimeout(ToastElement.clearElement, 3000);
    }

    static clearElement() {
        let child = document.getElementById('toast-container').lastElementChild
        if (child !== undefined)
            document.getElementById('toast-container').removeChild(child);
    };

    setSuccess() {
        this.element.classList.add('success');
    }

    setError() {
        this.element.classList.add('error');
    }

    setInfo() {
        this.element.classList.add('info');
    }
}