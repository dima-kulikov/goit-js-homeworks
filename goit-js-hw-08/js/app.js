
const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const btn = document.querySelector('.lightbox__button')

function pp() {
  const gelleryFotoo = document.querySelector('.js-gallery');

  for (let img of galleryItems) {
    const gallery =
      `
    <li class="gallery__item">
    <a
      class="gallery__link"
      href="${(img.original ?? '')}"
    >
      <img
        class="gallery__image"
        src="${img.preview ?? ''}"
        data-source="${img.original}"
        alt="Tulips"
      />
    </a>
  </li>
    `;
    gelleryFotoo.insertAdjacentHTML("afterbegin", gallery);
  };
};

pp()

// ----------------------------------


const jsNav = document.querySelector('.js-gallery');
const lightBox = document.querySelector('.js-lightbox');
const lightBoxImg = document.querySelector('.js-lightbox .lightbox__image');


jsNav.addEventListener('click', chenjFoto);


function chenjFoto(params) {
  params.preventDefault();
  if (params.target.nodeName === 'IMG') {
    // console.log(params.target.dataset.source)
    lightBox.classList.add('is-open');
    // console.log(lightBox.children[1].children[0])
    lightBoxImg.src = params.target.dataset.source;
  };
};
// ------------------------------------------------

// ЗАКРЫТИЕ ПРИ НАЖАТИИ НА КРЕСТИК
const close = document.querySelector('button[data-action="close-lightbox"]')

close.addEventListener('click', () => {
  lightBox.classList.remove('is-open');
  lightBoxImg.src = '';
  console.log(lightBoxImg.src)
});

//  ЗАКРЫТИЕ ПРИ НАЖАТИИ НА БЛОК, ОТСЛЕЖИВАНИЕ ТАРГЕТ
lightBox.addEventListener('click', (params) => {
  if (params.target.classList.contains('lightbox__overlay')) {
    lightBox.classList.remove('is-open');
    lightBoxImg.src = '';
    console.log(lightBoxImg.src);
    params.preventDefault();
  }
});
// ---------------------------------------
// document.onkeypress = (function (e) {
//   if (e.key === "Escape") {
//     // console.log(event)
//     console.log(dsadsadsadsadws)
//   };
// });

document.onkeydown = function (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    // alert("работает");
    lightBox.classList.remove('is-open');
    lightBoxImg.src = '';
    console.log(lightBoxImg.src);
    params.preventDefault();
  }
}
  // else {
  //   isEscape = (evt.keyCode === 27);
  // }
//   if (isEscape) {
//     alert("Escape");
//   }
// };


let originFoto = []
for (var i = 0; i < galleryItems.length; i++)
   
originFoto.push(galleryItems[i].original)
console.log(originFoto)