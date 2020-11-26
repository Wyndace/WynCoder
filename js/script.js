"use script";
const button = document.querySelector('.button');
const answer = document.querySelector(".answer");
let task = document.querySelector('#task').value.split('');

document.querySelector('#task').addEventListener('change', () => {
    task = document.querySelector('#task').value.split('');
});




