const user = {
    name:'Dima kl',
    phone:'121-245-45-54',
    email:'dima@mail.com',
    avatar:'https://www.meme-arsenal.com/memes/cbfd4797382778baf1f41b8439399262.jpg',
    address:{
        country:'USA',
        city:'NY'
    }
};


const profileContainer = document.querySelector('.profile-container');
const profile = createUserProfile(user);
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

    infoList.appendChild(nameField);
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

