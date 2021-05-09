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

    const nameField = document.createElement('li');
    const label = document.createElement('b');
    


    // container.appendChild(image);
    // container.appendChild(infoList);
    container.append(image, infoList);

    console.log(container);
    return container;

    
}

