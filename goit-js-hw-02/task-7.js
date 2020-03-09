const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// ---цикл записи логина в массив

// console.log(logins, login)
// ------Конец-----цикл записи логина в массив

login = prompt('введите пароль')
// ----------------Валидность логина
const isLoginValid = function(login) {
    
    const Len = login.length;
    if(login.length < 4 || login.length > 20)
	{ alert('В логине должен быть от 4 до 20 символов'); return false;}
if(parseInt(login.substr(0, 1)))
	{alert('Логине должен начинаться с буквы'); return false;}

 return true;
};



for (let i=0; ; i++) {
    // login = prompt('введите пароль')
    if (login === ``){
        login = prompt(`Вы не ввели пароль, пробуйте еще:`);
    }

    logins.push(login)
    break;
}


console.log(logins, login)






// console.log(Len)
// const isLoginUnique = function(allLogins, login) {
//   // твой код
// };

// const addLogin = function(allLogins, login) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'