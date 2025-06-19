document.getElementById('contactForm').addEventListener('submit', function (e){
    e.preventDefault();
    const fName = e.target.fName.value;
    const lName = e.target.lName.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.phoneNumber.value;
    
    const now = new Date().toLocaleString();
    document.getElementById('today').value = now;
    const today = e.target.today.value;

    localStorage.setItem("userData", JSON.stringify({fName, lName, email, phoneNumber, today}));

    window.location.href = "submited.html";
});
