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
      card.style.margin = 'left'
    } else {
      card.style.display = "none";
    }
  });
});


// code to handle the protected button click

function isLoggedIn() {
  return localStorage.getItem("user") !== null;
}

document.getElementById("protectedBtn").addEventListener("click", function() {
  const user = localStorage.getItem("user"); 

  if(!isLoggedIn()){
    alert("You must be logged in to view details.");  
    window.location.href = "../FrontEnd/loginPage.html";
  } else {
    window.location.href = "../FrontEnd/details.html";
  }

});