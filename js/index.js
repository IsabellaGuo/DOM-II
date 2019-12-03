// Your code goes here
// mouseover
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseover", () => {
   logoHeading.classList.toggle("change-color");
});

logoHeading.addEventListener("mouseout", () => {
   logoHeading.classList.toggle("change-color2");
});
