const time = document.querySelector('#message');

let saved = localStorage.getItem("lastVisit");

const now = new Date();

if (saved) {
  let lastVisit = new Date(saved);

  const diffInMs = now - lastVisit;
  const daysPassed = diffInMs / (1000 * 60 * 60 * 24);

  if (daysPassed < 1) {
    time.textContent = `Back so soon! Awesome!`
  } else {
    const roundedDays = Math.floor(daysPassed);
    time.textContent = `You last visited ${roundedDays} day${roundedDays == 1 ? '' : 's'} ago.`
  }
} else {
  time.textContent = `Welcome! Let us know if you have any questions.`
}

localStorage.setItem("lastVisit", now.toISOString());