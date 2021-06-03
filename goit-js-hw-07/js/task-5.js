const nameIn = document.querySelector('#name-input');
let nameOut = document.querySelector('#name-output');



    nameIn.oninput = function() {
        if(nameIn.value == ''){
            nameOut.innerHTML = 'незнакомец'
        }
        else{
        nameOut.innerHTML = nameIn.value;
        }
    };
