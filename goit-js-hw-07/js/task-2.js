const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];



// console.log(list)
// const ansver =[];
const pp = document.querySelector('#ingredients');
for (let elem of ingredients){

  // Вариант --1
  // const list = document.createElement('li');
  // list.textContent = elem;


  ///вариант -2
  const pop = `<li>${elem}</li>`;

  console.log(pop);

  pp.insertAdjacentHTML("afterbegin", pop);
};


// console.log(list)
// console.log(ingredients)