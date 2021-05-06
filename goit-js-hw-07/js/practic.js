const button = document.querySelector('.button')
const buttonjs = document.querySelector('button[data-action="magic"]');
const homeMenuActiv = document.querySelector('.menu-item');
const image = document.querySelector('.logo');

button.textContent ='Heloo!!!!'

const mi = document.querySelectorAll('.menu-item');
console.log(mi)




buttonjs.addEventListener('click',()=>{
     className();
     image.setAttribute('src', 'https://3dnews.ru/assets/external/illustrations/2019/12/04/999060/dims%20(3).jpg');
     image.setAttribute('title', 'HELLO!')
});



function className(){
    homeMenuActiv.classList.toggle('active')
};

