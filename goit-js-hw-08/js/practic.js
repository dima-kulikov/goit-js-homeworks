const jsNav = document.querySelector('.js-nav');

jsNav.addEventListener('click', chenjColor);


function chenjColor(params) {
    params.preventDefault();
    console.log(params.target);
    console.log(params.currentTarget)

    if (params.target === params.currentTarget){
        return;
    };

const activLink = params.currentTarget.querySelector('.active');
// console.log(activLink);
if (activLink){
    activLink.classList.remove('active');
}


    params.target.classList.add('active');
}