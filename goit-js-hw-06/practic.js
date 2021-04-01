// const numbers = [1, 2, 3, 4, 5];
// const myNumber = [];
// for (let i = 0; i<numbers.length; i++){
// if( 3 < numbers[i]){
//     myNumber.push(numbers[i])
// };
// };
// const myNumber = numbers.filter( value =>{
//     return value > 3
// })
// console.log(numbers)
// console.log(myNumber)
// ---------------------------------

// const mas = [1,2,3,4,5];
// const number =[];
// function newMas(array, value){
//   for(let i=0; i<array.length; i++){
//      number.push(array[i]*value);
//   }
// }
// newMas(mas,2);
// console.log(number)
// ----------------------------------


// const number = (array,value)=>{
//     for(let i=0; i<array.length; i++){
//       array[i] = array[i] * value;
//     }
//   };

//   const mas = [1,2,3,4,5];
//   number(mas, 2);
//   console.log(mas)
// --------------------------------------------

// const mas = [1,2,3,4,5];

// const number = (array,value)=>{
//     const masNew = [];
//     for(let i=0; i<array.length; i++){
//         masNew.push(array[i] * value);
//     }
//     return masNew
//   };
// const masNew2 = number(mas, 2);


//   number(mas, 2);
//   console.log(mas)
//   console.log(masNew2)
// ---------------------------------------------------

// 2. Array.prototype.forEach()

// const numbers = [1, 2, 3];

// Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// Функциональный forEach
// numbers.forEach(num => console.log(num));
// Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));
// --------------------------------------------

// 3. Array.prototype.map()

// const numbers = [1, 2, 3];
// const numberTwo = numbers.map(i=>i*5);

// console.log(numberTwo)
// --------------------------------------------

// const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//   ];

//   const nameUser = users.map(i=>i.name);

//   console.log(nameUser)
// ----------------------------------------------

// 4. Array.prototype.filter()

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.filter(i=>i>5));
// console.log(numbers.filter(i=>i<3))
// ----------------------------------------------------
// const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//     { name: 'Chelsey', isActive: false },
//   ];

//   console.log(users.filter(i=>i.isActive))
//   console.log(users.filter(i=>!i.isActive))
// ------------------------------------------------------

// 5. Array.prototype.find()
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const myNumber = numbers.find(i =>  i > 5);

// console.log(numbers.find(i=> i>7))
// console.log(myNumber)
// -----------------------------------------

// const users = [
//     { id: '000', name: 'Mango', isActive: true },
//     { id: '001', name: 'Poly', isActive: false },
//     { id: '002', name: 'Ajax', isActive: true },
//     { id: '003', name: 'Chelsey', isActive: false },
//   ];

//   const user = users.find(i=> i.id =="002");
// user.name ="pavel"
//   console.log(user)

//   const getUserById = (arr, id) => arr.find(x => x.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));
// ------------------------------------------------

// 6. Array.prototype.every() и Array.prototype.some()

// const isBib = value=> value>=10;

// console.log([4,88,25,3,48,41,2,68].every(isBib))
// console.log([88,25,48,41,68].every(isBib))

// console.log([4,88,25,3,48,41,2,68].some(isBib))

// --------------------------------------

// const fruits = [
//     { name: 'apples', amount: 100 },
//     { name: 'bananas', amount: 0 },
//     { name: 'grapes', amount: 50 },
//   ];

//   const fruitPrise = fruits.every(value=> value.amount > 0);
//   const fruitPrise2 = fruits.some(value=> value.amount > 0);

//   console.log(fruitPrise)
//   console.log(fruitPrise2)
//   -------------------------------------------------

// 7. Array.prototype.reduce()

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sum = numbers.reduce((ac, value) => ac + value,0);
// console.log(sum)
// --------------------------------------------------

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];

//   const ollLikes = tweets.reduce((like, total) => like +total.likes,0);

//   console.log(ollLikes)

  const ollLike = tweets => tweets.reduce((like, total) => like + total.likes,0);
  console.log(ollLike(tweets));


