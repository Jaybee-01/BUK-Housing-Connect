// code to handle user login state for the navbar and UI changes
window.onload = function () {
  const user = JSON.parse(localStorage.getItem("user"));

  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signup");
  const userInfo = document.getElementById("userInfo");
  const logoutBtn = document.getElementById("logout");

  if(user){
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";

    userInfo.style.display = "block";
    userInfo.textContent = `${user.role === 'student' ? 'Student' : 'Landlord'}: ${user.name}`;
    logoutBtn.style.display = "block";
  } else{
    loginBtn.style.display = "block";
    signupBtn.style.display = "block";

    userInfo.style.display = "none";
    logoutBtn.style.display = "none";
  }

  // logout functionality
  logoutBtn.addEventListener("click", function () {
    if(user){
      localStorage.removeItem("user");
      
      if(user.role === 'student'){
        window.location.href = "../FrontEnd/loginPage.html";
      } else{
        window.location.href = "../FrontEnd/landlordLogin.html";
    }
  }
   });

// code for the range input to display the value
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

priceRange.addEventListener("input", () => {
  priceValue.textContent = Number(priceRange.value).toLocaleString();
});

// code to show only selected price range
const cards = document.querySelectorAll(".card");
priceRange.addEventListener("input", () => {
  const selectedValue = priceRange.value;

  cards.forEach((card) => {
    if (card.dataset.value === selectedValue) {
      card.style.display = "block";
      card.style.margin = "left";
    } else {
      card.style.display = "none";
    }
  });
});

// code to handle the protected button click

function isLoggedIn() {
  return localStorage.getItem("user") !== null;
}

document.getElementById("protectedBtn").addEventListener("click", function () {
  const user = localStorage.getItem("user");

  if (!isLoggedIn()) {
    alert("You must be logged in to view details.");
    window.location.href = "../FrontEnd/loginPage.html";
  } else {
    window.location.href = "../FrontEnd/details.html";
  }
});
