import { projects } from "../data/list-projects.mjs";
console.log(projects);

const cards = document.querySelector('#projects');

const createCards = (projectCards) =>{
    projectCards.forEach((project) =>{

        // Card
        let card = document.createElement('div');
        let titlePlace = document.createElement('h2');
        let dateTime = document.createElement('p');
        let photo = document.createElement('img');

        // Dialog
        let fisrtButton = document.createElement('button');
        let dialog = document.createElement('dialog');
        let secondButton = document.createElement('button');
        let titleDialog = document.createElement('h2');
        let moreInfo = document.createElement('p');
        let link = document.createElement('a')

        // Card
        titlePlace.textContent = project.title;
        dateTime.textContent = `Finished in ${project.date}`;

        photo.setAttribute('src', project.image)
        photo.setAttribute('alt', `Photo from ${project.title}`)
        photo.setAttribute('loading', 'lazy')
        photo.setAttribute('width', '80%')

        // Dialog
        fisrtButton.classList.add('openButton');
        fisrtButton.textContent = 'Learn More'

        dialog.classList.add('placeDialog')

        secondButton.classList.add('closeButton');
        secondButton.textContent = '❌'

        titleDialog.textContent = project.title;
        moreInfo.textContent = `${project.dialog}`

        link.setAttribute('href', project.link)
        link.setAttribute('target', '_blank')
        link.textContent = `Visit the website`

        // Card
        card.appendChild(titlePlace);
        card.appendChild(dateTime);
        card.appendChild(photo);

        // Dialog
        card.appendChild(fisrtButton);
        card.appendChild(dialog);
        dialog.appendChild(secondButton);
        dialog.appendChild(titleDialog);
        dialog.appendChild(moreInfo);
        dialog.appendChild(link);

        card.classList.add('projectsCards')
        cards.appendChild(card);
    })
}

createCards(projects);

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
