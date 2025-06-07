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