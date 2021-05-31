const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


btn.addEventListener('click', ()=>{

  const gelleryFotoo = document.querySelector('#gallery');
  gelleryFotoo.classList.add('foto-flex');

// - не срабатывает первый элемент  СПОСОБ-1
  // gelleryFotoo.innerHTML = images.reduce((ansver, value)=> ansver + `<li><img width="100%" src="${value.url}" alt="${value.alt}"></li>`);
// - нужно убрать запятые за элементами  СПОСОБ-2
  // const doubledNumbers = images.map(value => `<li><img width="100%" src="${value.url}" alt="${value.alt}"></li>`);

  // --не работает
  // doubledNumbers.join('');  
  // --не работает 
  // let result = doubledNumbers.map(i => i.split(',').filter(x => x.trim()).join());
//  console.log(result)
// ----не работает
// for(var i=0;i<doubledNumbers.length;i++) { 
//   if(doubledNumbers[i].indexOf(',') > -1) { 
//     console.log(doubledNumbers[i].replace(/,/g,'')); 
//   } 
// }
// return gelleryFotoo.innerHTML = doubledNumbers;

// --------   СПООБ 3
for (let value of images){
  const pop =  `<li><img width="100%" src="${value.url}" alt="${value.alt}"></li>`;
  gelleryFotoo.insertAdjacentHTML("afterbegin", pop);
};


});