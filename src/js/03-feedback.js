import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
pageReload();

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function pageReload() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Будь ласка, заповніть усі поля!');
  }

  console.log({ email: email.value, message: message.value });
  
  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  dataForm = {};
}