let pass = document.querySelector('#key').value.split('');

document.querySelector('#key').addEventListener('change', () => {
    pass = document.querySelector('#key').value.split('');
});

button.addEventListener('click', () => gamma());

const gamma = () => {
  console.log(task);
  console.log(pass);
    task.forEach(letter => {
      letter = letter.charCodeAt();
      pass.forEach(passSymbol => {
      passSymbol = passSymbol.charCodeAt();
      letter ^= passSymbol;
      answer.innerHTML += String.fromCharCode(letter);
      });
    });
}