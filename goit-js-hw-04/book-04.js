
// ФУНКЦИИ ОБРАТНОГО ВЫЗОВА

// const printMessage = function (message) {
//     console.log(message);
//   };
  
//   const higherOrderFunction = function (callback) {
//     const string = 'HOCs are awesome1';
//     callback(string);
//   };
  
//   higherOrderFunction(printMessage);

// // -----------------------------------------------


//   const repeatLog = function (n) {
//     for (let i = 0; i < n; i += 1) {
//       console.log(i);
//     }
//   };
  
//   repeatLog(10);

// -----------------------------------------------------

//   const printValue = function (value) {
//     console.log(value);
//   };
  
//   const prettyPrint = function (value) {
//     console.log('Logging value: ', value);
//   };
  
//   const repeat = function (n, action) {
//     for (let i = 0; i < n; i += 1) {
//       action(i);
//     }
//   };
  
//   // Передаем printValue как callback-функцию
//   repeat(3, printValue);
//   // Передаем prettyPrint как callback-функцию
//   repeat(3, prettyPrint);

// -----------------------------------------------------

// const repeat = function (n, action) {
//     for (let i = 0; i < n; i +=1) {
//       action(i);
//     }
//   };
  
//   const labels = [];
  
//   repeat(5, value => {
//     labels.push(`Label ${value + 1}`);
//   });
  
//   console.log(labels);
// -----------------------------------------------------

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];

// const filter = function (array, test) {
//     const filteredElements = [];
  
//     for (const element of array) {
//       const passed = test(element);
//   console.log(element)
//       if (passed) {
//         filteredElements.push(element);
//       }
//     }
  
//     return filteredElements;
//   };
  

  
//   const freshFruits = filter(fruits, fruit => fruit.isFresh);
//   console.log(freshFruits); 
  
//   const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
//   console.log(fruitsWithQuantity);


  //Контекст выполнения и стек вызововconst createCounter = function () {
