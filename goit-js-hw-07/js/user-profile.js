const userA = {
    name:'Dima kl',
    phone:'111-11-11',
    email:'dima@mail.com',
    avatar:'https://www.meme-arsenal.com/memes/cbfd4797382778baf1f41b8439399262.jpg',
    address:{
        country:'USA',
        city:'NY'
    }
};

const userB = {
    name:'Paha Golden',
    phone:'222-22-22',
    email:'PAHA@mail.com',
    avatar:'https://klike.net/uploads/posts/2019-03/1551511825_12.jpg',
    address:{
        country:'UA',
        city:'Kyiv'
    }
};


const profileContainer = document.querySelector('.profile-container');
const profile = createUserProfile(userA);
profileContainer.appendChild(profile);



function createUserProfile({name, phone, email, avatar, address}){
    const container = document.createElement('div');
    container.classList.add('user-profile');

    const image = document.createElement('img');
    image.src = avatar;
    image.alt = 'аватарка';
    image.title ='Фото карточки';
    image.classList.add('avatars');

    const infoList = document.createElement("ul");
    infoList.classList.add('info');

    const nameField = createInfoItem('Name', name);
    const phoneField = createInfoItem('Phone', phone);
    const emailField = createInfoItem('Email', email);
    const addressField = createInfoItem(
        'Address', 
        `${address.country}, ${address.city}`
        );
    
    infoList.append(nameField, phoneField, emailField, addressField);

    //создание тегов "li"/"b" их внутрянки и подключение

    // const nameField = document.createElement('li');
    // const label = document.createElement('b');
    // label.textContent = 'Name: ';
    // const nameFieldTextContent = document.createTextNode("Deonte Fei");
    // nameField.appendChild(label);
    // nameField.appendChild(nameFieldTextContent);

    // infoList.appendChild(nameField);
    container.append(image, infoList);


    return container;
};


//функция создает li с внутрянкой, вместо ручного создания каждой li
function createInfoItem (label, text){
    const item = document.createElement('li');
    const itemLabel = document.createElement('b');
    itemLabel.textContent = `${label}: `;
    const itemText = document.createTextNode(text)

    item.append(itemLabel, itemText);

    return item;
}

// console.log(document.querySelector('.masthead').textContent)



const menu = document.querySelector('.menu');
const newItem = '<li class="menu-item"><a href="/kontakt">kontakt</a></li>'

menu.insertAdjacentHTML("beforeend", newItem)

//шаблон вставки кода, легче и быстрее чем "createElement"

const markup =`
<div class="user-profile">
    <img class="avatars" src="https://klike.net/uploads/posts/2019-03/1551511825_12.jpg" alt="">

    <ul class="info">
      <li><b>Name:</b> 11111</li>
      <li><b>Phone:</b> 2222-222-22</li>
      <li><b>Email:</b> 22@edfe.com</li>
      <li><b>Location:</b> USA, 222</li>
    </ul>
  </div>
`;

// document.querySelector('.profile-container').innerHTML = markup;

// const profileContainer2 = document.querySelector('.profile-container');


// profileContainer2.insertAdjacentHTML("afterbegin", markup);


///////////////////////////////////////////////////////////////////////

const testMarkup =`
<div class="user-profile">
    <img class="avatars" src="{{ avatar }}" alt="">

    <ul class="info">
      <li><b>Name:</b> {{ name }}</li>
      <li><b>Phone:</b> {{ phone }}</li>
      <li><b>Email:</b> {{ email }}</li>
      <li><b>Location:</b> {{ address.country }}, {{ address.city }}</li>
    </ul>
  </div>
`;
const template = Handlebars.compile(testMarkup);


/////////////////////////////////////////////////////////////////
// const template = Handlebars.compile('' +
// '<div class="user-profile">' +
//     '<img class="avatars" src="{{ avatar }}" alt="">' + 
//     '<ul class="info">' +
//         '<li><b>Name:</b> {{ name }}</li>' +
//         '<li><b>Phone:</b> {{ phone }}</li>' +
//         '<li><b>Email:</b> {{ email }}</li>' +
//         '<li><b>Location:</b> {{ address.country }}, {{ address.city }}</li>' +
//     '</ul>' +
// '</div>'
// );


const users = [
    {
        name:'Dima kl',
        phone:'111-11-11',
        email:'dima@mail.com',
        avatar:'https://www.meme-arsenal.com/memes/cbfd4797382778baf1f41b8439399262.jpg',
        address:{
            country:'USA',
            city:'NY'
        }
    },
    {
        name:'Paha Golden',
        phone:'222-22-22',
        email:'PAHA@mail.com',
        avatar:'https://klike.net/uploads/posts/2019-03/1551511825_12.jpg',
        address:{
            country:'UA',
            city:'Kyiv'
        }
    }
];

const testContainer = document.querySelector('.test-container');

users.forEach(user => {
    const test = template(user);
    testContainer.insertAdjacentHTML("afterbegin", test);
});