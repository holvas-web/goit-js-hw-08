import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let formData = {};

form.addEventListener('input', throttle(setLocalValue, 500));
form.addEventListener('submit', submitValues);

function setLocalValue(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function getFormsValue(form) {
  if (localStorage.getItem(LOCAL_KEY)) {
    formData = JSON.parse(localStorage.getItem(LOCAL_KEY));
    Object.entries(formData).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  }
}
getFormsValue(form);

function submitValues(e) {
  e.preventDefault();
  if (!form.elements.email.value || !form.elements.message.value) {
    alert('All fields must be filled!');
    return;
  } else {
    console.log(formData);
    localStorage.removeItem(LOCAL_KEY);
    form.reset();
  }
}