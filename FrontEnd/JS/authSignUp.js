// for the signupPage.html file
// to handle signup functionality for students

document
  .getElementById("studentSignUpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var name = document.getElementById("studentName").value;
    var studentEmail = document.getElementById("studentEmail").value;
    var studentPassword = document.getElementById("studentPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (studentPassword !== confirmPassword) {
      window.alert("Passwords do not match");
      return;
    }

    const user = {
      name: name,
      email: studentEmail,
      password: studentPassword,
      role: "student",
    };

    localStorage.setItem(studentEmail, JSON.stringify(user));
    alert("Account created successfully please log in");
    window.location.href = "../FrontEnd/loginPage.html";

    document.getElementById("studentSignUpForm").reset();
  });


//  to handle signup functionality for landlords
document.getElementById('landlordSignUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var landlordName = document.getElementById("landlordName").value;
    var landlordEmail = document.getElementById("landlordEmail").value;
    var landlordPassword = document.getElementById("landlordPassword").value;
    var landlordConPassword = document.getElementById("landlordConPassword").value; 

    if (landlordPassword !== landlordConPassword) {
        window.alert("Passwords do not match");
        return;
    }   
    const landlord = {
        name: landlordName,
        email: landlordEmail,
        password: landlordPassword,
        role: 'landlord',
    };

    localStorage.setItem(landlordEmail, JSON.stringify(landlord));
    alert("Account created successfully please log in");
    window.location.href = "../FrontEnd/loginPage.html";
});