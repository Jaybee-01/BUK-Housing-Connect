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
      if (parsedUser.role === "student") {
        if (parsedUser.password === studentPassword) {
          localStorage.setItem("user", JSON.stringify(parsedUser));
          alert("Login successful");
          window.location.href = "../FrontEnd/index.html";
        } else {
          alert("Incorrect username or password");
        }
      } else {
        alert("User not found");
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
      if (parsedUser.role === "landlord") {
        if (parsedUser.password === landlordPassword) {
          localStorage.setItem("user", JSON.stringify(parsedUser));
          alert("Login successful");
          window.location.href = "../frontEnd/landlord.html";
        } else {
          alert("Incorrect username or password");
        }
      } else {
        alert("User not found");
      }
    } else {
      alert("User not found");
    }
  });
