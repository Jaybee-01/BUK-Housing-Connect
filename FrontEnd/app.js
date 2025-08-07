// code for the range input to display the value
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

priceRange.addEventListener("input", () => {
  priceValue.textContent = Number(priceRange.value).toLocaleString();
});
