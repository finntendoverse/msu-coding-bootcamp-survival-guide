window.addEventListener("load", function() {
    fundamentalsSection.setAttribute("class", "hidden");
    frontEndSection.setAttribute("class", "hidden");
    backEndSection.setAttribute("class", "hidden");
})

let fundamentalsButton = document.querySelector("#fundamentals-button");
let fundamentalsSection = document.querySelector("#fundamentals-section");

let frontEndButton = document.querySelector("#front-end-button");
let frontEndSection = document.querySelector("#front-end-section");

let backEndButton = document.querySelector("#back-end-button");
let backEndSection = document.querySelector("#back-end-section");

fundamentalsButton.addEventListener("click", function() {
    fundamentalsSection.classList.toggle("hidden");
    frontEndSection.setAttribute("class", "hidden");
    backEndSection.setAttribute("class", "hidden");
});

frontEndButton.addEventListener("click", function() {
    fundamentalsSection.setAttribute("class", "hidden");
    frontEndSection.classList.toggle("hidden");
    backEndSection.setAttribute("class", "hidden");
});

backEndButton.addEventListener("click", function() {
    fundamentalsSection.setAttribute("class", "hidden");
    frontEndSection.setAttribute("class", "hidden");
    backEndSection.classList.toggle("hidden");
});