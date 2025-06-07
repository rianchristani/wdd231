const userData = JSON.parse(localStorage.getItem("userData"));

if (userData) {
  document.getElementById("fName").textContent = `First Name: ${userData.fName}`;
  document.getElementById("lName").textContent = `Last Name: ${userData.lName}`;
  document.getElementById("email").textContent = `Email: ${userData.email}`;
  document.getElementById("phoneNumber").textContent = `Phone Number: ${userData.phoneNumber}`;
  document.getElementById("organizationName").textContent = `Organization Name: ${userData.organizationName}`;
  document.getElementById("timestamp").textContent = `When was submitted: ${userData.today}`;
} else {
  document.body.innerHTML = "<p>Nenhum dado encontrado.</p>";
}
