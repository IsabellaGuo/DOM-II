// Your code goes here
// mouseover
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseover", () => {
   logoHeading.classList.toggle("change-color");
});
// mouseout
logoHeading.addEventListener("mouseout", () => {
   logoHeading.classList.toggle("change-color2");
});

// keydown
// click
document.querySelector(".text-content h2").addEventListener("click", myClick)

function myClick(){
   document.querySelector(".text-content h2").textContent = "Where To?"
}