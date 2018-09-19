import {ToastList} from './ToastList.js';

let list = new ToastList();

let btnSuccess = document.getElementById('success');
let btnError = document.getElementById('error');
let btnInfo = document.getElementById('info');


btnSuccess.onclick = function() {
    let value = document.getElementById('text').value;
    if (value !== undefined && value !== "")
        list.createSuccessToast(value);
};

btnError.onclick = function() {
    let value = document.getElementById('text').value;
    if (value !== undefined && value !== "")
        list.createErrorToast(value);
};

btnInfo.onclick = function() {
    let value = document.getElementById('text').value;
    if (value !== undefined && value !== "")
        list.createInfoToast(value);
};