// --ЗАГРУЗКА ЛЕЙЗИ ЛОАД

const lazyload = target =>{
    const options ={
        rootMargin: '50px 0px',
        threshold: 0.1
    };
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // console.log(entry.target);
            if(entry.isIntersecting){
                const img = entry.target;
                const imgUrl = img.dataset.lazy;

                img.setAttribute('src', imgUrl);

                observer.disconnect()
            }
        })
    }, options);

    io.observe(target);
};

const images = document.querySelectorAll('.section img');


images.forEach(image=>{
    lazyload(image);
})