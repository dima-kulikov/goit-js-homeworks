let range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const slider = () => {
 
    text.style.fontSize=range.value+'px';
    // text.innerHTML= range.value;
    console.log(range.value)
}
range.addEventListener('input', slider)