// Напиши класс StringBuilder. На вход он получает один параметр - строку,
// которую записывает в свойство _value.

// Добавь классу следующий функционал:
`use strict`;
class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value = `${this._value}${str}`;
  }

  prepend(str) {
    this._value = `${str}${this._value}`;
  }

  pad(str) {
    this._value = `${str}${this._value}${str}`;
  }
}
// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
