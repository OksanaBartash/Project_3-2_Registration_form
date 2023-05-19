"use strict"
console.log("Hello!");

const form = document.querySelector('form');
const usernameInput = document.getElementById('userName');
const passwordInput = document.getElementById('userPassword');

const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === '') {
    alert('Enter a username.');
    return;
  }

  if (!usernameRegex.test(username)) {
    alert('Invalid username. Use only letters, numbers, and underscores (minimum 3 characters).');
    return;
  }

  if (password === '') {
    alert('Enter password.');
    return;
  }

  if (!passwordRegex.test(password)) {
    alert('Incorrect password. The password must contain at least 8 characters, including at least one letter and one number.');
    return;
  }

  console.log(form.submit());
});
