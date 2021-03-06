// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// 1.добавляет поле mood со значением 'happy'    +
// 2.заменяет значение hobby на 'skydiving'    +
// 3.заменяет значение premium на false
// 4.выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of


const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
console.log(user)

// 1.добавляет поле mood со значением 'happy'  (ключ со значением)
user.mood = "happy";
console.log(user)

// 2.заменяет значение hobby на 'skydiving'
user.hobby = 'skydiving';
console.log(user)

// 3.заменяет значение premium на false
user.premium = false;
console.log(user.premium)

// 4.выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const keyUser = Object.keys(user);
console.log(keyUser)
const values = Object.values(user);
console.log(values)

// через for in
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }
// через for of
for(const key of keyUser){
  console.log(`${key}: ${user[key]}`);
}
