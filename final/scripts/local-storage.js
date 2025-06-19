const time = document.querySelector('#message');

let saved = localStorage.getItem("lastVisit");
const now = new Date();

let lastVisitDateObj = saved ? new Date(saved) : null;
let lastVisitDateStr = lastVisitDateObj ? lastVisitDateObj.toLocaleDateString() : "No previous visit";

localStorage.setItem("lastVisit", now.toISOString());

let tomorrowText = "N/A";
let yesterdayText = "N/A";

if (lastVisitDateObj) {
    const tomorrow = new Date(lastVisitDateObj);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrowText = tomorrow.toLocaleDateString();

    const yesterday = new Date(lastVisitDateObj);
    yesterday.setDate(yesterday.getDate() - 1);
    yesterdayText = yesterday.toLocaleDateString();
}

time.innerHTML = `
  <p>Last visit: ${lastVisitDateStr}</dp>
  <p>Tomorrow of the last visit date: ${tomorrowText}</p>
  <p>Yesterday of the last visit date: ${yesterdayText}</p>
`;