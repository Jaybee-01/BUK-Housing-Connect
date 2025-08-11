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
