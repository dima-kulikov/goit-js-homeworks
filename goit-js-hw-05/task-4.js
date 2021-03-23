// Задание 4
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.
// Добавь классу следующий функционал:
class StringBuilder {

    constructor(value){
        this._value = value;      
    }
    get value() {
      return this._value;
    }  
    append(str) {
      this._value = this._value + str;
    };
    prepend(str){
      this._value = str + this._value;
    };
    pad(str){
      this._value = str + this._value + str;
    }
};
// StringBuilder.prototype.append = function(str) { return this.value.push(str);}
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
const builder = new StringBuilder(".");
console.log(builder)
console.log(builder.value)

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='