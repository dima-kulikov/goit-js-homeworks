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
// console.log(inputText.dataset.length)0

const validate = () => {
    if(inputText.value.length == inputText.dataset.length){
        console.log('длина 6')
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
    }
    // else if(inputText.value.length == ''){
    //     inputText.classList.remove('invalid');
    //     inputText.classList.remove('valid');
    // }

    else{
        console.log('cccдлина не 6')
        inputText.classList.add('invalid');
        inputText.classList.remove('valid');
    }
}

inputText.addEventListener('input', validate);
inputText.addEventListener('focus', validate);
inputText.addEventListener('blur', validate);


// inputText.oninput = function() {
//     console.log( inputText.value)
    
// inputText.addEventListener('blur', ()=>{
//     if(inputText.value.length == inputText.dataset.length){
//         console.log('длина 6')
//         inputText.classList.add('valid');
//         inputText.classList.remove('invalid');
//     }

//     else{
//         console.log('cccдлина не 6')
//         inputText.classList.add('invalid');
//         inputText.classList.remove('valid');
//     }
// });
// };
// .classList.add('focus');