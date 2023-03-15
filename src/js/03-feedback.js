import throttle from 'lodash.throttle';

const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const btnEl = document.querySelector('button');

const obj = {
    email: '',
    message: ''
}

const setInputsFromLocalStorage = () => {
    try {
        emailEl.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
        messageEl.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
    } catch (error) {
        console.log('Local storage is empty:(');
    }
    
}

setInputsFromLocalStorage();

emailEl.addEventListener('input', throttle((event) => {
    obj.email = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}, 500))

messageEl.addEventListener('input', throttle((event) => {
    obj.message = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(obj))
}, 500))

btnEl.addEventListener('click', (event) => {
    event.preventDefault();

    obj.email = '';
    obj.message = '';
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
    emailEl.value = '';
    messageEl.value = '';
    console.log(obj);
})
