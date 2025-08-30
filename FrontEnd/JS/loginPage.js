// code to switch between student login page and landlord page

const studentBtn = document.getElementById("studentBtn");
const landlordBtn = document.getElementById("landlordBtn");
const studentForm = document.getElementById("studentLoginForm");
const landlordForm = document.getElementById("landlordLoginForm");

studentBtn.addEventListener("click", () => {
  studentForm.classList.add("active");
  landlordForm.classList.remove("active");
  studentBtn.classList.add("active");
  landlordBtn.classList.remove("active");
});

landlordBtn.addEventListener("click", () => {
  landlordForm.classList.add("active");
  studentForm.classList.remove("active");
  landlordBtn.classList.add("active");
  studentBtn.classList.remove("active");
});
