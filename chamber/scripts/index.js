const cards = document.querySelector('#storeMembers');

function getRandom(array){
    const copy = [...array]

    for (let i = copy.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

const displayMembersGrid = (members) => {
    const arrayMembers = members.filter(member => member.membership_level >= 2);

    const selected = getRandom(arrayMembers).slice(0,3);

    cards.innerHTML = ""

    selected.forEach((member) =>{
            let card = document.createElement('section');
            let logo = document.createElement('img');
            let companyName = document.createElement('h3');
            let phoneNumber = document.createElement('p');
            let companyTagline = document.createElement('h5');
            let companyEmail = document.createElement('p')
            let websiteUrl = document.createElement('a');

            companyName.textContent = member.name;
            phoneNumber.innerHTML = `<strong>PHONE:</strong> ${member.phone}`;
            companyTagline.textContent = member.tagline;
            companyEmail.innerHTML = `<strong>EMAIL:</strong> ${member.email}`;

            logo.setAttribute('src', member.image)
            logo.setAttribute('alt', `Logo of ${member.name}`)
            logo.setAttribute('loading', 'lazy')
            logo.setAttribute('width', '160'),
            logo.setAttribute('height', 'auto')

            websiteUrl.setAttribute('href', member.website);
            websiteUrl.innerHTML = `<strong>URL:</strong> ${member.website}`;

            card.appendChild(companyName);
            card.appendChild(companyTagline);
            card.appendChild(logo);
            card.appendChild(companyEmail);
            card.appendChild(phoneNumber);
            card.appendChild(websiteUrl);

            card.classList.add('gridSections')

            cards.appendChild(card);
        }) 

}  


// -- Display function --

async function getMembersData(display) {
    const response = await fetch('data/members.json')
    const data = await response.json();

    display(data.members)
}

getMembersData(displayMembersGrid);


//         let card = document.createElement('section');
//         let logo = document.createElement('img');
//         let companyAddress = document.createElement('p');
//         let phoneNumber = document.createElement('p');
//         let websiteUrl = document.createElement('a');


//         companyAddress.textContent = member.address;
//         phoneNumber.textContent = member.phone;


//         if (member.membership_level >= 2) {
//         logo.setAttribute('src', member.image)
//         logo.setAttribute('alt', `Logo of ${member.name}`)
//         logo.setAttribute('loading', 'lazy')
//         logo.setAttribute('width', '160'),
//         logo.setAttribute('height', 'auto')

//         websiteUrl.setAttribute('href', member.website);
//         websiteUrl.textContent = member.website;

//         card.appendChild(logo);
//         card.appendChild(companyAddress);
//         card.appendChild(phoneNumber);
//         card.appendChild(websiteUrl);

//         card.classList.add('gridSections')

//         cards.appendChild(card);
//         }
//     })
// }

// const displayMembersList = (members) => {
//     table.innerHTML=""
//     members.forEach((member) =>{

//         let row = document.createElement('tr');
//         let nameInfo = document.createElement('td');
//         let addressInfo = document.createElement('td');
//         let phoneInfo = document.createElement('td');
//         let websiteInfo = document.createElement('td');

//         nameInfo.textContent = member.name;
//         addressInfo.textContent = member.address;
//         phoneInfo.textContent = member.phone;
//         websiteInfo.textContent = member.website;

//         row.appendChild(nameInfo);
//         row.appendChild(addressInfo);
//         row.appendChild(phoneInfo);
//         row.appendChild(websiteInfo);

//         table.appendChild(row);
// ;    })
// }

// getMembersData(displayMembersGrid);

// const grid = document.querySelector('#grid');
// grid.addEventListener("click", () =>{
//     table.innerHTML = ""
//     getMembersData(displayMembersGrid);
// });

// const list = document.querySelector('#list');
// list.addEventListener("click", () =>{
//     cards.innerHTML = ""
//     getMembersData(displayMembersList);
// });