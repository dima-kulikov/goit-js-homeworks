const jsNav = document.querySelector('.js-nav');

jsNav.addEventListener('click', chenjColor);


function chenjColor(params) {
    params.preventDefault();
    console.log(params.target);
    console.log(params.currentTarget);

const activLink = params.currentTarget.querySelector('.active');
console.log(activLink);
if(activLink){
    activLink.classList.remove('active');
};

    params.target.classList.add('active');
};


const onEntry = (entries) => {
    entries.forEach(entry=>{
        // console.log(entry);

        if(entry.isIntersecting){
            console.log(entry.target);
        }

    });
};

const options ={
    threshold: 0.6
}


const observer = new IntersectionObserver(onEntry, options);
const section = document.querySelectorAll('.section');

section.forEach(section =>{
    observer.observe(section);
});
