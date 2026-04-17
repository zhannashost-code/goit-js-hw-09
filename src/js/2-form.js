const formData = {
  email: "",
  message: ""
};
const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  formData = JSON.parse(savedData);

  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

form.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  }

  if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();

  formData = { email: '', message: '' };
});