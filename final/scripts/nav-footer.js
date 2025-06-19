const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('#navHeader');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');

    menuButton.classList.toggle('open');
})

// Footer
const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = today.getFullYear()