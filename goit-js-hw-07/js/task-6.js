let inputText = document.querySelector('#validation-input');
const dataLength = document.querySelector("[data-length]");
// inputText.oninput = function() {
//     if(inputText.value.length == inputText.dataset.length){
//         console.log('длина 6')
//     }

//     else{
//         console.log('cccдлина не 6')

//     }
// }
// console.log(inputText.dataset.length)
inputText.oninput = function() {
inputText.addEventListener('focus', ()=>{
    if(inputText.value.length == inputText.dataset.length){
        console.log('длина 6')
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
    }

    else{
        console.log('cccдлина не 6')
        inputText.classList.add('invalid');
        inputText.classList.remove('valid');
    }
});
};
// .classList.add('focus');