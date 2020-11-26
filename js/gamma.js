let pass = document.querySelector('#key').value.split('');

document.querySelector('#key').addEventListener('change', () => {
    pass = document.querySelector('#key').value.split('');
});

button.addEventListener('click', () => gammaEach()); //Меняем пока здесь

//Просто разкодер
const gamma = () => {
   answer.innerHTML = 'Твой ответ: ';
    task.forEach(letter => {
      letter = letter.charCodeAt();
      pass.forEach(passSymbol => {
      passSymbol = passSymbol.charCodeAt();
      letter ^= passSymbol;
      answer.innerHTML += String.fromCharCode(letter);
      });
    });
}
//Перебор всех значений аски и вывод их
const gammaRounds = () => {
  answer.innerHTML = ''
      for (passSymbol = 32; passSymbol < 126; passSymbol++){
      answer.innerHTML += '<br>Твой ответ: ';
      task.forEach(letter => {
      letter = letter.charCodeAt();
      letter ^= passSymbol;
      answer.innerHTML += String.fromCharCode(letter);
    });
    answer.innerHTML += ' ASCII Символ: ' + String.fromCharCode(passSymbol) + '<br>';
      };
}

//Каждая с каждой
const gammaEach = () => {
  answer.innerHTML = 'Твой ответ: ';
  console.log(task.length, pass.length);
  if (task.length < pass.length) {
    for (let i = 0; i < pass.length; i++){
        let passSymbol = pass[i].charCodeAt();
        task.forEach(letter => {
          letter = letter.charCodeAt();
          letter ^= passSymbol;
          answer.innerHTML += String.fromCharCode(letter);
      });
    }
  } else if (task.length > pass.length) {
      for (let i = 0; i < task.length; i++){
        let letter = task[i].charCodeAt();
        pass.forEach(passSymbol => {
          passSymbol = passSymbol.charCodeAt();
          letter ^= passSymbol;
          answer.innerHTML += String.fromCharCode(letter);
      });
    }
    console.log('yes, big');
  } else {
    console.log('yes, equals')
    for (let i = 0; i < task.length; i++){
      let letter = task[i].charCodeAt();
      let passSymbol = pass[i].charCodeAt();
      letter ^= passSymbol;
      answer.innerHTML += String.fromCharCode(letter);
    }
  }
};