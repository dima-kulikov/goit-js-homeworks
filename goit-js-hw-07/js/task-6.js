let inputText = document.querySelector('#validation-input');
const dataLength = document.querySelector("[data-length]");
inputText.oninput = function() {
    if(inputText.value.length == 0){
        console.log('зззззззззз')
    }
    else if(inputText.value.length == inputText.dataset.length){
        console.log('work')
    }
    else{
        console.log('ccccc')
        console.log(inputText.value.length)
    }
}
console.log(inputText.dataset.length)
