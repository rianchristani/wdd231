import { places } from "../scripts/places.mjs";
console.log(places);

const cards = document.querySelector('#places');

const createCards = (placesCards) =>{
    placesCards.forEach((place) =>{

        // Card
        let card = document.createElement('div');
        let titlePlace = document.createElement('h2');
        let addressPlace = document.createElement('h4');
        let descriptionPlace = document.createElement('p');
        let photo = document.createElement('img');

        // Dialog
        let fisrtButton = document.createElement('button');
        let dialog = document.createElement('dialog');
        let secondButton = document.createElement('button');
        let titleDialog = document.createElement('h2');
        let moreInfo = document.createElement('p');

        // Card
        titlePlace.textContent = place.title;
        addressPlace.textContent = place.address;
        descriptionPlace.textContent = place.description;

        photo.setAttribute('src', place.image)
        photo.setAttribute('alt', `Photo from ${place.title}`)
        photo.setAttribute('loading', 'lazy')
        photo.setAttribute('width', '300')
        photo.setAttribute('heigth', '200')

        // Dialog
        fisrtButton.classList.add('openButton');
        fisrtButton.textContent = 'Learn More'

        dialog.classList.add('placeDialog')

        secondButton.classList.add('closeButton');
        secondButton.textContent = '❌'

        titleDialog.textContent = place.title;
        moreInfo.textContent = `${place.dialog}`

        // Card
        card.appendChild(titlePlace);
        card.appendChild(photo);
        card.appendChild(addressPlace);
        card.appendChild(descriptionPlace);


        // Dialog
        card.appendChild(fisrtButton);
        card.appendChild(dialog);
        dialog.appendChild(secondButton);
        dialog.appendChild(titleDialog);
        dialog.appendChild(moreInfo);

        card.classList.add('placesToVisit')
        cards.appendChild(card);
    })
}

createCards(places);

const dialogs = document.querySelectorAll('dialog');
const openButtons = document.querySelectorAll('.openButton');
const closeButtons = document.querySelectorAll('.closeButton');

openButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        dialogs[i].showModal();
    });
});

closeButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        dialogs[i].close();
    });
});
