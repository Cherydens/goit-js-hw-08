import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(handleInput, 500));
feedbackForm.addEventListener('submit', handleSubmit);

populateFeedbackForm(JSON.parse(localStorage.getItem(STORAGE_KEY)));

function populateFeedbackForm(data) {
  if (data) {
    feedbackForm.email.value = data.email;
    feedbackForm.message.value = data.message;
  }
}

function handleInput(event) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(setData()));
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(setData());
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function setData() {
  return {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
  };
}
