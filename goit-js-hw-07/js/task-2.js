const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];



const btn = document.querySelector('#btn');


btn.addEventListener('click', ()=>{
 
const pp = document.querySelector('#ingredients');
 // --------ВАРИАНТ 1
// for (let elem of ingredients){
//   const pop = `<li>${elem}</li>`;
//   pp.insertAdjacentHTML("afterbegin", pop);
// };

// --------ВАРИАНТ    2
pp.innerHTML = ingredients.reduce((ansver, value)=> ansver + `<li>${value}</li>`,);

}) ; 

// console.log(list)
// console.log(ingredients)