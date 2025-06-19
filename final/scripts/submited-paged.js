const userData = JSON.parse(localStorage.getItem("userData"));

if (userData) {
  document.getElementById("fName").innerHTML = `First Name: <span>${userData.fName}</span>`;
  document.getElementById("lName").innerHTML = `Last Name: <span>${userData.lName}</span>`;
  document.getElementById("email").innerHTML = `Email: <span>${userData.email}</span>`;
  document.getElementById("phoneNumber").innerHTML= `Phone Number: <span>${userData.phoneNumber}</span>`;
  document.getElementById("timestamp").innerHTML = `When was submitted: <span>${userData.today}</span>`;
} else {
  document.body.innerHTML = "<p>Nenhum dado encontrado.</p>";
}