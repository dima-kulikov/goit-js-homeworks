const valuespan = document.querySelector('#value');
const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");
let counterValue = 0;


decrement.addEventListener('click', ()=>{
    counterValue -=1;
    valuespan.innerHTML = counterValue;
});

increment.addEventListener('click', ()=>{
    counterValue +=1;
    valuespan.innerHTML = counterValue;
});

