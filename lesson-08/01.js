/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let newStr;
  let array = str.split(' ');
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
      let firstLetter = array[i][0].toUpperCase();
      let anotherLetters = array[i].slice(1).toLowerCase();
      let result = firstLetter + anotherLetters
      newArray.push(result)
  }
  newStr = newArray.join(' ')
  return newStr
}



