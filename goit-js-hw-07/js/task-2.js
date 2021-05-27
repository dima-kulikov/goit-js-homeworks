const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const list = document.createElement('li');
list.textContent = `${ingredients}: `

// console.log(list)
// const ansver =[];
// for (let elem of ingredients){
//     ansver.push(  list.textContent = `${ingredients[1]}: `)
// };
// const ansver = [];
ingredients.forEach(element => {
  list.textContent = `${element}: ` ;

});


console.log(list)