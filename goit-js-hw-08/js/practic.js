const jsNav = document.querySelector('.js-nav');

jsNav.addEventListener('click', chenjColor);


function chenjColor(params) {
    params.preventDefault();
    console.dir(params.target);
    console.log(params.currentTarget);

const activLink = params.currentTarget.querySelector('.active');
console.log(activLink);

if (params.target.nodeName === 'A') {
    if(activLink){
        activLink.classList.remove('active');
    };
        params.target.classList.add('active');
    };
}




// ------- код который привязывает меню к нужной секции   (вхождение во вьюпорт)-----------------
const nav = document.querySelector('.page-nav');

const onEntry = (entries) => {
    entries.forEach(entry=>{
        // console.log(entry);

        if(entry.isIntersecting){
            console.log(entry.target);
            const sectionId = entry.target.getAttribute('id');
            console.log(sectionId);

            const currentActiveLink = nav.querySelector('.active');
            if(currentActiveLink){
                currentActiveLink.classList.remove('active');
            }

            const nextActiveLink = nav.querySelector(`a[href="#${sectionId}"]`);
            nextActiveLink.classList.add('active');
        }

    });
};

const options ={
    threshold: 0.8
}


const observer = new IntersectionObserver(onEntry, options);
const section = document.querySelectorAll('.section');

section.forEach(section =>{
    observer.observe(section);
});

