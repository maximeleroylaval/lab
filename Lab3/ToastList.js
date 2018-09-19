import {ToastElement} from './ToastElement.js';

export class ToastList {

    constructor(){
        this.container = document.getElementById("toast-container");

    }

    createSuccessToast (content) {
        let element = new ToastElement(content);
        element.setSuccess();
        this.container.insertBefore(element.element, this.container.firstElementChild);
    };

    createErrorToast (content) {
        let element = new ToastElement(content);
        element.setError();
        this.container.insertBefore(element.element, this.container.firstElementChild);
    };

    createInfoToast (content) {
        let element = new ToastElement(content);
        element.setInfo();
        this.container.insertBefore(element.element, this.container.firstElementChild);
    };
}