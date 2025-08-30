// this is for the index.html file
// to display welcome message at the navbar if user is logged in

// var user = localStorage.getItem("user");

// if (user) {
//   var parsedUser = JSON.parse(user);
//   document.getElementById(
//     "WelcomeMessage"
//   ).innerHTML = `Welcome, ${parsedUser.name}`;
//   document.getElementById("loginBtn").style.display = "none";
//   document.getElementById("signup").style.display = "none";
//   document.getElementById("logout").classList.remove("hidden");
// } else {
//   document.getElementById("loginBtn").style.display = "block";
//   document.getElementById("signup").style.display = "block";
//   document.getElementById("logout").classList.add("hidden");
// }
// const logoutBtn = document.getElementById("logout");
// if (logoutBtn) {
//   logoutBtn.addEventListener("click", function () {
//     localStorage.removeItem("user");
//     window.location.href = "loginPage.html";
//   });
// }



// for the loginPage.html file
// to handle login functionality for students
document
  .getElementById("studentLoginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var studentEmail = document.getElementById("studentEmail").value;
    var studentPassword = document.getElementById("studentPassword").value;

    // get user details from local storage using the email as key
    var user = localStorage.getItem(studentEmail);

    if (user) {
      var parsedUser = JSON.parse(user);
      if (parsedUser.password === studentPassword) {
        localStorage.setItem("user", JSON.stringify(parsedUser));
        window.location.href = "../FrontEnd/index.html";
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("User not found");
    }
  });

// to handle login functionality for landlords
document
  .getElementById("landlordLoginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var landlordEmail = document.getElementById("landlordEmail").value;
    var landlordPassword = document.getElementById("landlordPassword").value;

    var user = localStorage.getItem(landlordEmail);

    if (user) {
      var parsedUser = JSON.parse(user);
      if (parsedUser.password === landlordPassword) {
        localStorage.setItem("user", JSON.stringify(parsedUser));
        alert("Login successful");
        window.location.href = "../frontEnd/landlord.html";
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("User not found");
    }
  });
