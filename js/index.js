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
document.querySelector("body").addEventListener("keydown", myKeydownFunc);

function myKeydownFunc(){
   alert(`You pressed a key!`);
}


// click
document.querySelector(".text-content h2").addEventListener("click", myClick)

function myClick(){
   document.querySelector(".text-content h2").textContent = "Where To?"
}

//load
window.addEventListener("load", function(event){
   alert (`Ready? Go!`);
})

// mousemove
const destination = document.querySelector(".content-destination");
destination.addEventListener("mousemove", () => {
   destination.classList.toggle("change-color");
})

// resize
window.addEventListener("resize", myResizeFunc)
function myResizeFunc () {
   alert(`Don't resize me`)
}

//dblclick
const funintheSun = document.querySelector(".destination h4");

funintheSun.addEventListener("dblclick", (event) =>{
   funintheSun.classList.toggle("change-color3");
});

// wheel
document.querySelector(".home").addEventListener("wheel", myWheelFunc);

function myWheelFunc(){
   this.style.color = "#ff9d76";
}

//scroll
window.addEventListener("scroll", () =>{
   console.log ("scroll")
   document.querySelector("header").style.backgroundColor = "#51eaea";
})
