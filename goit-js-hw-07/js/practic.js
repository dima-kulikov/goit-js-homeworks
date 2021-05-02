const button = document.querySelector('.button')
const buttonjs = document.querySelector('.js-btn');



button.textContent ='Heloo!!!!'

const mi = document.querySelectorAll('.menu-item');
console.log(mi)

const image = document.querySelector('.avatar');


buttonjs.addEventListener('click', nextimg);

image.alt = 'Магазин Днипро-М';
image.title = 'Магазин Днипро-М';


function nextimg(){
    image.src ='https://klike.net/uploads/posts/2018-11/1543310656_14.jpg';
}