const cards = document.querySelector('#storeMembers');
const table = document.querySelector('#listTable')

const displayMembersGrid = (members) => {
    cards.innerHTML = ""
    members.forEach((member) =>{

        let card = document.createElement('section');
        let logo = document.createElement('img');
        let companyAddress = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let websiteUrl = document.createElement('a');


        companyAddress.textContent = member.address;
        phoneNumber.textContent = member.phone;


    
        logo.setAttribute('src', member.image)
        logo.setAttribute('alt', `Logo of ${member.name}`)
        logo.setAttribute('loading', 'lazy')
        logo.setAttribute('width', '160'),
        logo.setAttribute('height', 'auto')

        websiteUrl.setAttribute('href', member.website);
        websiteUrl.textContent = member.website;

        card.appendChild(logo);
        card.appendChild(companyAddress);
        card.appendChild(phoneNumber);
        card.appendChild(websiteUrl);

        card.classList.add('gridSections')

        cards.appendChild(card);

    })
}

const displayMembersList = (members) => {
    table.innerHTML=""
    members.forEach((member) =>{

        let row = document.createElement('tr');
        let nameInfo = document.createElement('td');
        let addressInfo = document.createElement('td');
        let phoneInfo = document.createElement('td');
        let websiteInfo = document.createElement('td');

        nameInfo.textContent = member.name;
        addressInfo.textContent = member.address;
        phoneInfo.textContent = member.phone;
        websiteInfo.textContent = member.website;

        row.appendChild(nameInfo);
        row.appendChild(addressInfo);
        row.appendChild(phoneInfo);
        row.appendChild(websiteInfo);

        table.appendChild(row);
;    })
}

async function getMembersData(display) {
    const response = await fetch('data/members.json')
    const data = await response.json();

    display(data.members)
}

getMembersData(displayMembersGrid);

const grid = document.querySelector('#grid');
grid.addEventListener("click", () =>{
    table.innerHTML = ""
    getMembersData(displayMembersGrid);
});

const list = document.querySelector('#list');
list.addEventListener("click", () =>{
    cards.innerHTML = ""
    getMembersData(displayMembersList);
});